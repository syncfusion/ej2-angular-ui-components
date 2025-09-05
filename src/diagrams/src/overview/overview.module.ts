import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview.component';

/**
 * NgModule definition for the Overview component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        OverviewComponent
    ],
    exports: [
        OverviewComponent
    ]
})
export class OverviewModule { }