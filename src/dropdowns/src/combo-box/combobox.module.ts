import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComboBoxComponent } from './combobox.component';

/**
 * NgModule definition for the ComboBox component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        ComboBoxComponent
    ],
    exports: [
        ComboBoxComponent
    ]
})
export class ComboBoxModule { }