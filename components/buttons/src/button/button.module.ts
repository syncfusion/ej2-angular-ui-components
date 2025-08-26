import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';

/**
 * NgModule definition for the Button component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        ButtonComponent
    ],
    exports: [
        ButtonComponent
    ]
})
export class ButtonModule { }