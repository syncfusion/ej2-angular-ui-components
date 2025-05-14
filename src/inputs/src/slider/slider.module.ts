import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider.component';

/**
 * NgModule definition for the Slider component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        SliderComponent
    ],
    exports: [
        SliderComponent
    ]
})
export class SliderModule { }