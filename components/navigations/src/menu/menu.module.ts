import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemDirective, MenuItemsDirective } from './items.directive';
import { MenuComponent } from './menu.component';

/**
 * NgModule definition for the Menu component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        MenuComponent,
        MenuItemDirective,
        MenuItemsDirective
    ],
    exports: [
        MenuComponent,
        MenuItemDirective,
        MenuItemsDirective
    ]
})
export class MenuModule { }