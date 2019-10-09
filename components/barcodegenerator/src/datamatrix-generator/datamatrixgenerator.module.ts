import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataMatrixGeneratorComponent } from './datamatrixgenerator.component';

/**
 * NgModule definition for the DataMatrixGenerator component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        DataMatrixGeneratorComponent
    ],
    exports: [
        DataMatrixGeneratorComponent
    ]
})
export class DataMatrixGeneratorModule { }