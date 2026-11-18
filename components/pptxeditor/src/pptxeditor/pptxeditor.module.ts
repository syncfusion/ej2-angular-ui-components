import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PptxEditorComponent } from './pptxeditor.component';

const PPTXEDITOR_DIRECTIVES = [
    PptxEditorComponent
];

/**
 * NgModule definition for the PptxEditor component.
 * Re-exports standalone PptxEditor component and directives so existing apps can keep using:
 * `imports: [PptxEditorModule]`
 */
@NgModule({
    imports: [CommonModule, ...PPTXEDITOR_DIRECTIVES],
    exports: [...PPTXEDITOR_DIRECTIVES]
})
export class PptxEditorModule { }