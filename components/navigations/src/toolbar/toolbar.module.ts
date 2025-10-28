import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemDirective, ItemsDirective } from './items.directive';
import { ToolbarComponent } from './toolbar.component';

/**
 * NgModule definition for the Toolbar component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        ToolbarComponent,
        ItemDirective,
        ItemsDirective
    ],
    exports: [
        ToolbarComponent,
        ItemDirective,
        ItemsDirective
    ]
})
export class ToolbarModule { }