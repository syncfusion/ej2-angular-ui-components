import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignatureComponent } from './signature.component';

/**
 * NgModule definition for the Signature component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        SignatureComponent
    ],
    exports: [
        SignatureComponent
    ]
})
export class SignatureModule { }