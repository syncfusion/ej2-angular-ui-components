import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContextMenuComponent } from './contextmenu.component';

/**
 * NgModule definition for the ContextMenu component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        ContextMenuComponent
    ],
    exports: [
        ContextMenuComponent
    ]
})
export class ContextMenuModule { }