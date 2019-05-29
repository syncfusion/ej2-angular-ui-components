import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitButtonComponent } from './splitbutton.component';

/**
 * NgModule definition for the SplitButton component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        SplitButtonComponent
    ],
    exports: [
        SplitButtonComponent
    ]
})
export class SplitButtonModule { }