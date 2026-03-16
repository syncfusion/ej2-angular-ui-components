import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineAIAssistComponent } from './inlineaiassist.component';

/**
 * NgModule definition for the InlineAIAssist component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        InlineAIAssistComponent
    ],
    exports: [
        InlineAIAssistComponent
    ]
})
export class InlineAIAssistModule { }