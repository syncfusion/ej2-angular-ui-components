import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownButtonItemDirective, DropDownButtonItemsDirective } from './items.directive';
import { DropDownButtonComponent } from './dropdownbutton.component';

/**
 * NgModule definition for the DropDownButton component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        DropDownButtonComponent,
        DropDownButtonItemDirective,
        DropDownButtonItemsDirective
    ],
    exports: [
        DropDownButtonComponent,
        DropDownButtonItemDirective,
        DropDownButtonItemsDirective
    ]
})
export class DropDownButtonModule { }