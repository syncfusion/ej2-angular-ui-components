export interface OptionsSchema {
    // Whether to skip package.json install.
    skipPackageJson: boolean;

    // Used to specify required module names
    modules: string;

    // Used to specify custom module path
    modulePath: string;

    // Used to specify theme name
    theme:  'material' | 'fabric' | 'bootstrap' | 'highcontrast';

    // Name of the project to target.
    project?: string;
}

export interface LibOptionsSchema {
    // Package name
    pkgName: string;

    // Package version
    pkgVer: string;

    // Library base module name
    moduleName: string;

    // Theme version
    themeVer: string;
}
