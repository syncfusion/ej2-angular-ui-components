import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadedFilesDirective, FilesDirective } from './files.directive';
import { UploaderComponent } from './uploader.component';

/**
 * NgModule definition for the Uploader component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        UploaderComponent,
        UploadedFilesDirective,
        FilesDirective
    ],
    exports: [
        UploaderComponent,
        UploadedFilesDirective,
        FilesDirective
    ]
})
export class UploaderModule { }