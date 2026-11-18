import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PDF417GeneratorComponent } from './pdf417generator.component';

const PDF417GENERATOR_DIRECTIVES = [
    PDF417GeneratorComponent
];

/**
 * NgModule definition for the PDF417Generator component.
 * Re-exports standalone PDF417Generator component and directives so existing apps can keep using:
 * `imports: [PDF417GeneratorModule]`
 */
@NgModule({
    imports: [CommonModule, ...PDF417GENERATOR_DIRECTIVES],
    exports: [...PDF417GENERATOR_DIRECTIVES]
})
export class PDF417GeneratorModule { }