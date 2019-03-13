"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@syncfusion/ej2-angular-base/schematics");
const sampleDetails = require("./sample-details");
function default_1(options) {
    return schematics_1.componentBuilder(options, sampleDetails);
}
exports.default = default_1;
