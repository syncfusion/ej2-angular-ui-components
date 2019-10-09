import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewDirective, ViewsDirective } from './views.directive';
import { ResourceDirective, ResourcesDirective } from './resources.directive';
import { HeaderRowDirective, HeaderRowsDirective } from './headerrows.directive';
import { ScheduleComponent } from './schedule.component';

/**
 * NgModule definition for the Schedule component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        ScheduleComponent,
        ViewDirective,
        ViewsDirective,
        ResourceDirective,
        ResourcesDirective,
        HeaderRowDirective,
        HeaderRowsDirective
    ],
    exports: [
        ScheduleComponent,
        ViewDirective,
        ViewsDirective,
        ResourceDirective,
        ResourcesDirective,
        HeaderRowDirective,
        HeaderRowsDirective
    ]
})
export class ScheduleModule { }