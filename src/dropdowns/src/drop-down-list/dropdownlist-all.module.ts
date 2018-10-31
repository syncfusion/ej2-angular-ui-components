import { NgModule, ValueProvider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownListComponent } from './dropdownlist.component';
import { DropDownListModule } from './dropdownlist.module';





/**
 * NgModule definition for the DropDownList component with providers.
 */
@NgModule({
    imports: [CommonModule, DropDownListModule],
    exports: [
        DropDownListModule
    ],
    providers:[
        
    ]
})
export class DropDownListAllModule { }