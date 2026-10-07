import { NgModule, ValueProvider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfComparerComponent } from './pdfcomparer.component';
import { PdfComparerModule } from './pdfcomparer.module';





/**
 * NgModule definition for the PdfComparer component with providers.
 */
@NgModule({
    imports: [CommonModule, PdfComparerModule],
    exports: [
        PdfComparerModule
    ],
    providers:[
        
    ]
})
export class PdfComparerAllModule { }