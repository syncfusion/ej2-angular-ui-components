import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarItemDirective, ToolbarItemsDirective } from './toolbaritems.directive';
import { FileManagerComponent } from './filemanager.component';

/**
 * NgModule definition for the FileManager component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        FileManagerComponent,
        ToolbarItemDirective,
        ToolbarItemsDirective
    ],
    exports: [
        FileManagerComponent,
        ToolbarItemDirective,
        ToolbarItemsDirective
    ]
})
export class FileManagerModule { }