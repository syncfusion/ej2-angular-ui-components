import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaskedTextBoxComponent } from './maskedtextbox.component';

/**
 * NgModule definition for the MaskedTextBox component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        MaskedTextBoxComponent
    ],
    exports: [
        MaskedTextBoxComponent
    ]
})
export class MaskedTextBoxModule { }