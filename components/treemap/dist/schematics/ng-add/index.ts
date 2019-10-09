import { pkgName, pkgVer, moduleName, themeVer } from './../utils/lib-details';
import { install } from '@syncfusion/ej2-angular-base/schematics';
import { OptionsSchema, LibOptionsSchema } from './schema';
import { Rule } from '@angular-devkit/schematics';

export default function (options: OptionsSchema): Rule {
	const libOptions: LibOptionsSchema = Object.assign({},
		{ 'pkgName': pkgName, 'pkgVer': pkgVer, 'moduleName': moduleName, 'themeVer': themeVer });
	return install(options, libOptions);
}
