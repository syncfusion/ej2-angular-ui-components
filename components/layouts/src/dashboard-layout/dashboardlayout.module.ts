import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelDirective, PanelsDirective } from './panels.directive';
import { DashboardLayoutComponent } from './dashboardlayout.component';

/**
 * NgModule definition for the DashboardLayout component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        DashboardLayoutComponent,
        PanelDirective,
        PanelsDirective
    ],
    exports: [
        DashboardLayoutComponent,
        PanelDirective,
        PanelsDirective
    ]
})
export class DashboardLayoutModule { }