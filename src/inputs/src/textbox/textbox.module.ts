import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextBoxComponent } from './textbox.component';

/**
 * NgModule definition for the TextBox component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        TextBoxComponent
    ],
    exports: [
        TextBoxComponent
    ]
})
export class TextBoxModule { }