import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockDirective, BlocksDirective } from './blocks.directive';
import { BlockEditorComponent } from './blockeditor.component';

/**
 * NgModule definition for the BlockEditor component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        BlockEditorComponent,
        BlockDirective,
        BlocksDirective
    ],
    exports: [
        BlockEditorComponent,
        BlockDirective,
        BlocksDirective
    ]
})
export class BlockEditorModule { }