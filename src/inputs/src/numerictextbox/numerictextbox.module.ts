import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumericTextBoxComponent } from './numerictextbox.component';

/**
 * NgModule definition for the NumericTextBox component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        NumericTextBoxComponent
    ],
    exports: [
        NumericTextBoxComponent
    ]
})
export class NumericTextBoxModule { }