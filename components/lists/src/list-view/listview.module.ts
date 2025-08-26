import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewComponent } from './listview.component';

/**
 * NgModule definition for the ListView component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        ListViewComponent
    ],
    exports: [
        ListViewComponent
    ]
})
export class ListViewModule { }