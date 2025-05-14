import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipDirective, ChipsDirective } from './chips.directive';
import { ChipListComponent } from './chiplist.component';

/**
 * NgModule definition for the ChipList component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        ChipListComponent,
        ChipDirective,
        ChipsDirective
    ],
    exports: [
        ChipListComponent,
        ChipDirective,
        ChipsDirective
    ]
})
export class ChipListModule { }