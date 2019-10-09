import { NgModule, ValueProvider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileManagerComponent } from './filemanager.component';
import { FileManagerModule } from './filemanager.module';
import {DetailsView, NavigationPane, LargeIconsView, Toolbar, ContextMenu, BreadCrumbBar} from '@syncfusion/ej2-filemanager'


export const DetailsViewService: ValueProvider = { provide: 'FileManagerDetailsView', useValue: DetailsView};
export const NavigationPaneService: ValueProvider = { provide: 'FileManagerNavigationPane', useValue: NavigationPane};
export const LargeIconsViewService: ValueProvider = { provide: 'FileManagerLargeIconsView', useValue: LargeIconsView};
export const ToolbarService: ValueProvider = { provide: 'FileManagerToolbar', useValue: Toolbar};
export const ContextMenuService: ValueProvider = { provide: 'FileManagerContextMenu', useValue: ContextMenu};
export const BreadCrumbBarService: ValueProvider = { provide: 'FileManagerBreadCrumbBar', useValue: BreadCrumbBar};

/**
 * NgModule definition for the FileManager component with providers.
 */
@NgModule({
    imports: [CommonModule, FileManagerModule],
    exports: [
        FileManagerModule
    ],
    providers:[
        DetailsViewService,
        NavigationPaneService,
        LargeIconsViewService,
        ToolbarService,
        ContextMenuService,
        BreadCrumbBarService
    ]
})
export class FileManagerAllModule { }