import { NgModule, ValueProvider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockEditorComponent } from './blockeditor.component';
import { BlockEditorModule } from './blockeditor.module';





/**
 * NgModule definition for the BlockEditor component with providers.
 */
@NgModule({
    imports: [CommonModule, BlockEditorModule],
    exports: [
        BlockEditorModule
    ],
    providers:[
        
    ]
})
export class BlockEditorAllModule { }