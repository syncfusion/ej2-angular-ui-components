import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBoxComponent } from './listbox.component';

/**
 * NgModule definition for the ListBox component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        ListBoxComponent
    ],
    exports: [
        ListBoxComponent
    ]
})
export class ListBoxModule { }