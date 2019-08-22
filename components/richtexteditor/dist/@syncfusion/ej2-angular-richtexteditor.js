import { ChangeDetectionStrategy, Component, ContentChild, ElementRef, Injector, NgModule, Renderer2, ViewContainerRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ComponentBase, ComponentMixins, FormBase, Template, setValue } from '@syncfusion/ej2-angular-base';
import { Count, HtmlEditor, Image, Link, MarkdownEditor, PasteCleanup, QuickToolbar, RichTextEditor, Table, Toolbar } from '@syncfusion/ej2-richtexteditor';
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
const inputs = ['backgroundColor', 'cssClass', 'editorMode', 'enableAutoUrl', 'enableHtmlEncode', 'enablePersistence', 'enableRtl', 'enableTabKey', 'enabled', 'floatingToolbarOffset', 'fontColor', 'fontFamily', 'fontSize', 'format', 'formatter', 'height', 'htmlAttributes', 'iframeSettings', 'inlineMode', 'insertImageSettings', 'keyConfig', 'locale', 'maxLength', 'pasteCleanupSettings', 'placeholder', 'quickToolbarSettings', 'readonly', 'saveInterval', 'showCharCount', 'tableSettings', 'toolbarSettings', 'undoRedoSteps', 'undoRedoTimer', 'value', 'valueTemplate', 'width'];
const outputs = ['actionBegin', 'actionComplete', 'beforeDialogOpen', 'beforeQuickToolbarOpen', 'beforeSanitizeHtml', 'blur', 'change', 'created', 'destroyed', 'dialogClose', 'dialogOpen', 'focus', 'imageRemoving', 'imageSelected', 'imageUploadFailed', 'imageUploadSuccess', 'imageUploading', 'quickToolbarClose', 'quickToolbarOpen', 'resizeStart', 'resizeStop', 'resizing', 'toolbarClick', 'toolbarStatusUpdate', 'valueChange'];
const twoWays = ['value'];
/**
 * `ejs-richtexteditor` represents the Angular richtexteditor Component.
 * ```html
 * <ejs-richtexteditor></ejs-richtexteditor>
 * ```
 */
let RichTextEditorComponent = RichTextEditorComponent_1 = class RichTextEditorComponent extends RichTextEditor {
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
        this.skipFromEvent = true;
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('RichTextEditorToolbar');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            let mod = this.injector.get('RichTextEditorLink');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            let mod = this.injector.get('RichTextEditorImage');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        try {
            let mod = this.injector.get('RichTextEditorCount');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_d) { }
        try {
            let mod = this.injector.get('RichTextEditorQuickToolbar');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_e) { }
        try {
            let mod = this.injector.get('RichTextEditorHtmlEditor');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_f) { }
        try {
            let mod = this.injector.get('RichTextEditorMarkdownEditor');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_g) { }
        try {
            let mod = this.injector.get('RichTextEditorTable');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_h) { }
        try {
            let mod = this.injector.get('RichTextEditorPasteCleanup');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_j) { }
        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
    }
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    registerOnChange(registerFunction) {
    }
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    registerOnTouched(registerFunction) {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    setDisabledState(disabled) {
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
RichTextEditorComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-richtexteditor',
                inputs: inputs,
                outputs: outputs,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => RichTextEditorComponent_1),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
RichTextEditorComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
RichTextEditorComponent.propDecorators = {
    'valueTemplate': [{ type: ContentChild, args: ['valueTemplate',] },],
};
__decorate([
    Template(),
    __metadata("design:type", Object)
], RichTextEditorComponent.prototype, "valueTemplate", void 0);
RichTextEditorComponent = RichTextEditorComponent_1 = __decorate([
    ComponentMixins([ComponentBase, FormBase]),
    __metadata("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], RichTextEditorComponent);
var RichTextEditorComponent_1;

/**
 * NgModule definition for the RichTextEditor component.
 */
class RichTextEditorModule {
}
RichTextEditorModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    RichTextEditorComponent
                ],
                exports: [
                    RichTextEditorComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
RichTextEditorModule.ctorParameters = () => [];

const ToolbarService = { provide: 'RichTextEditorToolbar', useValue: Toolbar };
const LinkService = { provide: 'RichTextEditorLink', useValue: Link };
const ImageService = { provide: 'RichTextEditorImage', useValue: Image };
const CountService = { provide: 'RichTextEditorCount', useValue: Count };
const QuickToolbarService = { provide: 'RichTextEditorQuickToolbar', useValue: QuickToolbar };
const HtmlEditorService = { provide: 'RichTextEditorHtmlEditor', useValue: HtmlEditor };
const MarkdownEditorService = { provide: 'RichTextEditorMarkdownEditor', useValue: MarkdownEditor };
const TableService = { provide: 'RichTextEditorTable', useValue: Table };
const PasteCleanupService = { provide: 'RichTextEditorPasteCleanup', useValue: PasteCleanup };
/**
 * NgModule definition for the RichTextEditor component with providers.
 */
class RichTextEditorAllModule {
}
RichTextEditorAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, RichTextEditorModule],
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
RichTextEditorAllModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { RichTextEditorComponent, RichTextEditorModule, RichTextEditorAllModule, ToolbarService, LinkService, ImageService, CountService, QuickToolbarService, HtmlEditorService, MarkdownEditorService, TableService, PasteCleanupService, inputs as ɵa, outputs as ɵb };
export { Toolbar, KeyboardEvents, BaseToolbar, BaseQuickToolbar, QuickToolbar, Count, ColorPickerInput, MarkdownToolbarStatus, ExecCommandCallBack, ToolbarAction, MarkdownEditor, HtmlEditor, PasteCleanup, HTMLFormatter, Formatter, MarkdownFormatter, ContentRender, Render, ToolbarRenderer, Link, Image, ViewSource, Table, RichTextEditor, RenderType, ToolbarType, executeGroup, created, destroyed, load, initialLoad, initialEnd, iframeMouseDown, destroy, toolbarClick, toolbarRefresh, refreshBegin, toolbarUpdated, bindOnEnd, renderColorPicker, htmlToolbarClick, markdownToolbarClick, destroyColorPicker, modelChanged, keyUp, keyDown, mouseUp, toolbarCreated, toolbarRenderComplete, enableFullScreen, disableFullScreen, dropDownSelect, beforeDropDownItemRender, execCommandCallBack, imageToolbarAction, linkToolbarAction, resizeStart, onResize, resizeStop, undo, redo, insertLink, unLink, editLink, openLink, actionBegin, actionComplete, toolbarStatusUpdate, actionSuccess, updateToolbarItem, insertImage, insertCompleted, imageLeft, imageRight, imageCenter, imageBreak, imageInline, imageLink, imageAlt, imageDelete, imageCaption, imageSize, sourceCode, updateSource, toolbarOpen, beforeDropDownOpen, selectionSave, selectionRestore, expandPopupClick, count, contentFocus, contentBlur, mouseDown, sourceCodeMouseDown, editAreaClick, scroll, colorPickerChanged, tableColorPickerChanged, focusChange, selectAll, selectRange, getSelectedHtml, renderInlineToolbar, paste, imgModule, rtlMode, createTable, docClick, tableToolbarAction, checkUndo, readOnlyMode, pasteClean, beforeDialogOpen, dialogOpen, dialogClose, beforeQuickToolbarOpen, quickToolbarOpen, quickToolbarClose, popupHide, imageSelected, imageUploading, imageUploadSuccess, imageUploadFailed, imageRemoving, ServiceLocator, RendererFactory, EditorManager, IMAGE, TABLE, LINK, INSERT_ROW, INSERT_COLUMN, DELETEROW, DELETECOLUMN, REMOVETABLE, TABLEHEADER, TABLE_VERTICAL_ALIGN, ALIGNMENT_TYPE, INDENT_TYPE, DEFAULT_TAG, BLOCK_TAGS, IGNORE_BLOCK_TAGS, TABLE_BLOCK_TAGS, SELECTION_TYPE, INSERTHTML_TYPE, INSERT_TEXT_TYPE, CLEAR_TYPE, Lists, markerClassName, DOMNode, Alignments, Indents, Formats, LinkCommand, InsertMethods, InsertHtml, IsFormatted, NodeCutter, ImageCommand, SelectionCommands, SelectionBasedExec, ClearFormat, ClearFormatExec, UndoRedoManager, TableCommand, statusCollection, ToolbarStatus, NodeSelection, MarkdownParser, LISTS_COMMAND, selectionCommand, LINK_COMMAND, CLEAR_COMMAND, MD_TABLE, MDLists, MDFormats, MarkdownSelection, UndoRedoCommands, MDSelectionFormats, MDLink, markdownFormatTags, markdownSelectionTags, markdownListsTags, htmlKeyConfig, markdownKeyConfig, pasteCleanupGroupingTags, listConversionFilters, selfClosingTags, KEY_DOWN, ACTION, FORMAT_TYPE, KEY_DOWN_HANDLER, LIST_TYPE, KEY_UP_HANDLER, KEY_UP, MODEL_CHANGED_PLUGIN, MODEL_CHANGED, MS_WORD_CLEANUP_PLUGIN, MS_WORD_CLEANUP } from '@syncfusion/ej2-richtexteditor';
//# sourceMappingURL=ej2-angular-richtexteditor.js.map
