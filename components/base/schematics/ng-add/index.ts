import { normalize } from '@angular-devkit/core';
import { chain, noop, Rule, SchematicContext, SchematicsException, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { getWorkspace, WorkspaceProject, WorkspaceSchema } from '@schematics/angular/utility/config';
import { addModuleImportToModule, addModuleImportToRootModule } from '../utils/ast';
import { getProjectFromWorkspace } from '../utils/get-project';
import { addEJ2Theme, addEJ2ThemeToPackageJson } from './theme';
import { addEJ2PackageToPackageJson } from './../utils/package';
import { LibOptionsSchema, OptionsSchema } from './schema';

function addEJ2ToPackageJson(libOptions: LibOptionsSchema): (host: Tree) => Tree {
    return (host: Tree) => {
        addEJ2PackageToPackageJson(host, 'dependencies', libOptions.pkgName, libOptions.pkgVer);
        return host;
    };
}

/*
 * Install the packages
 */
function installNodePackages(): (host: Tree, context: SchematicContext) => void {
    return (host: Tree, context: SchematicContext) => {
        context.addTask(new NodePackageInstallTask());
        return host;
    };
}

/*
 * Install function to accept the schema, package name and version
 */
export function install(options: OptionsSchema, libOptions: LibOptionsSchema): Rule {
    const theme: string = options.theme || 'material';
    return chain([
        options && options.skipPackageJson ? noop() : addEJ2ToPackageJson(libOptions),
        addEJ2ThemeToPackageJson(options, libOptions),
        (options && !options.skipPackageJson) ? installNodePackages() : noop(),
        addEJ2PackageRootConfig(options, libOptions),
        addEJ2Theme(options, theme)
    ]);
}

function validateEJ2Modules(moduleName: string, libOptions: LibOptionsSchema): string[] {
    return libOptions.moduleName.split(',').filter((module: string) => {
        return ((module.trim().split('Module'))[0].toLowerCase() === moduleName.toLowerCase())
    });
}

function addModuleImportToCustomModule(host: Tree, options: OptionsSchema, validModules: string,
    libOptions: LibOptionsSchema): void {
    if (host.exists(options.modulePath.toString())) {
        addModuleImportToModule(host, normalize(options.modulePath.toString()), validModules, libOptions.pkgName);
    } else {
        throw new SchematicsException(
            `Could not find the module file. The given path \'${options.modulePath}\' is invalid. ` +
            `Please provide a valid relative path to the module file.\n` +
            `For example: src/app/app.module.ts`
        );
    }
}

/*
 * Add browser animation module to app.module
 */
function addEJ2PackageRootConfig(options: OptionsSchema, libOptions: LibOptionsSchema): (host: Tree) => Tree {
    return (host: Tree) => {
        const workspace: WorkspaceSchema = getWorkspace(host);
        const project: WorkspaceProject = getProjectFromWorkspace(workspace, options.project);
        let validModules: string;
        let availableModules: string = libOptions.moduleName.replace(/Module/g, '').trim();
        if (options.modules !== '') {
            let preferredModule: string[] = [];
            options.modules.split(',').forEach((module: string) => {
                let validatedModule = (validateEJ2Modules(module.trim(), libOptions)).toString().trim();
                if (validatedModule === '') {
                    console.log('\x1b[31m%s\x1b[0m', 'The ' + module + 'module is not part of the' +
                        ' package, ' + libOptions.pkgName + '. The available modules are ' + availableModules + '.');
                } else {
                    preferredModule.push(validatedModule);
                }
            });
            validModules = preferredModule.toString().replace(/,/g, ', ');
        } else {
            validModules = libOptions.moduleName;
        }
        (options.modulePath !== undefined && options.modulePath !== "") ? addModuleImportToCustomModule(host, options, validModules, libOptions) :
            addModuleImportToRootModule(host, validModules, libOptions.pkgName, project);
        return host;
    };
}
