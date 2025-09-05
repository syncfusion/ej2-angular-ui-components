import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownTreeComponent } from './dropdowntree.component';

/**
 * NgModule definition for the DropDownTree component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        DropDownTreeComponent
    ],
    exports: [
        DropDownTreeComponent
    ]
})
export class DropDownTreeModule { }