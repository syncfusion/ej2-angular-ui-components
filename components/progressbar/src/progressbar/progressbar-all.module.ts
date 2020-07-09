import { NgModule, ValueProvider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarAnnotationDirective, ProgressBarAnnotationsDirective } from './annotations.directive';
import { ProgressBarComponent } from './progressbar.component';
import { ProgressBarModule } from './progressbar.module';
import {ProgressAnnotation} from '@syncfusion/ej2-progressbar'


export const ProgressAnnotationService: ValueProvider = { provide: 'ProgressBarProgressAnnotation', useValue: ProgressAnnotation};

/**
 * NgModule definition for the ProgressBar component with providers.
 */
@NgModule({
    imports: [CommonModule, ProgressBarModule],
    exports: [
        ProgressBarModule
    ],
    providers:[
        ProgressAnnotationService
    ]
})
export class ProgressBarAllModule { }