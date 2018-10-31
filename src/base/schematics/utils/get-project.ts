/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { WorkspaceProject, WorkspaceSchema } from '@schematics/angular/utility/config';

export function getProjectFromWorkspace(workspace: WorkspaceSchema,
    projectName?: string): WorkspaceProject {

    let project: WorkspaceProject = workspace.projects[projectName || workspace.defaultProject];

    if (!project) {
        throw new Error(`Could not find project in workspace: ${projectName}`);
    }

    return project;

}
