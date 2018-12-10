import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InPlaceEditorComponent } from './inplaceeditor.component';

/**
 * NgModule definition for the InPlaceEditor component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        InPlaceEditorComponent
    ],
    exports: [
        InPlaceEditorComponent
    ]
})
export class InPlaceEditorModule { }