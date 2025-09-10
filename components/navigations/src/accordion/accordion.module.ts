import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionItemDirective, AccordionItemsDirective } from './items.directive';
import { AccordionComponent } from './accordion.component';

/**
 * NgModule definition for the Accordion component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        AccordionComponent,
        AccordionItemDirective,
        AccordionItemsDirective
    ],
    exports: [
        AccordionComponent,
        AccordionItemDirective,
        AccordionItemsDirective
    ]
})
export class AccordionModule { }