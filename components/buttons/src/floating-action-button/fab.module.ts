import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabComponent } from './fab.component';

/**
 * NgModule definition for the Fab component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        FabComponent
    ],
    exports: [
        FabComponent
    ]
})
export class FabModule { }