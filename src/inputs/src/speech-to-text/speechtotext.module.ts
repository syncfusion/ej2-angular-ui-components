import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeechToTextComponent } from './speechtotext.component';

/**
 * NgModule definition for the SpeechToText component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        SpeechToTextComponent
    ],
    exports: [
        SpeechToTextComponent
    ]
})
export class SpeechToTextModule { }