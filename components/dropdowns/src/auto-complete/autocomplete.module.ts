import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoCompleteComponent } from './autocomplete.component';

/**
 * NgModule definition for the AutoComplete component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        AutoCompleteComponent
    ],
    exports: [
        AutoCompleteComponent
    ]
})
export class AutoCompleteModule { }