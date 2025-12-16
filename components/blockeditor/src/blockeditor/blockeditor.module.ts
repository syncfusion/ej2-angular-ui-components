import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockEditorComponent } from './blockeditor.component';

/**
 * NgModule definition for the BlockEditor component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        BlockEditorComponent
    ],
    exports: [
        BlockEditorComponent
    ]
})
export class BlockEditorModule { }