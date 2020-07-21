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
var inputs = ['autoSaveOnIdle', 'backgroundColor', 'cssClass', 'editorMode', 'enableAutoUrl', 'enableHtmlEncode', 'enableHtmlSanitizer', 'enablePersistence', 'enableResize', 'enableRtl', 'enableTabKey', 'enableXhtml', 'enabled', 'floatingToolbarOffset', 'fontColor', 'fontFamily', 'fontSize', 'format', 'formatter', 'height', 'htmlAttributes', 'iframeSettings', 'inlineMode', 'insertImageSettings', 'keyConfig', 'locale', 'maxLength', 'pasteCleanupSettings', 'placeholder', 'quickToolbarSettings', 'readonly', 'saveInterval', 'showCharCount', 'tableSettings', 'toolbarSettings', 'undoRedoSteps', 'undoRedoTimer', 'value', 'valueTemplate', 'width'];
var outputs = ['actionBegin', 'actionComplete', 'afterImageDelete', 'beforeDialogClose', 'beforeDialogOpen', 'beforeImageUpload', 'beforeQuickToolbarOpen', 'beforeSanitizeHtml', 'blur', 'change', 'created', 'destroyed', 'dialogClose', 'dialogOpen', 'focus', 'imageRemoving', 'imageSelected', 'imageUploadFailed', 'imageUploadSuccess', 'imageUploading', 'quickToolbarClose', 'quickToolbarOpen', 'resizeStart', 'resizeStop', 'resizing', 'toolbarClick', 'toolbarStatusUpdate', 'valueChange'];
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
        try {
            var mod = _this.injector.get('RichTextEditorResize');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_k) { }
        _this.registerEvents(outputs);
        _this.addTwoWay.call(_this, twoWays);
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.formContext = new ej2AngularBase.FormBase();
        _this.formCompContext = new ej2AngularBase.ComponentBase();
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
        this.formCompContext.ngOnInit(this);
    };
    /**
     * @return {?}
     */
    RichTextEditorComponent.prototype.ngAfterViewInit = function () {
        this.formContext.ngAfterViewInit(this);
    };
    /**
     * @return {?}
     */
    RichTextEditorComponent.prototype.ngOnDestroy = function () {
        this.formCompContext.ngOnDestroy(this);
    };
    /**
     * @return {?}
     */
    RichTextEditorComponent.prototype.ngAfterContentChecked = function () {
        this.formCompContext.ngAfterContentChecked(this);
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
var ResizeService = { provide: 'RichTextEditorResize', useValue: ej2Richtexteditor.Resize };
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
                    PasteCleanupService,
                    ResizeService
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
exports.ResizeService = ResizeService;
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
exports.Resize = ej2Richtexteditor.Resize;
exports.DropDownButtons = ej2Richtexteditor.DropDownButtons;
exports.FullScreen = ej2Richtexteditor.FullScreen;
exports.setAttributes = ej2Richtexteditor.setAttributes;
exports.HtmlToolbarStatus = ej2Richtexteditor.HtmlToolbarStatus;
exports.XhtmlValidation = ej2Richtexteditor.XhtmlValidation;
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
exports.DialogRenderer = ej2Richtexteditor.DialogRenderer;
exports.IframeContentRender = ej2Richtexteditor.IframeContentRender;
exports.MarkdownRender = ej2Richtexteditor.MarkdownRender;
exports.PopupRenderer = ej2Richtexteditor.PopupRenderer;
exports.RichTextEditor = ej2Richtexteditor.RichTextEditor;
exports.RenderType = ej2Richtexteditor.RenderType;
exports.ToolbarType = ej2Richtexteditor.ToolbarType;
exports.executeGroup = ej2Richtexteditor.executeGroup;
exports.created = ej2Richtexteditor.created;
exports.destroyed = ej2Richtexteditor.destroyed;
exports.load = ej2Richtexteditor.load;
exports.initialLoad = ej2Richtexteditor.initialLoad;
exports.contentChanged = ej2Richtexteditor.contentChanged;
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
exports.contentscroll = ej2Richtexteditor.contentscroll;
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
exports.beforeDialogClose = ej2Richtexteditor.beforeDialogClose;
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
exports.afterImageDelete = ej2Richtexteditor.afterImageDelete;
exports.drop = ej2Richtexteditor.drop;
exports.xhtmlValidation = ej2Richtexteditor.xhtmlValidation;
exports.beforeImageUpload = ej2Richtexteditor.beforeImageUpload;
exports.CLS_RTE = ej2Richtexteditor.CLS_RTE;
exports.CLS_RTL = ej2Richtexteditor.CLS_RTL;
exports.CLS_CONTENT = ej2Richtexteditor.CLS_CONTENT;
exports.CLS_DISABLED = ej2Richtexteditor.CLS_DISABLED;
exports.CLS_SCRIPT_SHEET = ej2Richtexteditor.CLS_SCRIPT_SHEET;
exports.CLS_STYLE_SHEET = ej2Richtexteditor.CLS_STYLE_SHEET;
exports.CLS_TOOLBAR = ej2Richtexteditor.CLS_TOOLBAR;
exports.CLS_TB_FIXED = ej2Richtexteditor.CLS_TB_FIXED;
exports.CLS_TB_FLOAT = ej2Richtexteditor.CLS_TB_FLOAT;
exports.CLS_TB_ABS_FLOAT = ej2Richtexteditor.CLS_TB_ABS_FLOAT;
exports.CLS_INLINE = ej2Richtexteditor.CLS_INLINE;
exports.CLS_TB_INLINE = ej2Richtexteditor.CLS_TB_INLINE;
exports.CLS_RTE_EXPAND_TB = ej2Richtexteditor.CLS_RTE_EXPAND_TB;
exports.CLS_FULL_SCREEN = ej2Richtexteditor.CLS_FULL_SCREEN;
exports.CLS_QUICK_TB = ej2Richtexteditor.CLS_QUICK_TB;
exports.CLS_POP = ej2Richtexteditor.CLS_POP;
exports.CLS_QUICK_POP = ej2Richtexteditor.CLS_QUICK_POP;
exports.CLS_QUICK_DROPDOWN = ej2Richtexteditor.CLS_QUICK_DROPDOWN;
exports.CLS_IMAGE_POP = ej2Richtexteditor.CLS_IMAGE_POP;
exports.CLS_INLINE_POP = ej2Richtexteditor.CLS_INLINE_POP;
exports.CLS_INLINE_DROPDOWN = ej2Richtexteditor.CLS_INLINE_DROPDOWN;
exports.CLS_DROPDOWN_POPUP = ej2Richtexteditor.CLS_DROPDOWN_POPUP;
exports.CLS_DROPDOWN_ICONS = ej2Richtexteditor.CLS_DROPDOWN_ICONS;
exports.CLS_DROPDOWN_ITEMS = ej2Richtexteditor.CLS_DROPDOWN_ITEMS;
exports.CLS_DROPDOWN_BTN = ej2Richtexteditor.CLS_DROPDOWN_BTN;
exports.CLS_RTE_CONTENT = ej2Richtexteditor.CLS_RTE_CONTENT;
exports.CLS_TB_ITEM = ej2Richtexteditor.CLS_TB_ITEM;
exports.CLS_TB_EXTENDED = ej2Richtexteditor.CLS_TB_EXTENDED;
exports.CLS_TB_WRAP = ej2Richtexteditor.CLS_TB_WRAP;
exports.CLS_POPUP = ej2Richtexteditor.CLS_POPUP;
exports.CLS_SEPARATOR = ej2Richtexteditor.CLS_SEPARATOR;
exports.CLS_MINIMIZE = ej2Richtexteditor.CLS_MINIMIZE;
exports.CLS_MAXIMIZE = ej2Richtexteditor.CLS_MAXIMIZE;
exports.CLS_BACK = ej2Richtexteditor.CLS_BACK;
exports.CLS_SHOW = ej2Richtexteditor.CLS_SHOW;
exports.CLS_HIDE = ej2Richtexteditor.CLS_HIDE;
exports.CLS_VISIBLE = ej2Richtexteditor.CLS_VISIBLE;
exports.CLS_FOCUS = ej2Richtexteditor.CLS_FOCUS;
exports.CLS_RM_WHITE_SPACE = ej2Richtexteditor.CLS_RM_WHITE_SPACE;
exports.CLS_IMGRIGHT = ej2Richtexteditor.CLS_IMGRIGHT;
exports.CLS_IMGLEFT = ej2Richtexteditor.CLS_IMGLEFT;
exports.CLS_IMGCENTER = ej2Richtexteditor.CLS_IMGCENTER;
exports.CLS_IMGBREAK = ej2Richtexteditor.CLS_IMGBREAK;
exports.CLS_CAPTION = ej2Richtexteditor.CLS_CAPTION;
exports.CLS_RTE_CAPTION = ej2Richtexteditor.CLS_RTE_CAPTION;
exports.CLS_CAPINLINE = ej2Richtexteditor.CLS_CAPINLINE;
exports.CLS_IMGINLINE = ej2Richtexteditor.CLS_IMGINLINE;
exports.CLS_COUNT = ej2Richtexteditor.CLS_COUNT;
exports.CLS_WARNING = ej2Richtexteditor.CLS_WARNING;
exports.CLS_ERROR = ej2Richtexteditor.CLS_ERROR;
exports.CLS_ICONS = ej2Richtexteditor.CLS_ICONS;
exports.CLS_ACTIVE = ej2Richtexteditor.CLS_ACTIVE;
exports.CLS_EXPAND_OPEN = ej2Richtexteditor.CLS_EXPAND_OPEN;
exports.CLS_RTE_ELEMENTS = ej2Richtexteditor.CLS_RTE_ELEMENTS;
exports.CLS_TB_BTN = ej2Richtexteditor.CLS_TB_BTN;
exports.CLS_HR_SEPARATOR = ej2Richtexteditor.CLS_HR_SEPARATOR;
exports.CLS_TB_IOS_FIX = ej2Richtexteditor.CLS_TB_IOS_FIX;
exports.CLS_TB_STATIC = ej2Richtexteditor.CLS_TB_STATIC;
exports.CLS_FORMATS_TB_BTN = ej2Richtexteditor.CLS_FORMATS_TB_BTN;
exports.CLS_FONT_NAME_TB_BTN = ej2Richtexteditor.CLS_FONT_NAME_TB_BTN;
exports.CLS_FONT_SIZE_TB_BTN = ej2Richtexteditor.CLS_FONT_SIZE_TB_BTN;
exports.CLS_FONT_COLOR_TARGET = ej2Richtexteditor.CLS_FONT_COLOR_TARGET;
exports.CLS_BACKGROUND_COLOR_TARGET = ej2Richtexteditor.CLS_BACKGROUND_COLOR_TARGET;
exports.CLS_COLOR_CONTENT = ej2Richtexteditor.CLS_COLOR_CONTENT;
exports.CLS_FONT_COLOR_DROPDOWN = ej2Richtexteditor.CLS_FONT_COLOR_DROPDOWN;
exports.CLS_BACKGROUND_COLOR_DROPDOWN = ej2Richtexteditor.CLS_BACKGROUND_COLOR_DROPDOWN;
exports.CLS_COLOR_PALETTE = ej2Richtexteditor.CLS_COLOR_PALETTE;
exports.CLS_FONT_COLOR_PICKER = ej2Richtexteditor.CLS_FONT_COLOR_PICKER;
exports.CLS_BACKGROUND_COLOR_PICKER = ej2Richtexteditor.CLS_BACKGROUND_COLOR_PICKER;
exports.CLS_RTE_READONLY = ej2Richtexteditor.CLS_RTE_READONLY;
exports.CLS_TABLE_SEL = ej2Richtexteditor.CLS_TABLE_SEL;
exports.CLS_TB_DASH_BOR = ej2Richtexteditor.CLS_TB_DASH_BOR;
exports.CLS_TB_ALT_BOR = ej2Richtexteditor.CLS_TB_ALT_BOR;
exports.CLS_TB_COL_RES = ej2Richtexteditor.CLS_TB_COL_RES;
exports.CLS_TB_ROW_RES = ej2Richtexteditor.CLS_TB_ROW_RES;
exports.CLS_TB_BOX_RES = ej2Richtexteditor.CLS_TB_BOX_RES;
exports.CLS_RTE_HIDDEN = ej2Richtexteditor.CLS_RTE_HIDDEN;
exports.CLS_RTE_PASTE_KEEP_FORMAT = ej2Richtexteditor.CLS_RTE_PASTE_KEEP_FORMAT;
exports.CLS_RTE_PASTE_REMOVE_FORMAT = ej2Richtexteditor.CLS_RTE_PASTE_REMOVE_FORMAT;
exports.CLS_RTE_PASTE_PLAIN_FORMAT = ej2Richtexteditor.CLS_RTE_PASTE_PLAIN_FORMAT;
exports.CLS_RTE_PASTE_OK = ej2Richtexteditor.CLS_RTE_PASTE_OK;
exports.CLS_RTE_PASTE_CANCEL = ej2Richtexteditor.CLS_RTE_PASTE_CANCEL;
exports.CLS_RTE_DIALOG_MIN_HEIGHT = ej2Richtexteditor.CLS_RTE_DIALOG_MIN_HEIGHT;
exports.CLS_RTE_RES_HANDLE = ej2Richtexteditor.CLS_RTE_RES_HANDLE;
exports.CLS_RTE_RES_EAST = ej2Richtexteditor.CLS_RTE_RES_EAST;
exports.CLS_RTE_IMAGE = ej2Richtexteditor.CLS_RTE_IMAGE;
exports.CLS_RESIZE = ej2Richtexteditor.CLS_RESIZE;
exports.CLS_IMG_FOCUS = ej2Richtexteditor.CLS_IMG_FOCUS;
exports.CLS_RTE_DRAG_IMAGE = ej2Richtexteditor.CLS_RTE_DRAG_IMAGE;
exports.CLS_RTE_UPLOAD_POPUP = ej2Richtexteditor.CLS_RTE_UPLOAD_POPUP;
exports.CLS_POPUP_OPEN = ej2Richtexteditor.CLS_POPUP_OPEN;
exports.CLS_IMG_RESIZE = ej2Richtexteditor.CLS_IMG_RESIZE;
exports.CLS_DROPAREA = ej2Richtexteditor.CLS_DROPAREA;
exports.CLS_IMG_INNER = ej2Richtexteditor.CLS_IMG_INNER;
exports.CLS_UPLOAD_FILES = ej2Richtexteditor.CLS_UPLOAD_FILES;
exports.CLS_RTE_DIALOG_UPLOAD = ej2Richtexteditor.CLS_RTE_DIALOG_UPLOAD;
exports.CLS_RTE_RES_CNT = ej2Richtexteditor.CLS_RTE_RES_CNT;
exports.CLS_CUSTOM_TILE = ej2Richtexteditor.CLS_CUSTOM_TILE;
exports.CLS_NOCOLOR_ITEM = ej2Richtexteditor.CLS_NOCOLOR_ITEM;
exports.CLS_TABLE = ej2Richtexteditor.CLS_TABLE;
exports.CLS_TABLE_BORDER = ej2Richtexteditor.CLS_TABLE_BORDER;
exports.CLS_RTE_TABLE_RESIZE = ej2Richtexteditor.CLS_RTE_TABLE_RESIZE;
exports.CLS_RTE_FIXED_TB_EXPAND = ej2Richtexteditor.CLS_RTE_FIXED_TB_EXPAND;
exports.getIndex = ej2Richtexteditor.getIndex;
exports.hasClass = ej2Richtexteditor.hasClass;
exports.getDropDownValue = ej2Richtexteditor.getDropDownValue;
exports.isIDevice = ej2Richtexteditor.isIDevice;
exports.getFormattedFontSize = ej2Richtexteditor.getFormattedFontSize;
exports.pageYOffset = ej2Richtexteditor.pageYOffset;
exports.getTooltipText = ej2Richtexteditor.getTooltipText;
exports.setToolbarStatus = ej2Richtexteditor.setToolbarStatus;
exports.getCollection = ej2Richtexteditor.getCollection;
exports.getTBarItemsIndex = ej2Richtexteditor.getTBarItemsIndex;
exports.updateUndoRedoStatus = ej2Richtexteditor.updateUndoRedoStatus;
exports.dispatchEvent = ej2Richtexteditor.dispatchEvent;
exports.parseHtml = ej2Richtexteditor.parseHtml;
exports.getTextNodesUnder = ej2Richtexteditor.getTextNodesUnder;
exports.toObjectLowerCase = ej2Richtexteditor.toObjectLowerCase;
exports.getEditValue = ej2Richtexteditor.getEditValue;
exports.updateTextNode = ej2Richtexteditor.updateTextNode;
exports.isEditableValueEmpty = ej2Richtexteditor.isEditableValueEmpty;
exports.decode = ej2Richtexteditor.decode;
exports.sanitizeHelper = ej2Richtexteditor.sanitizeHelper;
exports.convertToBlob = ej2Richtexteditor.convertToBlob;
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
exports.CLASS_IMAGE_RIGHT = ej2Richtexteditor.CLASS_IMAGE_RIGHT;
exports.CLASS_IMAGE_LEFT = ej2Richtexteditor.CLASS_IMAGE_LEFT;
exports.CLASS_IMAGE_CENTER = ej2Richtexteditor.CLASS_IMAGE_CENTER;
exports.CLASS_IMAGE_BREAK = ej2Richtexteditor.CLASS_IMAGE_BREAK;
exports.CLASS_CAPTION = ej2Richtexteditor.CLASS_CAPTION;
exports.CLASS_RTE_CAPTION = ej2Richtexteditor.CLASS_RTE_CAPTION;
exports.CLASS_CAPTION_INLINE = ej2Richtexteditor.CLASS_CAPTION_INLINE;
exports.CLASS_IMAGE_INLINE = ej2Richtexteditor.CLASS_IMAGE_INLINE;
exports.Lists = ej2Richtexteditor.Lists;
exports.markerClassName = ej2Richtexteditor.markerClassName;
exports.DOMNode = ej2Richtexteditor.DOMNode;
exports.Alignments = ej2Richtexteditor.Alignments;
exports.Indents = ej2Richtexteditor.Indents;
exports.Formats = ej2Richtexteditor.Formats;
exports.LinkCommand = ej2Richtexteditor.LinkCommand;
exports.InsertMethods = ej2Richtexteditor.InsertMethods;
exports.InsertTextExec = ej2Richtexteditor.InsertTextExec;
exports.InsertHtmlExec = ej2Richtexteditor.InsertHtmlExec;
exports.InsertHtml = ej2Richtexteditor.InsertHtml;
exports.IsFormatted = ej2Richtexteditor.IsFormatted;
exports.MsWordPaste = ej2Richtexteditor.MsWordPaste;
exports.NodeCutter = ej2Richtexteditor.NodeCutter;
exports.ImageCommand = ej2Richtexteditor.ImageCommand;
exports.SelectionCommands = ej2Richtexteditor.SelectionCommands;
exports.SelectionBasedExec = ej2Richtexteditor.SelectionBasedExec;
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
exports.ClearFormat = ej2Richtexteditor.ClearFormat;
exports.MDLists = ej2Richtexteditor.MDLists;
exports.MDFormats = ej2Richtexteditor.MDFormats;
exports.MarkdownSelection = ej2Richtexteditor.MarkdownSelection;
exports.UndoRedoCommands = ej2Richtexteditor.UndoRedoCommands;
exports.MDSelectionFormats = ej2Richtexteditor.MDSelectionFormats;
exports.MDLink = ej2Richtexteditor.MDLink;
exports.MDTable = ej2Richtexteditor.MDTable;
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
