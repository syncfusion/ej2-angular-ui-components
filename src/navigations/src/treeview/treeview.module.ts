import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeViewComponent } from './treeview.component';

/**
 * NgModule definition for the TreeView component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        TreeViewComponent
    ],
    exports: [
        TreeViewComponent
    ]
})
export class TreeViewModule { }