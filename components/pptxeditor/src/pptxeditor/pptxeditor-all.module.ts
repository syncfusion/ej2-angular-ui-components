import { NgModule, ValueProvider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PptxEditorComponent } from './pptxeditor.component';
import { PptxEditorModule } from './pptxeditor.module';
import {Toolbar, ThumbnailView, Navigation, Magnification, SlideShow, Print} from '@syncfusion/ej2-pptxeditor'


export const ToolbarService: ValueProvider = { provide: 'PptxEditorToolbar', useValue: Toolbar};
export const ThumbnailViewService: ValueProvider = { provide: 'PptxEditorThumbnailView', useValue: ThumbnailView};
export const NavigationService: ValueProvider = { provide: 'PptxEditorNavigation', useValue: Navigation};
export const MagnificationService: ValueProvider = { provide: 'PptxEditorMagnification', useValue: Magnification};
export const SlideShowService: ValueProvider = { provide: 'PptxEditorSlideShow', useValue: SlideShow};
export const PrintService: ValueProvider = { provide: 'PptxEditorPrint', useValue: Print};

/**
 * NgModule definition for the PptxEditor component with providers.
 */
@NgModule({
    imports: [CommonModule, PptxEditorModule],
    exports: [
        PptxEditorModule
    ],
    providers:[
        ToolbarService,
        ThumbnailViewService,
        NavigationService,
        MagnificationService,
        SlideShowService,
        PrintService
    ]
})
export class PptxEditorAllModule { }