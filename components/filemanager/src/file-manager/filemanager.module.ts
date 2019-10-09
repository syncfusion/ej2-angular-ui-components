import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileManagerComponent } from './filemanager.component';

/**
 * NgModule definition for the FileManager component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        FileManagerComponent
    ],
    exports: [
        FileManagerComponent
    ]
})
export class FileManagerModule { }