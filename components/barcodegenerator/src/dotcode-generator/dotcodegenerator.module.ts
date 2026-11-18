import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DotCodeGeneratorComponent } from './dotcodegenerator.component';

const DOTCODEGENERATOR_DIRECTIVES = [
    DotCodeGeneratorComponent
];

/**
 * NgModule definition for the DotCodeGenerator component.
 * Re-exports standalone DotCodeGenerator component and directives so existing apps can keep using:
 * `imports: [DotCodeGeneratorModule]`
 */
@NgModule({
    imports: [CommonModule, ...DOTCODEGENERATOR_DIRECTIVES],
    exports: [...DOTCODEGENERATOR_DIRECTIVES]
})
export class DotCodeGeneratorModule { }