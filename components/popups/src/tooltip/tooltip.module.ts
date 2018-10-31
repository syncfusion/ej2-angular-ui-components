import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from './tooltip.component';

/**
 * NgModule definition for the Tooltip component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        TooltipComponent
    ],
    exports: [
        TooltipComponent
    ]
})
export class TooltipModule { }