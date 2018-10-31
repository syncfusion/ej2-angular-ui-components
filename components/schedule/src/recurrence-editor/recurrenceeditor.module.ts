import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecurrenceEditorComponent } from './recurrenceeditor.component';

/**
 * NgModule definition for the RecurrenceEditor component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        RecurrenceEditorComponent
    ],
    exports: [
        RecurrenceEditorComponent
    ]
})
export class RecurrenceEditorModule { }