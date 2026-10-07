import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfComparerComponent } from './pdfcomparer.component';

const PDFCOMPARER_DIRECTIVES = [
    PdfComparerComponent
];

/**
 * NgModule definition for the PdfComparer component.
 * Re-exports standalone PdfComparer component and directives so existing apps can keep using:
 * `imports: [PdfComparerModule]`
 */
@NgModule({
    imports: [CommonModule, ...PDFCOMPARER_DIRECTIVES],
    exports: [...PDFCOMPARER_DIRECTIVES]
})
export class PdfComparerModule { }