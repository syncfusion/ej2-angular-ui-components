import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaneDirective, PanesDirective } from './panesettings.directive';
import { SplitterComponent } from './splitter.component';

/**
 * NgModule definition for the Splitter component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        SplitterComponent,
        PaneDirective,
        PanesDirective
    ],
    exports: [
        SplitterComponent,
        PaneDirective,
        PanesDirective
    ]
})
export class SplitterModule { }