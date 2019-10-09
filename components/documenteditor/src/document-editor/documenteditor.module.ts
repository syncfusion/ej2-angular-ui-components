import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentEditorComponent } from './documenteditor.component';

/**
 * NgModule definition for the DocumentEditor component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        DocumentEditorComponent
    ],
    exports: [
        DocumentEditorComponent
    ]
})
export class DocumentEditorModule { }