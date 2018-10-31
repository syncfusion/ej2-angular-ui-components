import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPickerComponent } from './colorpicker.component';

/**
 * NgModule definition for the ColorPicker component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        ColorPickerComponent
    ],
    exports: [
        ColorPickerComponent
    ]
})
export class ColorPickerModule { }