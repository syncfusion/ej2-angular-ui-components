import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModelPropDirective, ButtonModelPropsDirective } from './buttons.directive';
import { ToastComponent } from './toast.component';

/**
 * NgModule definition for the Toast component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        ToastComponent,
        ButtonModelPropDirective,
        ButtonModelPropsDirective
    ],
    exports: [
        ToastComponent,
        ButtonModelPropDirective,
        ButtonModelPropsDirective
    ]
})
export class ToastModule { }