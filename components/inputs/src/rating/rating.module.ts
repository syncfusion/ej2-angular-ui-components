import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './rating.component';

/**
 * NgModule definition for the Rating component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        RatingComponent
    ],
    exports: [
        RatingComponent
    ]
})
export class RatingModule { }