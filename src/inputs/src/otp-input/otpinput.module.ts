import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtpInputComponent } from './otpinput.component';

/**
 * NgModule definition for the OtpInput component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        OtpInputComponent
    ],
    exports: [
        OtpInputComponent
    ]
})
export class OtpInputModule { }