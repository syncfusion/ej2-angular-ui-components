import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartPasteButtonComponent } from './smartpastebutton.component';

/**
 * NgModule definition for the SmartPasteButton component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        SmartPasteButtonComponent
    ],
    exports: [
        SmartPasteButtonComponent
    ]
})
export class SmartPasteButtonModule { }