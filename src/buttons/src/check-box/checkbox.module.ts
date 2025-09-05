import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckBoxComponent } from './checkbox.component';

/**
 * NgModule definition for the CheckBox component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        CheckBoxComponent
    ],
    exports: [
        CheckBoxComponent
    ]
})
export class CheckBoxModule { }