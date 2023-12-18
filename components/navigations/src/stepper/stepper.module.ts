import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepDirective, StepsDirective } from './steps.directive';
import { StepperComponent } from './stepper.component';

/**
 * NgModule definition for the Stepper component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        StepperComponent,
        StepDirective,
        StepsDirective
    ],
    exports: [
        StepperComponent,
        StepDirective,
        StepsDirective
    ]
})
export class StepperModule { }