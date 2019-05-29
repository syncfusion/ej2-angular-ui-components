"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lib_details_1 = require("./../utils/lib-details");
const schematics_1 = require("@syncfusion/ej2-angular-base/schematics");
function default_1(options) {
    const libOptions = Object.assign({}, { 'pkgName': lib_details_1.pkgName, 'pkgVer': lib_details_1.pkgVer, 'moduleName': lib_details_1.moduleName, 'themeVer': lib_details_1.themeVer });
    return schematics_1.install(options, libOptions);
}
exports.default = default_1;
