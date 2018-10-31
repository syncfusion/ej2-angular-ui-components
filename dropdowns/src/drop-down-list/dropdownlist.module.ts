import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownListComponent } from './dropdownlist.component';

/**
 * NgModule definition for the DropDownList component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        DropDownListComponent
    ],
    exports: [
        DropDownListComponent
    ]
})
export class DropDownListModule { }