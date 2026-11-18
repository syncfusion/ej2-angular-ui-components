import { NgModule, ValueProvider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarcodeGeneratorComponent } from './barcodegenerator.component';
import { BarcodeGeneratorModule } from './barcodegenerator.module';
import {WebMcpBarcode} from '@syncfusion/ej2-barcode-generator'


export const WebMcpBarcodeService: ValueProvider = { provide: 'Barcode-GeneratorWebMcpBarcode', useValue: WebMcpBarcode};

/**
 * NgModule definition for the BarcodeGenerator component with providers.
 */
@NgModule({
    imports: [CommonModule, BarcodeGeneratorModule],
    exports: [
        BarcodeGeneratorModule
    ],
    providers:[
        WebMcpBarcodeService
    ]
})
export class BarcodeGeneratorAllModule { }