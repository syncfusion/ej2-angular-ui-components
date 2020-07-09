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
import { ChangeDetectionStrategy, Component, ElementRef, Injector, NgModule, Renderer2, ViewContainerRef } from '@angular/core';
import { ComponentBase, ComponentMixins, setValue } from '@syncfusion/ej2-angular-base';
import { BreadCrumbBar, ContextMenu, DetailsView, FileManager, LargeIconsView, NavigationPane, Toolbar } from '@syncfusion/ej2-filemanager';
import { CommonModule } from '@angular/common';
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
var inputs = ['ajaxSettings', 'allowDragAndDrop', 'allowMultiSelection', 'contextMenuSettings', 'cssClass', 'detailsViewSettings', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'height', 'locale', 'navigationPaneSettings', 'path', 'popupTarget', 'rootAliasName', 'searchSettings', 'selectedItems', 'showFileExtension', 'showHiddenItems', 'showThumbnail', 'sortOrder', 'toolbarSettings', 'uploadSettings', 'view', 'width'];
var outputs = ['beforeDownload', 'beforeImageLoad', 'beforePopupClose', 'beforePopupOpen', 'beforeSend', 'created', 'destroyed', 'failure', 'fileDragStart', 'fileDragStop', 'fileDragging', 'fileDropped', 'fileLoad', 'fileOpen', 'fileSelect', 'fileSelection', 'menuClick', 'menuOpen', 'popupClose', 'popupOpen', 'success', 'toolbarClick', 'toolbarCreate', 'uploadListCreate'];
var twoWays = [''];
/**
 * Represents the Essential JS 2 Angular FileManager Component.
 * ```html
 * <ejs-filemanager showThumbnail='false'></ejs-filemanager>
 * ```
 */
var FileManagerComponent = /** @class */ (function (_super) {
    __extends(FileManagerComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function FileManagerComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        try {
            var mod = _this.injector.get('FileManagerDetailsView');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            var mod = _this.injector.get('FileManagerNavigationPane');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            var mod = _this.injector.get('FileManagerLargeIconsView');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        try {
            var mod = _this.injector.get('FileManagerToolbar');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_d) { }
        try {
            var mod = _this.injector.get('FileManagerContextMenu');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_e) { }
        try {
            var mod = _this.injector.get('FileManagerBreadCrumbBar');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_f) { }
        _this.registerEvents(outputs);
        _this.addTwoWay.call(_this, twoWays);
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.context = new ComponentBase();
        return _this;
    }
    /**
     * @return {?}
     */
    FileManagerComponent.prototype.ngOnInit = function () {
        this.context.ngOnInit(this);
    };
    /**
     * @return {?}
     */
    FileManagerComponent.prototype.ngAfterViewInit = function () {
        this.context.ngAfterViewInit(this);
    };
    /**
     * @return {?}
     */
    FileManagerComponent.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy(this);
    };
    /**
     * @return {?}
     */
    FileManagerComponent.prototype.ngAfterContentChecked = function () {
        this.context.ngAfterContentChecked(this);
    };
    return FileManagerComponent;
}(FileManager));
FileManagerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-filemanager',
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
FileManagerComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
FileManagerComponent = __decorate([
    ComponentMixins([ComponentBase]),
    __metadata("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], FileManagerComponent);
/**
 * NgModule definition for the FileManager component.
 */
var FileManagerModule = /** @class */ (function () {
    function FileManagerModule() {
    }
    return FileManagerModule;
}());
FileManagerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    FileManagerComponent
                ],
                exports: [
                    FileManagerComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
FileManagerModule.ctorParameters = function () { return []; };
var DetailsViewService = { provide: 'FileManagerDetailsView', useValue: DetailsView };
var NavigationPaneService = { provide: 'FileManagerNavigationPane', useValue: NavigationPane };
var LargeIconsViewService = { provide: 'FileManagerLargeIconsView', useValue: LargeIconsView };
var ToolbarService = { provide: 'FileManagerToolbar', useValue: Toolbar };
var ContextMenuService = { provide: 'FileManagerContextMenu', useValue: ContextMenu };
var BreadCrumbBarService = { provide: 'FileManagerBreadCrumbBar', useValue: BreadCrumbBar };
/**
 * NgModule definition for the FileManager component with providers.
 */
var FileManagerAllModule = /** @class */ (function () {
    function FileManagerAllModule() {
    }
    return FileManagerAllModule;
}());
FileManagerAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FileManagerModule],
                exports: [
                    FileManagerModule
                ],
                providers: [
                    DetailsViewService,
                    NavigationPaneService,
                    LargeIconsViewService,
                    ToolbarService,
                    ContextMenuService,
                    BreadCrumbBarService
                ]
            },] },
];
/**
 * @nocollapse
 */
FileManagerAllModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { FileManagerComponent, FileManagerModule, FileManagerAllModule, DetailsViewService, NavigationPaneService, LargeIconsViewService, ToolbarService, ContextMenuService, BreadCrumbBarService, inputs as ɵa, outputs as ɵb };
export { AjaxSettings, toolbarItems, ToolbarSettings, SearchSettings, columnArray, DetailsViewSettings, fileItems, folderItems, layoutItems, ContextMenuSettings, NavigationPaneSettings, UploadSettings, Column, TOOLBAR_ID, LAYOUT_ID, NAVIGATION_ID, TREE_ID, GRID_ID, LARGEICON_ID, DIALOG_ID, ALT_DIALOG_ID, IMG_DIALOG_ID, EXTN_DIALOG_ID, UPLOAD_DIALOG_ID, RETRY_DIALOG_ID, CONTEXT_MENU_ID, SORTBY_ID, VIEW_ID, SPLITTER_ID, CONTENT_ID, BREADCRUMBBAR_ID, UPLOAD_ID, RETRY_ID, SEARCH_ID, ROOT, CONTROL, CHECK_SELECT, ROOT_POPUP, MOBILE, MOB_POPUP, MULTI_SELECT, FILTER, LAYOUT, NAVIGATION, LAYOUT_CONTENT, LARGE_ICONS, TB_ITEM, LIST_ITEM, LIST_TEXT, LIST_PARENT, TB_OPTION_TICK, TB_OPTION_DOT, BLUR, ACTIVE, HOVER, FOCUS, FOCUSED, CHECK, FRAME, CB_WRAP, ROW, ROWCELL, EMPTY, EMPTY_CONTENT, EMPTY_INNER_CONTENT, CLONE, DROP_FOLDER, DROP_FILE, FOLDER, ICON_IMAGE, ICON_MUSIC, ICON_VIDEO, LARGE_ICON, LARGE_EMPTY_FOLDER, LARGE_EMPTY_FOLDER_TWO, LARGE_ICON_FOLDER, SELECTED_ITEMS, TEXT_CONTENT, GRID_HEADER, TEMPLATE_CELL, TREE_VIEW, MENU_ITEM, MENU_ICON, SUBMENU_ICON, GRID_VIEW, ICON_VIEW, ICON_OPEN, ICON_UPLOAD, ICON_CUT, ICON_COPY, ICON_PASTE, ICON_DELETE, ICON_RENAME, ICON_NEWFOLDER, ICON_DETAILS, ICON_SHORTBY, ICON_REFRESH, ICON_SELECTALL, ICON_DOWNLOAD, ICON_OPTIONS, ICON_GRID, ICON_LARGE, ICON_BREADCRUMB, ICON_CLEAR, ICON_DROP_IN, ICON_DROP_OUT, ICON_NO_DROP, ICONS, DETAILS_LABEL, ERROR_CONTENT, STATUS, BREADCRUMBS, RTL, DISPLAY_NONE, COLLAPSED, FULLROW, ICON_COLLAPSIBLE, SPLIT_BAR, HEADER_CHECK, OVERLAY, VALUE, isFile, modelChanged, initialEnd, finalizeEnd, createEnd, filterEnd, beforeDelete, pathDrag, deleteInit, deleteEnd, refreshEnd, resizeEnd, splitterResize, pathChanged, destroy, beforeRequest, upload, skipUpload, afterRequest, download, layoutRefresh, actionFailure, search, openInit, openEnd, selectionChanged, selectAllInit, clearAllInit, clearPathInit, layoutChange, sortByChange, nodeExpand, detailsInit, menuItemData, renameInit, renameEndParent, renameEnd, showPaste, hidePaste, selectedData, cutCopyInit, pasteInit, pasteEnd, cutEnd, hideLayout, updateTreeSelection, treeSelect, sortColumn, pathColumn, searchTextChange, beforeDownload, downloadInit, dropInit, dragEnd, dropPath, dragHelper, dragging, updateSelectionData, methodCall, permissionRead, permissionEdit, permissionEditContents, permissionCopy, permissionUpload, permissionDownload, FileManager, Toolbar, BreadCrumbBar, NavigationPane, DetailsView, LargeIconsView, createDialog, createExtDialog, createImageDialog, ContextMenu } from '@syncfusion/ej2-filemanager';
//# sourceMappingURL=ej2-angular-filemanager.es5.js.map
