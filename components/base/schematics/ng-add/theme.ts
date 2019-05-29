import { Tree } from "@angular-devkit/schematics";
import { InsertChange } from "@schematics/angular/utility/change";
import { getWorkspace, WorkspaceProject, WorkspaceSchema } from "@schematics/angular/utility/config";
import { LibOptionsSchema, OptionsSchema } from "../ng-add/schema";
import { getProjectFromWorkspace } from "../utils/get-project";
import { addEJ2PackageToPackageJson } from "../utils/package";
import { assertDefaultBuildersConfigured, getProjectStyleFile } from "../utils/project-style-file";

/*
 * Adds EJ2 theme dependecies
 */
export function addEJ2ThemeToPackageJson(options: OptionsSchema, libOptions: LibOptionsSchema): (host: Tree) => Tree {
    const themeVer: string = libOptions.themeVer ? libOptions.themeVer : 'latest';
    return (host: Tree) => {
        addEJ2PackageToPackageJson(host, 'dependencies', `@syncfusion/ej2-${options.theme || 'material'}-theme`, themeVer);
        return host;
    };
}

/*
 * Adds EJ2 theme
 */
export function addEJ2Theme(options: OptionsSchema, theme: string): (host: Tree) => Tree {
    return (host: Tree) => {
        const themePath: string = `@import \'..\/node_modules/@syncfusion/ej2-${theme}-theme/styles/${theme}.css\';\n`;
        const strippedThemePath = `./node_modules/@syncfusion/ej2-${theme}-theme/styles/${theme}.css`;
        const workspace: WorkspaceSchema = getWorkspace(host);
        const project: WorkspaceProject = getProjectFromWorkspace(workspace, options.project);
        const stylesPath: string = getProjectStyleFile(project, 'css');
        const stylesBuffer: Buffer = host.read(stylesPath);

        // Because the build setup for the Angular CLI can be changed so dramatically, we can't know
        // where to generate anything if the project is not using the default config for build and test.
        assertDefaultBuildersConfigured(project);

        options.skipPackageJson ? console.log('\x1b[33m%s\x1b[0m', `WARNING: You skipped the dependency installation. ` +
            `You must manually install the \'@syncfusion/ej2-${theme}-theme\' package. ` +
            `If you have already done this, you can ignore this message.`) :
            null;

        if (stylesBuffer) {
            const stylesContent = stylesBuffer.toString();
            if (!stylesContent.includes(themePath)) {
                const streamContent = host.beginUpdate(stylesPath);
                const insertion = new InsertChange(stylesPath, 0, themePath);
                streamContent.insertLeft(insertion.pos, insertion.toAdd);
                host.commitUpdate(streamContent);
            }
        } else {
            console.log('\x1b[31m%s\x1b[0m', `Cannot import theme file. The file \'/src/styles.css\' is missing.`);
        }

        project.architect ? [
            addStyleToTarget(project.architect['build'], host, strippedThemePath, workspace),
            addStyleToTarget(project.architect['test'], host, strippedThemePath, workspace)
        ] :
            console.log('\x1b[31m%s\x1b[0m', `The project does not have an architect configuration. `
                + `Cannot add entry theme file in \'angular.json\'.`);

        return host;
    };
}

/*
 * Adds a style entry to the given target.
 */
function addStyleToTarget(target: any, host: Tree, asset: string, workspace: WorkspaceSchema) {
    // We can't assume that any of these properties are defined, so safely add them as we go
    // if necessary.
    if (!target.options) {
        target.options = { styles: [asset] };
    } else if (!target.options.styles) {
        target.options.styles = [asset];
    } else {
        const currentStyles: string[] = target.options.styles.map(s => typeof s === 'string' ? s : s.input);
        if (!currentStyles.includes(asset)) {
            target.options.styles.push(asset);
        }
    }

    host.overwrite('angular.json', JSON.stringify(workspace, null, 2));
}
