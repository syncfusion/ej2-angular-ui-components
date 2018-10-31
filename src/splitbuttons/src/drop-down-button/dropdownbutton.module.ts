import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownButtonComponent } from './dropdownbutton.component';

/**
 * NgModule definition for the DropDownButton component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        DropDownButtonComponent
    ],
    exports: [
        DropDownButtonComponent
    ]
})
export class DropDownButtonModule { }