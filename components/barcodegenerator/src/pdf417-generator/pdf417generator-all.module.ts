import { NgModule, ValueProvider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PDF417GeneratorComponent } from './pdf417generator.component';
import { PDF417GeneratorModule } from './pdf417generator.module';





/**
 * NgModule definition for the PDF417Generator component with providers.
 */
@NgModule({
    imports: [CommonModule, PDF417GeneratorModule],
    exports: [
        PDF417GeneratorModule
    ],
    providers:[
        
    ]
})
export class PDF417GeneratorAllModule { }