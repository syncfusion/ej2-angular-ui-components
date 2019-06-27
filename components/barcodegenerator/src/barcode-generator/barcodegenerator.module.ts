import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarcodeGeneratorComponent } from './barcodegenerator.component';

/**
 * NgModule definition for the BarcodeGenerator component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        BarcodeGeneratorComponent
    ],
    exports: [
        BarcodeGeneratorComponent
    ]
})
export class BarcodeGeneratorModule { }