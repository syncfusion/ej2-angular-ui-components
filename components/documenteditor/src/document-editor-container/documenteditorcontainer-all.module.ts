import { NgModule, ValueProvider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentEditorContainerComponent } from './documenteditorcontainer.component';
import { DocumentEditorContainerModule } from './documenteditorcontainer.module';
import {Toolbar} from '@syncfusion/ej2-documenteditor'


export const ToolbarService: ValueProvider = { provide: 'DocumentEditorToolbar', useValue: Toolbar};

/**
 * NgModule definition for the DocumentEditorContainer component with providers.
 */
@NgModule({
    imports: [CommonModule, DocumentEditorContainerModule],
    exports: [
        DocumentEditorContainerModule
    ],
    providers:[
        ToolbarService
    ]
})
export class DocumentEditorContainerAllModule { }