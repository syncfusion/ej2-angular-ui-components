import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabItemDirective, TabItemsDirective } from './items.directive';
import { TabComponent } from './tab.component';

/**
 * NgModule definition for the Tab component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        TabComponent,
        TabItemDirective,
        TabItemsDirective
    ],
    exports: [
        TabComponent,
        TabItemDirective,
        TabItemsDirective
    ]
})
export class TabModule { }