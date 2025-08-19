import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemDirective, ItemsDirective } from './items.directive';
import { TimelineComponent } from './timeline.component';

/**
 * NgModule definition for the Timeline component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        TimelineComponent,
        ItemDirective,
        ItemsDirective
    ],
    exports: [
        TimelineComponent,
        ItemDirective,
        ItemsDirective
    ]
})
export class TimelineModule { }