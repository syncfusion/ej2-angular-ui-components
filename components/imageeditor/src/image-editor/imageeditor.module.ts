import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageEditorComponent } from './imageeditor.component';

/**
 * NgModule definition for the ImageEditor component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        ImageEditorComponent
    ],
    exports: [
        ImageEditorComponent
    ]
})
export class ImageEditorModule { }