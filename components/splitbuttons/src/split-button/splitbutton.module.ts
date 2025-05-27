import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitButtonItemDirective, SplitButtonItemsDirective } from './items.directive';
import { SplitButtonComponent } from './splitbutton.component';

/**
 * NgModule definition for the SplitButton component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        SplitButtonComponent,
        SplitButtonItemDirective,
        SplitButtonItemsDirective
    ],
    exports: [
        SplitButtonComponent,
        SplitButtonItemDirective,
        SplitButtonItemsDirective
    ]
})
export class SplitButtonModule { }