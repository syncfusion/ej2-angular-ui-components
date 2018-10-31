import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogButtonDirective, ButtonsDirective } from './buttons.directive';
import { DialogComponent } from './dialog.component';

/**
 * NgModule definition for the Dialog component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        DialogComponent,
        DialogButtonDirective,
        ButtonsDirective
    ],
    exports: [
        DialogComponent,
        DialogButtonDirective,
        ButtonsDirective
    ]
})
export class DialogModule { }