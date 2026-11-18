import { NgModule, ValueProvider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DotCodeGeneratorComponent } from './dotcodegenerator.component';
import { DotCodeGeneratorModule } from './dotcodegenerator.module';





/**
 * NgModule definition for the DotCodeGenerator component with providers.
 */
@NgModule({
    imports: [CommonModule, DotCodeGeneratorModule],
    exports: [
        DotCodeGeneratorModule
    ],
    providers:[
        
    ]
})
export class DotCodeGeneratorAllModule { }