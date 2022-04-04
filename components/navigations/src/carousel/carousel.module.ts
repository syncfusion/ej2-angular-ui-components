import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselItemDirective, CarouselItemsDirective } from './items.directive';
import { CarouselComponent } from './carousel.component';

/**
 * NgModule definition for the Carousel component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        CarouselComponent,
        CarouselItemDirective,
        CarouselItemsDirective
    ],
    exports: [
        CarouselComponent,
        CarouselItemDirective,
        CarouselItemsDirective
    ]
})
export class CarouselModule { }