import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiSelectComponent } from './multiselect.component';

/**
 * NgModule definition for the MultiSelect component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        MultiSelectComponent
    ],
    exports: [
        MultiSelectComponent
    ]
})
export class MultiSelectModule { }