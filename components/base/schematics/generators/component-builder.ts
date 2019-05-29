import { strings } from "@angular-devkit/core";
import { WorkspaceProject, WorkspaceSchema } from "@angular-devkit/core/src/workspace";
import {
    apply, branchAndMerge, chain, mergeWith, move, Rule,
    SchematicContext, SchematicsException, template, Tree, url, noop
} from "@angular-devkit/schematics";
import { Schema } from "@schematics/angular/component/schema";
import { getWorkspace } from "@schematics/angular/utility/config";
import * as ts from "typescript";
import { getProjectFromWorkspace } from "../utils/get-project";
import {
    addDeclarationToModule, buildRelativePath, findModuleFromOptions,
    InsertChange, parseName, validateHtmlSelector, validateName, addProviderToModule, isImported
} from "../utils/helpers/helpers";
import { addModuleImportToModule } from "../utils/ast";

export interface sampleDetails {
    componentName: string;
    sampleName: string;
    diModules: string;
    packageName: string;
    libModules: string;
}

export function componentBuilder(options: Schema, sampleDetails: sampleDetails): Rule {
    return (host: Tree, context: SchematicContext) => {
        const workspace: WorkspaceSchema = getWorkspace(host);
        const project: WorkspaceProject = getProjectFromWorkspace(workspace, options.project);

        options.selector = options.selector || strings.dasherize(options.name);

        if (options.path === undefined) {
            options.path = `/${project.root}/src/app/`;
        }

        const parsedPath = parseName(options.path, options.name);

        options.name = parsedPath.name;
        options.path = parsedPath.path;

        validateName(options.name);
        validateHtmlSelector(options.selector);

        options.selector = options.selector || buildSelector(options, project.prefix);

        options.module = findModuleFromOptions(host, options);

        const templateSource = apply(url('./samples'), [
            template({
                ...strings,
                'if-flat': (s: string) => options.flat ? '' : s,
                ...options,
            }),
            move(null, parsedPath.path)
        ]);

        const parsedImagePath = parseName(`/${project.root}/src/assets/${sampleDetails.componentName}`,
            `${sampleDetails.sampleName}`);

        let imagesExists = host.getDir(`${parsedImagePath.path}/${parsedImagePath.name}`).subfiles.length ?
            true : false, optionsClone = Object.assign({}, options), copyImages;

        optionsClone.path = parsedImagePath.path;
        optionsClone.name = parsedImagePath.name;

        if (!imagesExists) copyImages = apply(url('./images'), [
            template(Object.assign({}, strings, optionsClone)),
            move(null, parsedImagePath.path)
        ]);

        return chain([
            branchAndMerge(chain([
                addModuleToRoot(options, sampleDetails),
                mergeWith(templateSource),
                imagesExists ? noop() : mergeWith(copyImages),
            ]))
        ])(host, context);
    }
}

function buildSelector(options: Schema, projectPrefix: string) {
    let selector = strings.dasherize(options.name);
    if (options.prefix) {
        selector = `${options.prefix}-${selector}`;
    } else if (options.prefix === undefined && projectPrefix) {
        selector = `${projectPrefix}-${selector}`;
    }

    return selector;
}

function readIntoSourceFile(host: Tree, modulePath: string): ts.SourceFile {
    const text = host.read(modulePath);
    if (text === null) {
        throw new SchematicsException(`File ${modulePath} does not exist.`);
    }
    const sourceText = text.toString('utf-8');

    return ts.createSourceFile(modulePath, sourceText, ts.ScriptTarget.Latest, true);
}

function addModuleToRoot(options: Schema, sampleDetails: sampleDetails): (host: Tree) => Tree {
    return (host: Tree) => {

        const modulePath = options.module;
        let source = readIntoSourceFile(host, modulePath);

        const componentPath = `/${options.path}/`
            + (options.flat ? '' : strings.dasherize(options.name) + '/')
            + strings.dasherize(options.name)
            + '.component';
        const relativePath = buildRelativePath(modulePath, componentPath);
        const classifiedName = strings.classify(`${options.name}Component`);
        const declarationChanges = addDeclarationToModule(source,
            modulePath,
            classifiedName,
            relativePath);

        const declarationRecorder = host.beginUpdate(modulePath);

        for (const change of declarationChanges) {
            if (change instanceof InsertChange) {
                declarationRecorder.insertLeft(change.pos, change.toAdd);
            }
        }
        host.commitUpdate(declarationRecorder);

        addModuleImportToModule(host, modulePath, sampleDetails.libModules, sampleDetails.packageName);

        const providers = sampleDetails.diModules ? sampleDetails.diModules.split(',') : null;

        if (providers)
            providers.forEach((provider) => {
                if (!isImported(source, provider.trim(), sampleDetails.packageName)) {
                    source = readIntoSourceFile(host, modulePath);
                    const providerChanges = addProviderToModule(source,
                        modulePath,
                        provider,
                        sampleDetails.packageName);

                    const providerRecorder = host.beginUpdate(modulePath);

                    for (const change of providerChanges) {
                        if (change instanceof InsertChange) {
                            providerRecorder.insertLeft(change.pos, change.toAdd);
                        }
                    }
                    host.commitUpdate(providerRecorder);
                }
            })
        return host;
    };
}
