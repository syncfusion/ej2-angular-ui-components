import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfViewerComponent } from './pdfviewer.component';

/**
 * NgModule definition for the PdfViewer component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        PdfViewerComponent
    ],
    exports: [
        PdfViewerComponent
    ]
})
export class PdfViewerModule { }