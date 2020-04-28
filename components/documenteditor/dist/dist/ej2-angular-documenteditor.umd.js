(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@syncfusion/ej2-angular-base'), require('@syncfusion/ej2-documenteditor'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@syncfusion/ej2-angular-base', '@syncfusion/ej2-documenteditor', '@angular/common'], factory) :
	(factory((global['ej2-angular-documenteditor'] = {}),global.ng.core,global.ej2.angular.base,global.ej2.documenteditor,global.ng.common));
}(this, (function (exports,core,ej2AngularBase,ej2Documenteditor,common) { 'use strict';

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var inputs = ['acceptTab', 'currentUser', 'defaultPasteOption', 'documentEditorSettings', 'documentName', 'enableBookmarkDialog', 'enableBordersAndShadingDialog', 'enableComment', 'enableContextMenu', 'enableCursorOnReadOnly', 'enableEditor', 'enableEditorHistory', 'enableFontDialog', 'enableFormField', 'enableHyperlinkDialog', 'enableImageResizer', 'enableListDialog', 'enableLocalPaste', 'enableOptionsPane', 'enablePageSetupDialog', 'enableParagraphDialog', 'enablePersistence', 'enablePrint', 'enableRtl', 'enableSearch', 'enableSelection', 'enableSfdtExport', 'enableSpellCheck', 'enableStyleDialog', 'enableTableDialog', 'enableTableOfContentsDialog', 'enableTableOptionsDialog', 'enableTablePropertiesDialog', 'enableTextExport', 'enableWordExport', 'headers', 'height', 'isReadOnly', 'layoutType', 'locale', 'pageGap', 'pageOutline', 'serverActionSettings', 'serviceUrl', 'showComments', 'useCtrlClickToFollowHyperlink', 'userColor', 'width', 'zIndex', 'zoomFactor'];
var outputs = ['afterFormFieldFill', 'beforeFormFieldFill', 'beforePaneSwitch', 'commentBegin', 'commentEnd', 'contentChange', 'created', 'customContextMenuBeforeOpen', 'customContextMenuSelect', 'destroyed', 'documentChange', 'keyDown', 'requestNavigate', 'searchResultsChange', 'selectionChange', 'viewChange', 'zoomFactorChange'];
var twoWays = [];
/**
 * `ejs-documenteditor` represents the Angular Document Editor Component.
 * ```html
 * <ejs-documenteditor isReadOnly='true' enableSelection='true'></ejs-documenteditor>
 * ```
 */
exports.DocumentEditorComponent = /** @class */ (function (_super) {
    __extends(DocumentEditorComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function DocumentEditorComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        try {
            var mod = _this.injector.get('DocumentEditorPrint');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            var mod = _this.injector.get('DocumentEditorSfdtExport');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            var mod = _this.injector.get('DocumentEditorWordExport');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        try {
            var mod = _this.injector.get('DocumentEditorTextExport');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_d) { }
        try {
            var mod = _this.injector.get('DocumentEditorSelection');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_e) { }
        try {
            var mod = _this.injector.get('DocumentEditorSearch');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_f) { }
        try {
            var mod = _this.injector.get('DocumentEditorEditor');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_g) { }
        try {
            var mod = _this.injector.get('DocumentEditorEditorHistory');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_h) { }
        try {
            var mod = _this.injector.get('DocumentEditorOptionsPane');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_j) { }
        try {
            var mod = _this.injector.get('DocumentEditorContextMenu');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_k) { }
        try {
            var mod = _this.injector.get('DocumentEditorImageResizer');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_l) { }
        try {
            var mod = _this.injector.get('DocumentEditorHyperlinkDialog');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_m) { }
        try {
            var mod = _this.injector.get('DocumentEditorTableDialog');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_o) { }
        try {
            var mod = _this.injector.get('DocumentEditorBookmarkDialog');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_p) { }
        try {
            var mod = _this.injector.get('DocumentEditorTableOfContentsDialog');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_q) { }
        try {
            var mod = _this.injector.get('DocumentEditorPageSetupDialog');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_r) { }
        try {
            var mod = _this.injector.get('DocumentEditorParagraphDialog');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_s) { }
        try {
            var mod = _this.injector.get('DocumentEditorListDialog');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_t) { }
        try {
            var mod = _this.injector.get('DocumentEditorStyleDialog');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_u) { }
        try {
            var mod = _this.injector.get('DocumentEditorStylesDialog');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_v) { }
        try {
            var mod = _this.injector.get('DocumentEditorBulletsAndNumberingDialog');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_w) { }
        try {
            var mod = _this.injector.get('DocumentEditorFontDialog');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_x) { }
        try {
            var mod = _this.injector.get('DocumentEditorTablePropertiesDialog');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_y) { }
        try {
            var mod = _this.injector.get('DocumentEditorBordersAndShadingDialog');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_z) { }
        try {
            var mod = _this.injector.get('DocumentEditorTableOptionsDialog');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_0) { }
        try {
            var mod = _this.injector.get('DocumentEditorCellOptionsDialog');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_1) { }
        try {
            var mod = _this.injector.get('DocumentEditorSpellChecker');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_2) { }
        try {
            var mod = _this.injector.get('DocumentEditorSpellCheckDialog');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_3) { }
        _this.registerEvents(outputs);
        _this.addTwoWay.call(_this, twoWays);
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.context = new ej2AngularBase.ComponentBase();
        return _this;
    }
    /**
     * @return {?}
     */
    DocumentEditorComponent.prototype.ngOnInit = function () {
        this.context.ngOnInit(this);
    };
    /**
     * @return {?}
     */
    DocumentEditorComponent.prototype.ngAfterViewInit = function () {
        this.context.ngAfterViewInit(this);
    };
    /**
     * @return {?}
     */
    DocumentEditorComponent.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy(this);
    };
    /**
     * @return {?}
     */
    DocumentEditorComponent.prototype.ngAfterContentChecked = function () {
        this.context.ngAfterContentChecked(this);
    };
    return DocumentEditorComponent;
}(ej2Documenteditor.DocumentEditor));
exports.DocumentEditorComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-documenteditor',
                inputs: inputs,
                outputs: outputs,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
exports.DocumentEditorComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.DocumentEditorComponent = __decorate([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase]),
    __metadata("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.DocumentEditorComponent);
/**
 * NgModule definition for the DocumentEditor component.
 */
var DocumentEditorModule = /** @class */ (function () {
    function DocumentEditorModule() {
    }
    return DocumentEditorModule;
}());
DocumentEditorModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.DocumentEditorComponent
                ],
                exports: [
                    exports.DocumentEditorComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
DocumentEditorModule.ctorParameters = function () { return []; };
var PrintService = { provide: 'DocumentEditorPrint', useValue: ej2Documenteditor.Print };
var SfdtExportService = { provide: 'DocumentEditorSfdtExport', useValue: ej2Documenteditor.SfdtExport };
var WordExportService = { provide: 'DocumentEditorWordExport', useValue: ej2Documenteditor.WordExport };
var TextExportService = { provide: 'DocumentEditorTextExport', useValue: ej2Documenteditor.TextExport };
var SelectionService = { provide: 'DocumentEditorSelection', useValue: ej2Documenteditor.Selection };
var SearchService = { provide: 'DocumentEditorSearch', useValue: ej2Documenteditor.Search };
var EditorService = { provide: 'DocumentEditorEditor', useValue: ej2Documenteditor.Editor };
var EditorHistoryService = { provide: 'DocumentEditorEditorHistory', useValue: ej2Documenteditor.EditorHistory };
var OptionsPaneService = { provide: 'DocumentEditorOptionsPane', useValue: ej2Documenteditor.OptionsPane };
var ContextMenuService = { provide: 'DocumentEditorContextMenu', useValue: ej2Documenteditor.ContextMenu };
var ImageResizerService = { provide: 'DocumentEditorImageResizer', useValue: ej2Documenteditor.ImageResizer };
var HyperlinkDialogService = { provide: 'DocumentEditorHyperlinkDialog', useValue: ej2Documenteditor.HyperlinkDialog };
var TableDialogService = { provide: 'DocumentEditorTableDialog', useValue: ej2Documenteditor.TableDialog };
var BookmarkDialogService = { provide: 'DocumentEditorBookmarkDialog', useValue: ej2Documenteditor.BookmarkDialog };
var TableOfContentsDialogService = { provide: 'DocumentEditorTableOfContentsDialog', useValue: ej2Documenteditor.TableOfContentsDialog };
var PageSetupDialogService = { provide: 'DocumentEditorPageSetupDialog', useValue: ej2Documenteditor.PageSetupDialog };
var ParagraphDialogService = { provide: 'DocumentEditorParagraphDialog', useValue: ej2Documenteditor.ParagraphDialog };
var ListDialogService = { provide: 'DocumentEditorListDialog', useValue: ej2Documenteditor.ListDialog };
var StyleDialogService = { provide: 'DocumentEditorStyleDialog', useValue: ej2Documenteditor.StyleDialog };
var StylesDialogService = { provide: 'DocumentEditorStylesDialog', useValue: ej2Documenteditor.StylesDialog };
var BulletsAndNumberingDialogService = { provide: 'DocumentEditorBulletsAndNumberingDialog', useValue: ej2Documenteditor.BulletsAndNumberingDialog };
var FontDialogService = { provide: 'DocumentEditorFontDialog', useValue: ej2Documenteditor.FontDialog };
var TablePropertiesDialogService = { provide: 'DocumentEditorTablePropertiesDialog', useValue: ej2Documenteditor.TablePropertiesDialog };
var BordersAndShadingDialogService = { provide: 'DocumentEditorBordersAndShadingDialog', useValue: ej2Documenteditor.BordersAndShadingDialog };
var TableOptionsDialogService = { provide: 'DocumentEditorTableOptionsDialog', useValue: ej2Documenteditor.TableOptionsDialog };
var CellOptionsDialogService = { provide: 'DocumentEditorCellOptionsDialog', useValue: ej2Documenteditor.CellOptionsDialog };
var SpellCheckerService = { provide: 'DocumentEditorSpellChecker', useValue: ej2Documenteditor.SpellChecker };
var SpellCheckDialogService = { provide: 'DocumentEditorSpellCheckDialog', useValue: ej2Documenteditor.SpellCheckDialog };
/**
 * NgModule definition for the DocumentEditor component with providers.
 */
var DocumentEditorAllModule = /** @class */ (function () {
    function DocumentEditorAllModule() {
    }
    return DocumentEditorAllModule;
}());
DocumentEditorAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, DocumentEditorModule],
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
DocumentEditorAllModule.ctorParameters = function () { return []; };
var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var inputs$1 = ['currentUser', 'documentEditorSettings', 'enableComment', 'enableCsp', 'enableLocalPaste', 'enablePersistence', 'enableRtl', 'enableSpellCheck', 'enableToolbar', 'headers', 'height', 'layoutType', 'locale', 'restrictEditing', 'serverActionSettings', 'serviceUrl', 'showPropertiesPane', 'toolbarItems', 'userColor', 'width', 'zIndex'];
var outputs$1 = ['beforePaneSwitch', 'contentChange', 'created', 'customContextMenuBeforeOpen', 'customContextMenuSelect', 'destroyed', 'documentChange', 'selectionChange', 'toolbarClick'];
var twoWays$1 = [];
/**
 * `ejs-documenteditor-container` represents the Angular Document Editor Container.
 * ```html
 * <ejs-documenteditor-container></ejs-documenteditor-container>
 * ```
 */
exports.DocumentEditorContainerComponent = /** @class */ (function (_super) {
    __extends(DocumentEditorContainerComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function DocumentEditorContainerComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        try {
            var mod = _this.injector.get('DocumentEditorToolbar');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        _this.registerEvents(outputs$1);
        _this.addTwoWay.call(_this, twoWays$1);
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.context = new ej2AngularBase.ComponentBase();
        return _this;
    }
    /**
     * @return {?}
     */
    DocumentEditorContainerComponent.prototype.ngOnInit = function () {
        this.context.ngOnInit(this);
    };
    /**
     * @return {?}
     */
    DocumentEditorContainerComponent.prototype.ngAfterViewInit = function () {
        this.context.ngAfterViewInit(this);
    };
    /**
     * @return {?}
     */
    DocumentEditorContainerComponent.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy(this);
    };
    /**
     * @return {?}
     */
    DocumentEditorContainerComponent.prototype.ngAfterContentChecked = function () {
        this.context.ngAfterContentChecked(this);
    };
    return DocumentEditorContainerComponent;
}(ej2Documenteditor.DocumentEditorContainer));
exports.DocumentEditorContainerComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-documenteditorcontainer',
                inputs: inputs$1,
                outputs: outputs$1,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
exports.DocumentEditorContainerComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.DocumentEditorContainerComponent = __decorate$1([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase]),
    __metadata$1("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.DocumentEditorContainerComponent);
/**
 * NgModule definition for the DocumentEditorContainer component.
 */
var DocumentEditorContainerModule = /** @class */ (function () {
    function DocumentEditorContainerModule() {
    }
    return DocumentEditorContainerModule;
}());
DocumentEditorContainerModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.DocumentEditorContainerComponent
                ],
                exports: [
                    exports.DocumentEditorContainerComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
DocumentEditorContainerModule.ctorParameters = function () { return []; };
var ToolbarService = { provide: 'DocumentEditorToolbar', useValue: ej2Documenteditor.Toolbar };
/**
 * NgModule definition for the DocumentEditorContainer component with providers.
 */
var DocumentEditorContainerAllModule = /** @class */ (function () {
    function DocumentEditorContainerAllModule() {
    }
    return DocumentEditorContainerAllModule;
}());
DocumentEditorContainerAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, DocumentEditorContainerModule],
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
DocumentEditorContainerAllModule.ctorParameters = function () { return []; };

exports.DocumentEditorModule = DocumentEditorModule;
exports.DocumentEditorAllModule = DocumentEditorAllModule;
exports.PrintService = PrintService;
exports.SfdtExportService = SfdtExportService;
exports.WordExportService = WordExportService;
exports.TextExportService = TextExportService;
exports.SelectionService = SelectionService;
exports.SearchService = SearchService;
exports.EditorService = EditorService;
exports.EditorHistoryService = EditorHistoryService;
exports.OptionsPaneService = OptionsPaneService;
exports.ContextMenuService = ContextMenuService;
exports.ImageResizerService = ImageResizerService;
exports.HyperlinkDialogService = HyperlinkDialogService;
exports.TableDialogService = TableDialogService;
exports.BookmarkDialogService = BookmarkDialogService;
exports.TableOfContentsDialogService = TableOfContentsDialogService;
exports.PageSetupDialogService = PageSetupDialogService;
exports.ParagraphDialogService = ParagraphDialogService;
exports.ListDialogService = ListDialogService;
exports.StyleDialogService = StyleDialogService;
exports.StylesDialogService = StylesDialogService;
exports.BulletsAndNumberingDialogService = BulletsAndNumberingDialogService;
exports.FontDialogService = FontDialogService;
exports.TablePropertiesDialogService = TablePropertiesDialogService;
exports.BordersAndShadingDialogService = BordersAndShadingDialogService;
exports.TableOptionsDialogService = TableOptionsDialogService;
exports.CellOptionsDialogService = CellOptionsDialogService;
exports.SpellCheckerService = SpellCheckerService;
exports.SpellCheckDialogService = SpellCheckDialogService;
exports.DocumentEditorContainerModule = DocumentEditorContainerModule;
exports.DocumentEditorContainerAllModule = DocumentEditorContainerAllModule;
exports.ToolbarService = ToolbarService;
exports.ɵc = inputs$1;
exports.ɵd = outputs$1;
exports.ɵa = inputs;
exports.ɵb = outputs;
exports.Dictionary = ej2Documenteditor.Dictionary;
exports.WUniqueFormat = ej2Documenteditor.WUniqueFormat;
exports.WUniqueFormats = ej2Documenteditor.WUniqueFormats;
exports.XmlHttpRequestHandler = ej2Documenteditor.XmlHttpRequestHandler;
exports.Print = ej2Documenteditor.Print;
exports.ContextMenu = ej2Documenteditor.ContextMenu;
exports.WSectionFormat = ej2Documenteditor.WSectionFormat;
exports.WStyle = ej2Documenteditor.WStyle;
exports.WParagraphStyle = ej2Documenteditor.WParagraphStyle;
exports.WCharacterStyle = ej2Documenteditor.WCharacterStyle;
exports.WStyles = ej2Documenteditor.WStyles;
exports.WCharacterFormat = ej2Documenteditor.WCharacterFormat;
exports.WListFormat = ej2Documenteditor.WListFormat;
exports.WTabStop = ej2Documenteditor.WTabStop;
exports.WParagraphFormat = ej2Documenteditor.WParagraphFormat;
exports.WTableFormat = ej2Documenteditor.WTableFormat;
exports.WRowFormat = ej2Documenteditor.WRowFormat;
exports.WCellFormat = ej2Documenteditor.WCellFormat;
exports.WBorder = ej2Documenteditor.WBorder;
exports.WBorders = ej2Documenteditor.WBorders;
exports.WShading = ej2Documenteditor.WShading;
exports.WList = ej2Documenteditor.WList;
exports.WAbstractList = ej2Documenteditor.WAbstractList;
exports.WListLevel = ej2Documenteditor.WListLevel;
exports.WLevelOverride = ej2Documenteditor.WLevelOverride;
exports.DocumentHelper = ej2Documenteditor.DocumentHelper;
exports.LayoutViewer = ej2Documenteditor.LayoutViewer;
exports.PageLayoutViewer = ej2Documenteditor.PageLayoutViewer;
exports.WebLayoutViewer = ej2Documenteditor.WebLayoutViewer;
exports.Rect = ej2Documenteditor.Rect;
exports.Padding = ej2Documenteditor.Padding;
exports.Margin = ej2Documenteditor.Margin;
exports.Widget = ej2Documenteditor.Widget;
exports.BlockContainer = ej2Documenteditor.BlockContainer;
exports.BodyWidget = ej2Documenteditor.BodyWidget;
exports.HeaderFooterWidget = ej2Documenteditor.HeaderFooterWidget;
exports.BlockWidget = ej2Documenteditor.BlockWidget;
exports.ParagraphWidget = ej2Documenteditor.ParagraphWidget;
exports.TableWidget = ej2Documenteditor.TableWidget;
exports.TableRowWidget = ej2Documenteditor.TableRowWidget;
exports.TableCellWidget = ej2Documenteditor.TableCellWidget;
exports.LineWidget = ej2Documenteditor.LineWidget;
exports.ElementBox = ej2Documenteditor.ElementBox;
exports.FieldElementBox = ej2Documenteditor.FieldElementBox;
exports.FormField = ej2Documenteditor.FormField;
exports.TextFormField = ej2Documenteditor.TextFormField;
exports.CheckBoxFormField = ej2Documenteditor.CheckBoxFormField;
exports.DropDownFormField = ej2Documenteditor.DropDownFormField;
exports.TextElementBox = ej2Documenteditor.TextElementBox;
exports.ErrorTextElementBox = ej2Documenteditor.ErrorTextElementBox;
exports.FieldTextElementBox = ej2Documenteditor.FieldTextElementBox;
exports.TabElementBox = ej2Documenteditor.TabElementBox;
exports.BookmarkElementBox = ej2Documenteditor.BookmarkElementBox;
exports.ImageElementBox = ej2Documenteditor.ImageElementBox;
exports.ListTextElementBox = ej2Documenteditor.ListTextElementBox;
exports.EditRangeEndElementBox = ej2Documenteditor.EditRangeEndElementBox;
exports.EditRangeStartElementBox = ej2Documenteditor.EditRangeStartElementBox;
exports.ChartElementBox = ej2Documenteditor.ChartElementBox;
exports.ChartArea = ej2Documenteditor.ChartArea;
exports.ChartCategory = ej2Documenteditor.ChartCategory;
exports.ChartData = ej2Documenteditor.ChartData;
exports.ChartLegend = ej2Documenteditor.ChartLegend;
exports.ChartSeries = ej2Documenteditor.ChartSeries;
exports.ChartErrorBar = ej2Documenteditor.ChartErrorBar;
exports.ChartSeriesFormat = ej2Documenteditor.ChartSeriesFormat;
exports.ChartDataLabels = ej2Documenteditor.ChartDataLabels;
exports.ChartTrendLines = ej2Documenteditor.ChartTrendLines;
exports.ChartTitleArea = ej2Documenteditor.ChartTitleArea;
exports.ChartDataFormat = ej2Documenteditor.ChartDataFormat;
exports.ChartFill = ej2Documenteditor.ChartFill;
exports.ChartLayout = ej2Documenteditor.ChartLayout;
exports.ChartCategoryAxis = ej2Documenteditor.ChartCategoryAxis;
exports.ChartDataTable = ej2Documenteditor.ChartDataTable;
exports.CommentCharacterElementBox = ej2Documenteditor.CommentCharacterElementBox;
exports.CommentElementBox = ej2Documenteditor.CommentElementBox;
exports.Page = ej2Documenteditor.Page;
exports.WTableHolder = ej2Documenteditor.WTableHolder;
exports.WColumn = ej2Documenteditor.WColumn;
exports.ColumnSizeInfo = ej2Documenteditor.ColumnSizeInfo;
exports.Layout = ej2Documenteditor.Layout;
exports.Renderer = ej2Documenteditor.Renderer;
exports.SfdtReader = ej2Documenteditor.SfdtReader;
exports.TextHelper = ej2Documenteditor.TextHelper;
exports.Zoom = ej2Documenteditor.Zoom;
exports.Selection = ej2Documenteditor.Selection;
exports.SelectionCharacterFormat = ej2Documenteditor.SelectionCharacterFormat;
exports.SelectionParagraphFormat = ej2Documenteditor.SelectionParagraphFormat;
exports.SelectionSectionFormat = ej2Documenteditor.SelectionSectionFormat;
exports.SelectionTableFormat = ej2Documenteditor.SelectionTableFormat;
exports.SelectionCellFormat = ej2Documenteditor.SelectionCellFormat;
exports.SelectionRowFormat = ej2Documenteditor.SelectionRowFormat;
exports.SelectionImageFormat = ej2Documenteditor.SelectionImageFormat;
exports.TextPosition = ej2Documenteditor.TextPosition;
exports.SelectionWidgetInfo = ej2Documenteditor.SelectionWidgetInfo;
exports.Hyperlink = ej2Documenteditor.Hyperlink;
exports.ImageFormat = ej2Documenteditor.ImageFormat;
exports.Search = ej2Documenteditor.Search;
exports.OptionsPane = ej2Documenteditor.OptionsPane;
exports.TextSearch = ej2Documenteditor.TextSearch;
exports.SearchWidgetInfo = ej2Documenteditor.SearchWidgetInfo;
exports.TextSearchResult = ej2Documenteditor.TextSearchResult;
exports.TextSearchResults = ej2Documenteditor.TextSearchResults;
exports.Editor = ej2Documenteditor.Editor;
exports.ImageResizer = ej2Documenteditor.ImageResizer;
exports.ImageResizingPoints = ej2Documenteditor.ImageResizingPoints;
exports.SelectedImageInfo = ej2Documenteditor.SelectedImageInfo;
exports.TableResizer = ej2Documenteditor.TableResizer;
exports.HelperMethods = ej2Documenteditor.HelperMethods;
exports.Point = ej2Documenteditor.Point;
exports.Base64 = ej2Documenteditor.Base64;
exports.EditorHistory = ej2Documenteditor.EditorHistory;
exports.BaseHistoryInfo = ej2Documenteditor.BaseHistoryInfo;
exports.HistoryInfo = ej2Documenteditor.HistoryInfo;
exports.ModifiedLevel = ej2Documenteditor.ModifiedLevel;
exports.ModifiedParagraphFormat = ej2Documenteditor.ModifiedParagraphFormat;
exports.RowHistoryFormat = ej2Documenteditor.RowHistoryFormat;
exports.TableHistoryInfo = ej2Documenteditor.TableHistoryInfo;
exports.TableFormatHistoryInfo = ej2Documenteditor.TableFormatHistoryInfo;
exports.RowFormatHistoryInfo = ej2Documenteditor.RowFormatHistoryInfo;
exports.CellFormatHistoryInfo = ej2Documenteditor.CellFormatHistoryInfo;
exports.CellHistoryFormat = ej2Documenteditor.CellHistoryFormat;
exports.WordExport = ej2Documenteditor.WordExport;
exports.TextExport = ej2Documenteditor.TextExport;
exports.SfdtExport = ej2Documenteditor.SfdtExport;
exports.HtmlExport = ej2Documenteditor.HtmlExport;
exports.HyperlinkDialog = ej2Documenteditor.HyperlinkDialog;
exports.TableDialog = ej2Documenteditor.TableDialog;
exports.BookmarkDialog = ej2Documenteditor.BookmarkDialog;
exports.TableOfContentsDialog = ej2Documenteditor.TableOfContentsDialog;
exports.PageSetupDialog = ej2Documenteditor.PageSetupDialog;
exports.ParagraphDialog = ej2Documenteditor.ParagraphDialog;
exports.ListDialog = ej2Documenteditor.ListDialog;
exports.StyleDialog = ej2Documenteditor.StyleDialog;
exports.BulletsAndNumberingDialog = ej2Documenteditor.BulletsAndNumberingDialog;
exports.FontDialog = ej2Documenteditor.FontDialog;
exports.TablePropertiesDialog = ej2Documenteditor.TablePropertiesDialog;
exports.BordersAndShadingDialog = ej2Documenteditor.BordersAndShadingDialog;
exports.TableOptionsDialog = ej2Documenteditor.TableOptionsDialog;
exports.CellOptionsDialog = ej2Documenteditor.CellOptionsDialog;
exports.StylesDialog = ej2Documenteditor.StylesDialog;
exports.SpellCheckDialog = ej2Documenteditor.SpellCheckDialog;
exports.CheckBoxFormFieldDialog = ej2Documenteditor.CheckBoxFormFieldDialog;
exports.TextFormFieldDialog = ej2Documenteditor.TextFormFieldDialog;
exports.DropDownFormFieldDialog = ej2Documenteditor.DropDownFormFieldDialog;
exports.FormFieldPopUp = ej2Documenteditor.FormFieldPopUp;
exports.SpellChecker = ej2Documenteditor.SpellChecker;
exports.AddUserDialog = ej2Documenteditor.AddUserDialog;
exports.EnforceProtectionDialog = ej2Documenteditor.EnforceProtectionDialog;
exports.UnProtectDocumentDialog = ej2Documenteditor.UnProtectDocumentDialog;
exports.RestrictEditing = ej2Documenteditor.RestrictEditing;
exports.CommentReviewPane = ej2Documenteditor.CommentReviewPane;
exports.CommentPane = ej2Documenteditor.CommentPane;
exports.CommentView = ej2Documenteditor.CommentView;
exports.DocumentEditorSettings = ej2Documenteditor.DocumentEditorSettings;
exports.DocumentEditor = ej2Documenteditor.DocumentEditor;
exports.ServerActionSettings = ej2Documenteditor.ServerActionSettings;
exports.FormFieldSettings = ej2Documenteditor.FormFieldSettings;
exports.ContainerServerActionSettings = ej2Documenteditor.ContainerServerActionSettings;
exports.Toolbar = ej2Documenteditor.Toolbar;
exports.DocumentEditorContainer = ej2Documenteditor.DocumentEditorContainer;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ej2-angular-documenteditor.umd.js.map
