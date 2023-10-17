import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressButtonComponent } from './progressbutton.component';

/**
 * NgModule definition for the ProgressButton component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        ProgressButtonComponent
    ],
    exports: [
        ProgressButtonComponent
    ]
})
export class ProgressButtonModule { }