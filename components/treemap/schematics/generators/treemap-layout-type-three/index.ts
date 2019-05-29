import { Rule } from '@angular-devkit/schematics';
import { componentBuilder } from "@syncfusion/ej2-angular-base/schematics";
import { Schema } from './schema';
import * as sampleDetails from './sample-details';

export default function (options: Schema): Rule {
  return componentBuilder(options, sampleDetails);
}
