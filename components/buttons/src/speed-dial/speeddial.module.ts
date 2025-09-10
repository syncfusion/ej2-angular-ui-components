import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeedDialItemDirective, SpeedDialItemsDirective } from './items.directive';
import { SpeedDialComponent } from './speeddial.component';

/**
 * NgModule definition for the SpeedDial component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        SpeedDialComponent,
        SpeedDialItemDirective,
        SpeedDialItemsDirective
    ],
    exports: [
        SpeedDialComponent,
        SpeedDialItemDirective,
        SpeedDialItemsDirective
    ]
})
export class SpeedDialModule { }