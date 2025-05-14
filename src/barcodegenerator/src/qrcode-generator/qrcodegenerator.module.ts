import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QRCodeGeneratorComponent } from './qrcodegenerator.component';

/**
 * NgModule definition for the QRCodeGenerator component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        QRCodeGeneratorComponent
    ],
    exports: [
        QRCodeGeneratorComponent
    ]
})
export class QRCodeGeneratorModule { }