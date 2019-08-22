(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@syncfusion/ej2-angular-base'), require('@syncfusion/ej2-richtexteditor'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/forms', '@syncfusion/ej2-angular-base', '@syncfusion/ej2-richtexteditor', '@angular/common'], factory) :
	(factory((global['ej2-angular-richtexteditor'] = {}),global.ng.core,global.ng.forms,global.ej2.angular.base,global.ej2.richtexteditor,global.ng.common));
}(this, (function (exports,core,forms,ej2AngularBase,ej2Richtexteditor,common) { 'use strict';

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
var inputs = ['backgroundColor', 'cssClass', 'editorMode', 'enableAutoUrl', 'enableHtmlEncode', 'enablePersistence', 'enableRtl', 'enableTabKey', 'enabled', 'floatingToolbarOffset', 'fontColor', 'fontFamily', 'fontSize', 'format', 'formatter', 'height', 'htmlAttributes', 'iframeSettings', 'inlineMode', 'insertImageSettings', 'keyConfig', 'locale', 'maxLength', 'pasteCleanupSettings', 'placeholder', 'quickToolbarSettings', 'readonly', 'saveInterval', 'showCharCount', 'tableSettings', 'toolbarSettings', 'undoRedoSteps', 'undoRedoTimer', 'value', 'valueTemplate', 'width'];
var outputs = ['actionBegin', 'actionComplete', 'beforeDialogOpen', 'beforeQuickToolbarOpen', 'beforeSanitizeHtml', 'blur', 'change', 'created', 'destroyed', 'dialogClose', 'dialogOpen', 'focus', 'imageRemoving', 'imageSelected', 'imageUploadFailed', 'imageUploadSuccess', 'imageUploading', 'quickToolbarClose', 'quickToolbarOpen', 'resizeStart', 'resizeStop', 'resizing', 'toolbarClick', 'toolbarStatusUpdate', 'valueChange'];
var twoWays = ['value'];
/**
 * `ejs-richtexteditor` represents the Angular richtexteditor Component.
 * ```html
 * <ejs-richtexteditor></ejs-richtexteditor>
 * ```
 */
exports.RichTextEditorComponent = RichTextEditorComponent_1 = /** @class */ (function (_super) {
    __extends(RichTextEditorComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function RichTextEditorComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.skipFromEvent = true;
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        try {
            var mod = _this.injector.get('RichTextEditorToolbar');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            var mod = _this.injector.get('RichTextEditorLink');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            var mod = _this.injector.get('RichTextEditorImage');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        try {
            var mod = _this.injector.get('RichTextEditorCount');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_d) { }
        try {
            var mod = _this.injector.get('RichTextEditorQuickToolbar');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_e) { }
        try {
            var mod = _this.injector.get('RichTextEditorHtmlEditor');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_f) { }
        try {
            var mod = _this.injector.get('RichTextEditorMarkdownEditor');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_g) { }
        try {
            var mod = _this.injector.get('RichTextEditorTable');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_h) { }
        try {
            var mod = _this.injector.get('RichTextEditorPasteCleanup');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_j) { }
        _this.registerEvents(outputs);
        _this.addTwoWay.call(_this, twoWays);
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        return _this;
    }
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    RichTextEditorComponent.prototype.registerOnChange = function (registerFunction) {
    };
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    RichTextEditorComponent.prototype.registerOnTouched = function (registerFunction) {
    };
    /**
     * @param {?} value
     * @return {?}
     */
    RichTextEditorComponent.prototype.writeValue = function (value) {
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    RichTextEditorComponent.prototype.setDisabledState = function (disabled) {
    };
    /**
     * @return {?}
     */
    RichTextEditorComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    RichTextEditorComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    RichTextEditorComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    RichTextEditorComponent.prototype.ngAfterContentChecked = function () {
    };
    return RichTextEditorComponent;
}(ej2Richtexteditor.RichTextEditor));
exports.RichTextEditorComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-richtexteditor',
                inputs: inputs,
                outputs: outputs,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return RichTextEditorComponent_1; }),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
exports.RichTextEditorComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.RichTextEditorComponent.propDecorators = {
    'valueTemplate': [{ type: core.ContentChild, args: ['valueTemplate',] },],
};
__decorate([
    ej2AngularBase.Template(),
    __metadata("design:type", Object)
], exports.RichTextEditorComponent.prototype, "valueTemplate", void 0);
exports.RichTextEditorComponent = RichTextEditorComponent_1 = __decorate([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase, ej2AngularBase.FormBase]),
    __metadata("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.RichTextEditorComponent);
var RichTextEditorComponent_1;
/**
 * NgModule definition for the RichTextEditor component.
 */
var RichTextEditorModule = /** @class */ (function () {
    function RichTextEditorModule() {
    }
    return RichTextEditorModule;
}());
RichTextEditorModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.RichTextEditorComponent
                ],
                exports: [
                    exports.RichTextEditorComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
RichTextEditorModule.ctorParameters = function () { return []; };
var ToolbarService = { provide: 'RichTextEditorToolbar', useValue: ej2Richtexteditor.Toolbar };
var LinkService = { provide: 'RichTextEditorLink', useValue: ej2Richtexteditor.Link };
var ImageService = { provide: 'RichTextEditorImage', useValue: ej2Richtexteditor.Image };
var CountService = { provide: 'RichTextEditorCount', useValue: ej2Richtexteditor.Count };
var QuickToolbarService = { provide: 'RichTextEditorQuickToolbar', useValue: ej2Richtexteditor.QuickToolbar };
var HtmlEditorService = { provide: 'RichTextEditorHtmlEditor', useValue: ej2Richtexteditor.HtmlEditor };
var MarkdownEditorService = { provide: 'RichTextEditorMarkdownEditor', useValue: ej2Richtexteditor.MarkdownEditor };
var TableService = { provide: 'RichTextEditorTable', useValue: ej2Richtexteditor.Table };
var PasteCleanupService = { provide: 'RichTextEditorPasteCleanup', useValue: ej2Richtexteditor.PasteCleanup };
/**
 * NgModule definition for the RichTextEditor component with providers.
 */
var RichTextEditorAllModule = /** @class */ (function () {
    function RichTextEditorAllModule() {
    }
    return RichTextEditorAllModule;
}());
RichTextEditorAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, RichTextEditorModule],
                exports: [
                    RichTextEditorModule
                ],
                providers: [
                    ToolbarService,
                    LinkService,
                    ImageService,
                    CountService,
                    QuickToolbarService,
                    HtmlEditorService,
                    MarkdownEditorService,
                    TableService,
                    PasteCleanupService
                ]
            },] },
];
/**
 * @nocollapse
 */
RichTextEditorAllModule.ctorParameters = function () { return []; };

exports.RichTextEditorModule = RichTextEditorModule;
exports.RichTextEditorAllModule = RichTextEditorAllModule;
exports.ToolbarService = ToolbarService;
exports.LinkService = LinkService;
exports.ImageService = ImageService;
exports.CountService = CountService;
exports.QuickToolbarService = QuickToolbarService;
exports.HtmlEditorService = HtmlEditorService;
exports.MarkdownEditorService = MarkdownEditorService;
exports.TableService = TableService;
exports.PasteCleanupService = PasteCleanupService;
exports.ɵa = inputs;
exports.ɵb = outputs;
exports.Toolbar = ej2Richtexteditor.Toolbar;
exports.KeyboardEvents = ej2Richtexteditor.KeyboardEvents;
exports.BaseToolbar = ej2Richtexteditor.BaseToolbar;
exports.BaseQuickToolbar = ej2Richtexteditor.BaseQuickToolbar;
exports.QuickToolbar = ej2Richtexteditor.QuickToolbar;
exports.Count = ej2Richtexteditor.Count;
exports.ColorPickerInput = ej2Richtexteditor.ColorPickerInput;
exports.MarkdownToolbarStatus = ej2Richtexteditor.MarkdownToolbarStatus;
exports.ExecCommandCallBack = ej2Richtexteditor.ExecCommandCallBack;
exports.ToolbarAction = ej2Richtexteditor.ToolbarAction;
exports.MarkdownEditor = ej2Richtexteditor.MarkdownEditor;
exports.HtmlEditor = ej2Richtexteditor.HtmlEditor;
exports.PasteCleanup = ej2Richtexteditor.PasteCleanup;
exports.HTMLFormatter = ej2Richtexteditor.HTMLFormatter;
exports.Formatter = ej2Richtexteditor.Formatter;
exports.MarkdownFormatter = ej2Richtexteditor.MarkdownFormatter;
exports.ContentRender = ej2Richtexteditor.ContentRender;
exports.Render = ej2Richtexteditor.Render;
exports.ToolbarRenderer = ej2Richtexteditor.ToolbarRenderer;
exports.Link = ej2Richtexteditor.Link;
exports.Image = ej2Richtexteditor.Image;
exports.ViewSource = ej2Richtexteditor.ViewSource;
exports.Table = ej2Richtexteditor.Table;
exports.RichTextEditor = ej2Richtexteditor.RichTextEditor;
exports.RenderType = ej2Richtexteditor.RenderType;
exports.ToolbarType = ej2Richtexteditor.ToolbarType;
exports.executeGroup = ej2Richtexteditor.executeGroup;
exports.created = ej2Richtexteditor.created;
exports.destroyed = ej2Richtexteditor.destroyed;
exports.load = ej2Richtexteditor.load;
exports.initialLoad = ej2Richtexteditor.initialLoad;
exports.initialEnd = ej2Richtexteditor.initialEnd;
exports.iframeMouseDown = ej2Richtexteditor.iframeMouseDown;
exports.destroy = ej2Richtexteditor.destroy;
exports.toolbarClick = ej2Richtexteditor.toolbarClick;
exports.toolbarRefresh = ej2Richtexteditor.toolbarRefresh;
exports.refreshBegin = ej2Richtexteditor.refreshBegin;
exports.toolbarUpdated = ej2Richtexteditor.toolbarUpdated;
exports.bindOnEnd = ej2Richtexteditor.bindOnEnd;
exports.renderColorPicker = ej2Richtexteditor.renderColorPicker;
exports.htmlToolbarClick = ej2Richtexteditor.htmlToolbarClick;
exports.markdownToolbarClick = ej2Richtexteditor.markdownToolbarClick;
exports.destroyColorPicker = ej2Richtexteditor.destroyColorPicker;
exports.modelChanged = ej2Richtexteditor.modelChanged;
exports.keyUp = ej2Richtexteditor.keyUp;
exports.keyDown = ej2Richtexteditor.keyDown;
exports.mouseUp = ej2Richtexteditor.mouseUp;
exports.toolbarCreated = ej2Richtexteditor.toolbarCreated;
exports.toolbarRenderComplete = ej2Richtexteditor.toolbarRenderComplete;
exports.enableFullScreen = ej2Richtexteditor.enableFullScreen;
exports.disableFullScreen = ej2Richtexteditor.disableFullScreen;
exports.dropDownSelect = ej2Richtexteditor.dropDownSelect;
exports.beforeDropDownItemRender = ej2Richtexteditor.beforeDropDownItemRender;
exports.execCommandCallBack = ej2Richtexteditor.execCommandCallBack;
exports.imageToolbarAction = ej2Richtexteditor.imageToolbarAction;
exports.linkToolbarAction = ej2Richtexteditor.linkToolbarAction;
exports.resizeStart = ej2Richtexteditor.resizeStart;
exports.onResize = ej2Richtexteditor.onResize;
exports.resizeStop = ej2Richtexteditor.resizeStop;
exports.undo = ej2Richtexteditor.undo;
exports.redo = ej2Richtexteditor.redo;
exports.insertLink = ej2Richtexteditor.insertLink;
exports.unLink = ej2Richtexteditor.unLink;
exports.editLink = ej2Richtexteditor.editLink;
exports.openLink = ej2Richtexteditor.openLink;
exports.actionBegin = ej2Richtexteditor.actionBegin;
exports.actionComplete = ej2Richtexteditor.actionComplete;
exports.toolbarStatusUpdate = ej2Richtexteditor.toolbarStatusUpdate;
exports.actionSuccess = ej2Richtexteditor.actionSuccess;
exports.updateToolbarItem = ej2Richtexteditor.updateToolbarItem;
exports.insertImage = ej2Richtexteditor.insertImage;
exports.insertCompleted = ej2Richtexteditor.insertCompleted;
exports.imageLeft = ej2Richtexteditor.imageLeft;
exports.imageRight = ej2Richtexteditor.imageRight;
exports.imageCenter = ej2Richtexteditor.imageCenter;
exports.imageBreak = ej2Richtexteditor.imageBreak;
exports.imageInline = ej2Richtexteditor.imageInline;
exports.imageLink = ej2Richtexteditor.imageLink;
exports.imageAlt = ej2Richtexteditor.imageAlt;
exports.imageDelete = ej2Richtexteditor.imageDelete;
exports.imageCaption = ej2Richtexteditor.imageCaption;
exports.imageSize = ej2Richtexteditor.imageSize;
exports.sourceCode = ej2Richtexteditor.sourceCode;
exports.updateSource = ej2Richtexteditor.updateSource;
exports.toolbarOpen = ej2Richtexteditor.toolbarOpen;
exports.beforeDropDownOpen = ej2Richtexteditor.beforeDropDownOpen;
exports.selectionSave = ej2Richtexteditor.selectionSave;
exports.selectionRestore = ej2Richtexteditor.selectionRestore;
exports.expandPopupClick = ej2Richtexteditor.expandPopupClick;
exports.count = ej2Richtexteditor.count;
exports.contentFocus = ej2Richtexteditor.contentFocus;
exports.contentBlur = ej2Richtexteditor.contentBlur;
exports.mouseDown = ej2Richtexteditor.mouseDown;
exports.sourceCodeMouseDown = ej2Richtexteditor.sourceCodeMouseDown;
exports.editAreaClick = ej2Richtexteditor.editAreaClick;
exports.scroll = ej2Richtexteditor.scroll;
exports.colorPickerChanged = ej2Richtexteditor.colorPickerChanged;
exports.tableColorPickerChanged = ej2Richtexteditor.tableColorPickerChanged;
exports.focusChange = ej2Richtexteditor.focusChange;
exports.selectAll = ej2Richtexteditor.selectAll;
exports.selectRange = ej2Richtexteditor.selectRange;
exports.getSelectedHtml = ej2Richtexteditor.getSelectedHtml;
exports.renderInlineToolbar = ej2Richtexteditor.renderInlineToolbar;
exports.paste = ej2Richtexteditor.paste;
exports.imgModule = ej2Richtexteditor.imgModule;
exports.rtlMode = ej2Richtexteditor.rtlMode;
exports.createTable = ej2Richtexteditor.createTable;
exports.docClick = ej2Richtexteditor.docClick;
exports.tableToolbarAction = ej2Richtexteditor.tableToolbarAction;
exports.checkUndo = ej2Richtexteditor.checkUndo;
exports.readOnlyMode = ej2Richtexteditor.readOnlyMode;
exports.pasteClean = ej2Richtexteditor.pasteClean;
exports.beforeDialogOpen = ej2Richtexteditor.beforeDialogOpen;
exports.dialogOpen = ej2Richtexteditor.dialogOpen;
exports.dialogClose = ej2Richtexteditor.dialogClose;
exports.beforeQuickToolbarOpen = ej2Richtexteditor.beforeQuickToolbarOpen;
exports.quickToolbarOpen = ej2Richtexteditor.quickToolbarOpen;
exports.quickToolbarClose = ej2Richtexteditor.quickToolbarClose;
exports.popupHide = ej2Richtexteditor.popupHide;
exports.imageSelected = ej2Richtexteditor.imageSelected;
exports.imageUploading = ej2Richtexteditor.imageUploading;
exports.imageUploadSuccess = ej2Richtexteditor.imageUploadSuccess;
exports.imageUploadFailed = ej2Richtexteditor.imageUploadFailed;
exports.imageRemoving = ej2Richtexteditor.imageRemoving;
exports.ServiceLocator = ej2Richtexteditor.ServiceLocator;
exports.RendererFactory = ej2Richtexteditor.RendererFactory;
exports.EditorManager = ej2Richtexteditor.EditorManager;
exports.IMAGE = ej2Richtexteditor.IMAGE;
exports.TABLE = ej2Richtexteditor.TABLE;
exports.LINK = ej2Richtexteditor.LINK;
exports.INSERT_ROW = ej2Richtexteditor.INSERT_ROW;
exports.INSERT_COLUMN = ej2Richtexteditor.INSERT_COLUMN;
exports.DELETEROW = ej2Richtexteditor.DELETEROW;
exports.DELETECOLUMN = ej2Richtexteditor.DELETECOLUMN;
exports.REMOVETABLE = ej2Richtexteditor.REMOVETABLE;
exports.TABLEHEADER = ej2Richtexteditor.TABLEHEADER;
exports.TABLE_VERTICAL_ALIGN = ej2Richtexteditor.TABLE_VERTICAL_ALIGN;
exports.ALIGNMENT_TYPE = ej2Richtexteditor.ALIGNMENT_TYPE;
exports.INDENT_TYPE = ej2Richtexteditor.INDENT_TYPE;
exports.DEFAULT_TAG = ej2Richtexteditor.DEFAULT_TAG;
exports.BLOCK_TAGS = ej2Richtexteditor.BLOCK_TAGS;
exports.IGNORE_BLOCK_TAGS = ej2Richtexteditor.IGNORE_BLOCK_TAGS;
exports.TABLE_BLOCK_TAGS = ej2Richtexteditor.TABLE_BLOCK_TAGS;
exports.SELECTION_TYPE = ej2Richtexteditor.SELECTION_TYPE;
exports.INSERTHTML_TYPE = ej2Richtexteditor.INSERTHTML_TYPE;
exports.INSERT_TEXT_TYPE = ej2Richtexteditor.INSERT_TEXT_TYPE;
exports.CLEAR_TYPE = ej2Richtexteditor.CLEAR_TYPE;
exports.Lists = ej2Richtexteditor.Lists;
exports.markerClassName = ej2Richtexteditor.markerClassName;
exports.DOMNode = ej2Richtexteditor.DOMNode;
exports.Alignments = ej2Richtexteditor.Alignments;
exports.Indents = ej2Richtexteditor.Indents;
exports.Formats = ej2Richtexteditor.Formats;
exports.LinkCommand = ej2Richtexteditor.LinkCommand;
exports.InsertMethods = ej2Richtexteditor.InsertMethods;
exports.InsertHtml = ej2Richtexteditor.InsertHtml;
exports.IsFormatted = ej2Richtexteditor.IsFormatted;
exports.NodeCutter = ej2Richtexteditor.NodeCutter;
exports.ImageCommand = ej2Richtexteditor.ImageCommand;
exports.SelectionCommands = ej2Richtexteditor.SelectionCommands;
exports.SelectionBasedExec = ej2Richtexteditor.SelectionBasedExec;
exports.ClearFormat = ej2Richtexteditor.ClearFormat;
exports.ClearFormatExec = ej2Richtexteditor.ClearFormatExec;
exports.UndoRedoManager = ej2Richtexteditor.UndoRedoManager;
exports.TableCommand = ej2Richtexteditor.TableCommand;
exports.statusCollection = ej2Richtexteditor.statusCollection;
exports.ToolbarStatus = ej2Richtexteditor.ToolbarStatus;
exports.NodeSelection = ej2Richtexteditor.NodeSelection;
exports.MarkdownParser = ej2Richtexteditor.MarkdownParser;
exports.LISTS_COMMAND = ej2Richtexteditor.LISTS_COMMAND;
exports.selectionCommand = ej2Richtexteditor.selectionCommand;
exports.LINK_COMMAND = ej2Richtexteditor.LINK_COMMAND;
exports.CLEAR_COMMAND = ej2Richtexteditor.CLEAR_COMMAND;
exports.MD_TABLE = ej2Richtexteditor.MD_TABLE;
exports.MDLists = ej2Richtexteditor.MDLists;
exports.MDFormats = ej2Richtexteditor.MDFormats;
exports.MarkdownSelection = ej2Richtexteditor.MarkdownSelection;
exports.UndoRedoCommands = ej2Richtexteditor.UndoRedoCommands;
exports.MDSelectionFormats = ej2Richtexteditor.MDSelectionFormats;
exports.MDLink = ej2Richtexteditor.MDLink;
exports.markdownFormatTags = ej2Richtexteditor.markdownFormatTags;
exports.markdownSelectionTags = ej2Richtexteditor.markdownSelectionTags;
exports.markdownListsTags = ej2Richtexteditor.markdownListsTags;
exports.htmlKeyConfig = ej2Richtexteditor.htmlKeyConfig;
exports.markdownKeyConfig = ej2Richtexteditor.markdownKeyConfig;
exports.pasteCleanupGroupingTags = ej2Richtexteditor.pasteCleanupGroupingTags;
exports.listConversionFilters = ej2Richtexteditor.listConversionFilters;
exports.selfClosingTags = ej2Richtexteditor.selfClosingTags;
exports.KEY_DOWN = ej2Richtexteditor.KEY_DOWN;
exports.ACTION = ej2Richtexteditor.ACTION;
exports.FORMAT_TYPE = ej2Richtexteditor.FORMAT_TYPE;
exports.KEY_DOWN_HANDLER = ej2Richtexteditor.KEY_DOWN_HANDLER;
exports.LIST_TYPE = ej2Richtexteditor.LIST_TYPE;
exports.KEY_UP_HANDLER = ej2Richtexteditor.KEY_UP_HANDLER;
exports.KEY_UP = ej2Richtexteditor.KEY_UP;
exports.MODEL_CHANGED_PLUGIN = ej2Richtexteditor.MODEL_CHANGED_PLUGIN;
exports.MODEL_CHANGED = ej2Richtexteditor.MODEL_CHANGED;
exports.MS_WORD_CLEANUP_PLUGIN = ej2Richtexteditor.MS_WORD_CLEANUP_PLUGIN;
exports.MS_WORD_CLEANUP = ej2Richtexteditor.MS_WORD_CLEANUP;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ej2-angular-richtexteditor.umd.js.map
