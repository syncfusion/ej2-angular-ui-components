import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonComponent } from './radiobutton.component';

/**
 * NgModule definition for the RadioButton component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        RadioButtonComponent
    ],
    exports: [
        RadioButtonComponent
    ]
})
export class RadioButtonModule { }