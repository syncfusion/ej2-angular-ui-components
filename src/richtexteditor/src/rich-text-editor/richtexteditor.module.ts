import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RichTextEditorComponent } from './richtexteditor.component';

/**
 * NgModule definition for the RichTextEditor component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        RichTextEditorComponent
    ],
    exports: [
        RichTextEditorComponent
    ]
})
export class RichTextEditorModule { }