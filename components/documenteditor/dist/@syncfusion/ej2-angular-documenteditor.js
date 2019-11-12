import { ChangeDetectionStrategy, Component, ElementRef, Injector, NgModule, Renderer2, ViewContainerRef } from '@angular/core';
import { ComponentBase, ComponentMixins, setValue } from '@syncfusion/ej2-angular-base';
import { BookmarkDialog, BordersAndShadingDialog, BulletsAndNumberingDialog, CellOptionsDialog, ContextMenu, DocumentEditor, DocumentEditorContainer, Editor, EditorHistory, FontDialog, HyperlinkDialog, ImageResizer, ListDialog, OptionsPane, PageSetupDialog, ParagraphDialog, Print, Search, Selection, SfdtExport, SpellCheckDialog, SpellChecker, StyleDialog, StylesDialog, TableDialog, TableOfContentsDialog, TableOptionsDialog, TablePropertiesDialog, TextExport, Toolbar, WordExport } from '@syncfusion/ej2-documenteditor';
import { CommonModule } from '@angular/common';

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs = ['acceptTab', 'currentUser', 'defaultPasteOption', 'documentName', 'enableBookmarkDialog', 'enableBordersAndShadingDialog', 'enableContextMenu', 'enableCursorOnReadOnly', 'enableEditor', 'enableEditorHistory', 'enableFontDialog', 'enableHyperlinkDialog', 'enableImageResizer', 'enableListDialog', 'enableLocalPaste', 'enableOptionsPane', 'enablePageSetupDialog', 'enableParagraphDialog', 'enablePersistence', 'enablePrint', 'enableRtl', 'enableSearch', 'enableSelection', 'enableSfdtExport', 'enableSpellCheck', 'enableStyleDialog', 'enableTableDialog', 'enableTableOfContentsDialog', 'enableTableOptionsDialog', 'enableTablePropertiesDialog', 'enableTextExport', 'enableWordExport', 'headers', 'isReadOnly', 'locale', 'pageGap', 'pageOutline', 'serverActionSettings', 'serviceUrl', 'useCtrlClickToFollowHyperlink', 'userColor', 'zIndex', 'zoomFactor'];
const outputs = ['contentChange', 'created', 'customContextMenuBeforeOpen', 'customContextMenuSelect', 'destroyed', 'documentChange', 'keyDown', 'requestNavigate', 'searchResultsChange', 'selectionChange', 'viewChange', 'zoomFactorChange'];
const twoWays = [];
/**
 * `ejs-documenteditor` represents the Angular Document Editor Component.
 * ```html
 * <ejs-documenteditor isReadOnly='true' enableSelection='true'></ejs-documenteditor>
 * ```
 */
let DocumentEditorComponent = class DocumentEditorComponent extends DocumentEditor {
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('DocumentEditorPrint');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            let mod = this.injector.get('DocumentEditorSfdtExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            let mod = this.injector.get('DocumentEditorWordExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        try {
            let mod = this.injector.get('DocumentEditorTextExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_d) { }
        try {
            let mod = this.injector.get('DocumentEditorSelection');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_e) { }
        try {
            let mod = this.injector.get('DocumentEditorSearch');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_f) { }
        try {
            let mod = this.injector.get('DocumentEditorEditor');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_g) { }
        try {
            let mod = this.injector.get('DocumentEditorEditorHistory');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_h) { }
        try {
            let mod = this.injector.get('DocumentEditorOptionsPane');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_j) { }
        try {
            let mod = this.injector.get('DocumentEditorContextMenu');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_k) { }
        try {
            let mod = this.injector.get('DocumentEditorImageResizer');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_l) { }
        try {
            let mod = this.injector.get('DocumentEditorHyperlinkDialog');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_m) { }
        try {
            let mod = this.injector.get('DocumentEditorTableDialog');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_o) { }
        try {
            let mod = this.injector.get('DocumentEditorBookmarkDialog');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_p) { }
        try {
            let mod = this.injector.get('DocumentEditorTableOfContentsDialog');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_q) { }
        try {
            let mod = this.injector.get('DocumentEditorPageSetupDialog');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_r) { }
        try {
            let mod = this.injector.get('DocumentEditorParagraphDialog');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_s) { }
        try {
            let mod = this.injector.get('DocumentEditorListDialog');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_t) { }
        try {
            let mod = this.injector.get('DocumentEditorStyleDialog');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_u) { }
        try {
            let mod = this.injector.get('DocumentEditorStylesDialog');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_v) { }
        try {
            let mod = this.injector.get('DocumentEditorBulletsAndNumberingDialog');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_w) { }
        try {
            let mod = this.injector.get('DocumentEditorFontDialog');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_x) { }
        try {
            let mod = this.injector.get('DocumentEditorTablePropertiesDialog');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_y) { }
        try {
            let mod = this.injector.get('DocumentEditorBordersAndShadingDialog');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_z) { }
        try {
            let mod = this.injector.get('DocumentEditorTableOptionsDialog');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_0) { }
        try {
            let mod = this.injector.get('DocumentEditorCellOptionsDialog');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_1) { }
        try {
            let mod = this.injector.get('DocumentEditorSpellChecker');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_2) { }
        try {
            let mod = this.injector.get('DocumentEditorSpellCheckDialog');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_3) { }
        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
    }
};
DocumentEditorComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-documenteditor',
                inputs: inputs,
                outputs: outputs,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
DocumentEditorComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
DocumentEditorComponent = __decorate([
    ComponentMixins([ComponentBase]),
    __metadata("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], DocumentEditorComponent);

/**
 * NgModule definition for the DocumentEditor component.
 */
class DocumentEditorModule {
}
DocumentEditorModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    DocumentEditorComponent
                ],
                exports: [
                    DocumentEditorComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
DocumentEditorModule.ctorParameters = () => [];

const PrintService = { provide: 'DocumentEditorPrint', useValue: Print };
const SfdtExportService = { provide: 'DocumentEditorSfdtExport', useValue: SfdtExport };
const WordExportService = { provide: 'DocumentEditorWordExport', useValue: WordExport };
const TextExportService = { provide: 'DocumentEditorTextExport', useValue: TextExport };
const SelectionService = { provide: 'DocumentEditorSelection', useValue: Selection };
const SearchService = { provide: 'DocumentEditorSearch', useValue: Search };
const EditorService = { provide: 'DocumentEditorEditor', useValue: Editor };
const EditorHistoryService = { provide: 'DocumentEditorEditorHistory', useValue: EditorHistory };
const OptionsPaneService = { provide: 'DocumentEditorOptionsPane', useValue: OptionsPane };
const ContextMenuService = { provide: 'DocumentEditorContextMenu', useValue: ContextMenu };
const ImageResizerService = { provide: 'DocumentEditorImageResizer', useValue: ImageResizer };
const HyperlinkDialogService = { provide: 'DocumentEditorHyperlinkDialog', useValue: HyperlinkDialog };
const TableDialogService = { provide: 'DocumentEditorTableDialog', useValue: TableDialog };
const BookmarkDialogService = { provide: 'DocumentEditorBookmarkDialog', useValue: BookmarkDialog };
const TableOfContentsDialogService = { provide: 'DocumentEditorTableOfContentsDialog', useValue: TableOfContentsDialog };
const PageSetupDialogService = { provide: 'DocumentEditorPageSetupDialog', useValue: PageSetupDialog };
const ParagraphDialogService = { provide: 'DocumentEditorParagraphDialog', useValue: ParagraphDialog };
const ListDialogService = { provide: 'DocumentEditorListDialog', useValue: ListDialog };
const StyleDialogService = { provide: 'DocumentEditorStyleDialog', useValue: StyleDialog };
const StylesDialogService = { provide: 'DocumentEditorStylesDialog', useValue: StylesDialog };
const BulletsAndNumberingDialogService = { provide: 'DocumentEditorBulletsAndNumberingDialog', useValue: BulletsAndNumberingDialog };
const FontDialogService = { provide: 'DocumentEditorFontDialog', useValue: FontDialog };
const TablePropertiesDialogService = { provide: 'DocumentEditorTablePropertiesDialog', useValue: TablePropertiesDialog };
const BordersAndShadingDialogService = { provide: 'DocumentEditorBordersAndShadingDialog', useValue: BordersAndShadingDialog };
const TableOptionsDialogService = { provide: 'DocumentEditorTableOptionsDialog', useValue: TableOptionsDialog };
const CellOptionsDialogService = { provide: 'DocumentEditorCellOptionsDialog', useValue: CellOptionsDialog };
const SpellCheckerService = { provide: 'DocumentEditorSpellChecker', useValue: SpellChecker };
const SpellCheckDialogService = { provide: 'DocumentEditorSpellCheckDialog', useValue: SpellCheckDialog };
/**
 * NgModule definition for the DocumentEditor component with providers.
 */
class DocumentEditorAllModule {
}
DocumentEditorAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, DocumentEditorModule],
                exports: [
                    DocumentEditorModule
                ],
                providers: [
                    PrintService,
                    SfdtExportService,
                    WordExportService,
                    TextExportService,
                    SelectionService,
                    SearchService,
                    EditorService,
                    EditorHistoryService,
                    OptionsPaneService,
                    ContextMenuService,
                    ImageResizerService,
                    HyperlinkDialogService,
                    TableDialogService,
                    BookmarkDialogService,
                    TableOfContentsDialogService,
                    PageSetupDialogService,
                    ParagraphDialogService,
                    ListDialogService,
                    StyleDialogService,
                    StylesDialogService,
                    BulletsAndNumberingDialogService,
                    FontDialogService,
                    TablePropertiesDialogService,
                    BordersAndShadingDialogService,
                    TableOptionsDialogService,
                    CellOptionsDialogService,
                    SpellCheckerService,
                    SpellCheckDialogService
                ]
            },] },
];
/**
 * @nocollapse
 */
DocumentEditorAllModule.ctorParameters = () => [];

var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs$1 = ['enableCsp', 'enableLocalPaste', 'enablePersistence', 'enableRtl', 'enableSpellCheck', 'enableToolbar', 'headers', 'locale', 'restrictEditing', 'serverActionSettings', 'serviceUrl', 'showPropertiesPane', 'zIndex'];
const outputs$1 = ['contentChange', 'created', 'customContextMenuBeforeOpen', 'customContextMenuSelect', 'destroyed', 'documentChange', 'selectionChange'];
const twoWays$1 = [];
/**
 * `ejs-documenteditor-container` represents the Angular Document Editor Container.
 * ```html
 * <ejs-documenteditor-container></ejs-documenteditor-container>
 * ```
 */
let DocumentEditorContainerComponent = class DocumentEditorContainerComponent extends DocumentEditorContainer {
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('DocumentEditorToolbar');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        this.registerEvents(outputs$1);
        this.addTwoWay.call(this, twoWays$1);
        setValue('currentInstance', this, this.viewContainerRef);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
    }
};
DocumentEditorContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-documenteditorcontainer',
                inputs: inputs$1,
                outputs: outputs$1,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
DocumentEditorContainerComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
DocumentEditorContainerComponent = __decorate$1([
    ComponentMixins([ComponentBase]),
    __metadata$1("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], DocumentEditorContainerComponent);

/**
 * NgModule definition for the DocumentEditorContainer component.
 */
class DocumentEditorContainerModule {
}
DocumentEditorContainerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    DocumentEditorContainerComponent
                ],
                exports: [
                    DocumentEditorContainerComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
DocumentEditorContainerModule.ctorParameters = () => [];

const ToolbarService = { provide: 'DocumentEditorToolbar', useValue: Toolbar };
/**
 * NgModule definition for the DocumentEditorContainer component with providers.
 */
class DocumentEditorContainerAllModule {
}
DocumentEditorContainerAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, DocumentEditorContainerModule],
                exports: [
                    DocumentEditorContainerModule
                ],
                providers: [
                    ToolbarService
                ]
            },] },
];
/**
 * @nocollapse
 */
DocumentEditorContainerAllModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { DocumentEditorComponent, DocumentEditorModule, DocumentEditorAllModule, PrintService, SfdtExportService, WordExportService, TextExportService, SelectionService, SearchService, EditorService, EditorHistoryService, OptionsPaneService, ContextMenuService, ImageResizerService, HyperlinkDialogService, TableDialogService, BookmarkDialogService, TableOfContentsDialogService, PageSetupDialogService, ParagraphDialogService, ListDialogService, StyleDialogService, StylesDialogService, BulletsAndNumberingDialogService, FontDialogService, TablePropertiesDialogService, BordersAndShadingDialogService, TableOptionsDialogService, CellOptionsDialogService, SpellCheckerService, SpellCheckDialogService, DocumentEditorContainerComponent, DocumentEditorContainerModule, DocumentEditorContainerAllModule, ToolbarService, inputs$1 as ɵc, outputs$1 as ɵd, inputs as ɵa, outputs as ɵb };
export { Dictionary, WUniqueFormat, WUniqueFormats, XmlHttpRequestHandler, DocumentEditor, ServerActionSettings, ContainerServerActionSettings, Print, ContextMenu, WSectionFormat, WStyle, WParagraphStyle, WCharacterStyle, WStyles, WCharacterFormat, WListFormat, WTabStop, WParagraphFormat, WTableFormat, WRowFormat, WCellFormat, WBorder, WBorders, WShading, WList, WAbstractList, WListLevel, WLevelOverride, LayoutViewer, PageLayoutViewer, Layout, Rect, Margin, Widget, BlockContainer, BodyWidget, HeaderFooterWidget, BlockWidget, ParagraphWidget, TableWidget, TableRowWidget, TableCellWidget, LineWidget, ElementBox, FieldElementBox, TextElementBox, ErrorTextElementBox, FieldTextElementBox, TabElementBox, BookmarkElementBox, ImageElementBox, ListTextElementBox, EditRangeEndElementBox, EditRangeStartElementBox, ChartElementBox, ChartArea, ChartCategory, ChartData, ChartLegend, ChartSeries, ChartErrorBar, ChartSeriesFormat, ChartDataLabels, ChartTrendLines, ChartTitleArea, ChartDataFormat, ChartFill, ChartLayout, ChartCategoryAxis, ChartDataTable, Page, WTableHolder, WColumn, ColumnSizeInfo, Renderer, SfdtReader, TextHelper, Zoom, Selection, SelectionCharacterFormat, SelectionParagraphFormat, SelectionSectionFormat, SelectionTableFormat, SelectionCellFormat, SelectionRowFormat, SelectionImageFormat, TextPosition, SelectionWidgetInfo, Hyperlink, ImageFormat, Search, OptionsPane, TextSearch, SearchWidgetInfo, TextSearchResult, TextSearchResults, Editor, ImageResizer, ImageResizingPoints, SelectedImageInfo, TableResizer, HelperMethods, Point, Base64, EditorHistory, BaseHistoryInfo, HistoryInfo, ModifiedLevel, ModifiedParagraphFormat, RowHistoryFormat, TableHistoryInfo, TableFormatHistoryInfo, RowFormatHistoryInfo, CellFormatHistoryInfo, CellHistoryFormat, WordExport, TextExport, SfdtExport, HtmlExport, HyperlinkDialog, TableDialog, BookmarkDialog, TableOfContentsDialog, PageSetupDialog, ParagraphDialog, ListDialog, StyleDialog, BulletsAndNumberingDialog, FontDialog, TablePropertiesDialog, BordersAndShadingDialog, TableOptionsDialog, CellOptionsDialog, StylesDialog, SpellCheckDialog, SpellChecker, AddUserDialog, EnforceProtectionDialog, UnProtectDocumentDialog, RestrictEditing, Toolbar, DocumentEditorContainer } from '@syncfusion/ej2-documenteditor';
//# sourceMappingURL=ej2-angular-documenteditor.js.map
