import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModelPropsDirective, ButtonModelPropDirective } from './buttons.directive';
import { ToastComponent } from './toast.component';

/**
 * NgModule definition for the Toast component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        ToastComponent,
        ButtonModelPropsDirective,
        ButtonModelPropDirective
    ],
    exports: [
        ToastComponent,
        ButtonModelPropsDirective,
        ButtonModelPropDirective
    ]
})
export class ToastModule { }