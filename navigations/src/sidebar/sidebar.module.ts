import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';

/**
 * NgModule definition for the Sidebar component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        SidebarComponent
    ],
    exports: [
        SidebarComponent
    ]
})
export class SidebarModule { }