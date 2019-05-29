import { NgModule, ValueProvider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownButtonComponent } from './dropdownbutton.component';
import { DropDownButtonModule } from './dropdownbutton.module';





/**
 * NgModule definition for the DropDownButton component with providers.
 */
@NgModule({
    imports: [CommonModule, DropDownButtonModule],
    exports: [
        DropDownButtonModule
    ],
    providers:[
        
    ]
})
export class DropDownButtonAllModule { }