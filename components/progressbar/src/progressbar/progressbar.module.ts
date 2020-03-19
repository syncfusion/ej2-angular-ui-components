import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarAnnotationDirective, ProgressBarAnnotationsDirective } from './annotations.directive';
import { ProgressBarComponent } from './progressbar.component';

/**
 * NgModule definition for the ProgressBar component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        ProgressBarComponent,
        ProgressBarAnnotationDirective,
        ProgressBarAnnotationsDirective
    ],
    exports: [
        ProgressBarComponent,
        ProgressBarAnnotationDirective,
        ProgressBarAnnotationsDirective
    ]
})
export class ProgressBarModule { }