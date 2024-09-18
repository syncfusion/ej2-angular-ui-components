import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartTextAreaComponent } from './smarttextarea.component';

/**
 * NgModule definition for the SmartTextArea component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        SmartTextAreaComponent
    ],
    exports: [
        SmartTextAreaComponent
    ]
})
export class SmartTextAreaModule { }