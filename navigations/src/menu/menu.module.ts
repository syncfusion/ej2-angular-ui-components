import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';

/**
 * NgModule definition for the Menu component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        MenuComponent
    ],
    exports: [
        MenuComponent
    ]
})
export class MenuModule { }