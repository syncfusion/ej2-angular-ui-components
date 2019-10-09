/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { SchematicsException, Tree, UpdateRecorder } from '@angular-devkit/schematics';
import * as ts from 'typescript';
import { addImportToModule, isImported } from '@schematics/angular/utility/ast-utils';
import { InsertChange, Change } from '@schematics/angular/utility/change';
import { getAppModulePath } from '@schematics/angular/utility/ng-ast-utils';
import { WorkspaceProject } from '@schematics/angular/utility/config';

/**
 * Reads file given path and returns TypeScript source file.
 */
export function getSourceFile(host: Tree, path: string): ts.SourceFile {
    const buffer: Buffer = host.read(path);
    if (!buffer) {
        throw new SchematicsException(`Could not find file for path: ${path}`);
    }
    const content: string = buffer.toString();
    return ts.createSourceFile(path, content, ts.ScriptTarget.Latest, true);
}

/**
 * Import and add module to root app module.
 */
export function addModuleImportToRootModule(host: Tree, moduleName: string, src: string,
    project: WorkspaceProject) {

    const modulePath: string = getAppModulePath(host, project.architect.build.options.main);
    addModuleImportToModule(host, modulePath, moduleName, src);
}

/**
 * Import and add module to specific module path.
 * @param host the tree we are updating
 * @param modulePath src location of the module to import
 * @param moduleName name of module to import
 * @param src src location to import
 */
export function addModuleImportToModule(
    host: Tree, modulePath: string, moduleName: string, src: string) {
    const moduleSource: ts.SourceFile = getSourceFile(host, modulePath);
    let modulesToBeAdded: string[] = [];

    if (!moduleSource) {
        throw new SchematicsException(`Module not found: ${modulePath}`);
    }

    moduleName.split(',').forEach((module) => {
        if (!isImported(<any>moduleSource, module.trim(), src) && module !== '') {
            modulesToBeAdded.push(module);
        }
    });

    if (modulesToBeAdded.length) {
        const changes: Change[] = addImportToModule(<any>moduleSource, modulePath, modulesToBeAdded.toString().trim(), src);
        const recorder: UpdateRecorder = host.beginUpdate(modulePath);

        changes.forEach((change: any) => {
            if (change instanceof InsertChange) {
                recorder.insertLeft(change.pos, change.toAdd);
            }
        });

        host.commitUpdate(recorder);
    }
}
