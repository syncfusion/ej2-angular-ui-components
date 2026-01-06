import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentEditorContainerComponent } from './documenteditorcontainer.component';

/**
 * NgModule definition for the DocumentEditorContainer component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        DocumentEditorContainerComponent
    ],
    exports: [
        DocumentEditorContainerComponent
    ]
})
export class DocumentEditorContainerModule { }