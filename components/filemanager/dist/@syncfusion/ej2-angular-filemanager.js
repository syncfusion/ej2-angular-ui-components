import { ChangeDetectionStrategy, Component, ElementRef, Injector, NgModule, Renderer2, ViewContainerRef } from '@angular/core';
import { ComponentBase, ComponentMixins, setValue } from '@syncfusion/ej2-angular-base';
import { BreadCrumbBar, ContextMenu, DetailsView, FileManager, LargeIconsView, NavigationPane, Toolbar } from '@syncfusion/ej2-filemanager';
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
const inputs = ['ajaxSettings', 'allowDragAndDrop', 'allowMultiSelection', 'contextMenuSettings', 'cssClass', 'detailsViewSettings', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'height', 'locale', 'navigationPaneSettings', 'path', 'popupTarget', 'rootAliasName', 'searchSettings', 'selectedItems', 'showFileExtension', 'showHiddenItems', 'showThumbnail', 'sortOrder', 'toolbarSettings', 'uploadSettings', 'view', 'width'];
const outputs = ['beforeDownload', 'beforeImageLoad', 'beforePopupClose', 'beforePopupOpen', 'beforeSend', 'created', 'destroyed', 'failure', 'fileDragStart', 'fileDragStop', 'fileDragging', 'fileDropped', 'fileLoad', 'fileOpen', 'fileSelect', 'fileSelection', 'menuClick', 'menuOpen', 'popupClose', 'popupOpen', 'success', 'toolbarClick', 'toolbarCreate', 'uploadListCreate'];
const twoWays = [''];
/**
 * Represents the Essential JS 2 Angular FileManager Component.
 * ```html
 * <ejs-filemanager showThumbnail='false'></ejs-filemanager>
 * ```
 */
let FileManagerComponent = class FileManagerComponent extends FileManager {
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
            let mod = this.injector.get('FileManagerDetailsView');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            let mod = this.injector.get('FileManagerNavigationPane');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            let mod = this.injector.get('FileManagerLargeIconsView');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        try {
            let mod = this.injector.get('FileManagerToolbar');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_d) { }
        try {
            let mod = this.injector.get('FileManagerContextMenu');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_e) { }
        try {
            let mod = this.injector.get('FileManagerBreadCrumbBar');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_f) { }
        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
        this.context = new ComponentBase();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.context.ngOnInit(this);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.context.ngAfterViewInit(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.context.ngOnDestroy(this);
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        this.context.ngAfterContentChecked(this);
    }
};
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
FileManagerComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
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
class FileManagerModule {
}
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
FileManagerModule.ctorParameters = () => [];

const DetailsViewService = { provide: 'FileManagerDetailsView', useValue: DetailsView };
const NavigationPaneService = { provide: 'FileManagerNavigationPane', useValue: NavigationPane };
const LargeIconsViewService = { provide: 'FileManagerLargeIconsView', useValue: LargeIconsView };
const ToolbarService = { provide: 'FileManagerToolbar', useValue: Toolbar };
const ContextMenuService = { provide: 'FileManagerContextMenu', useValue: ContextMenu };
const BreadCrumbBarService = { provide: 'FileManagerBreadCrumbBar', useValue: BreadCrumbBar };
/**
 * NgModule definition for the FileManager component with providers.
 */
class FileManagerAllModule {
}
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
FileManagerAllModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { FileManagerComponent, FileManagerModule, FileManagerAllModule, DetailsViewService, NavigationPaneService, LargeIconsViewService, ToolbarService, ContextMenuService, BreadCrumbBarService, inputs as ɵa, outputs as ɵb };
export { AjaxSettings, toolbarItems, ToolbarSettings, SearchSettings, columnArray, DetailsViewSettings, fileItems, folderItems, layoutItems, ContextMenuSettings, NavigationPaneSettings, UploadSettings, Column, TOOLBAR_ID, LAYOUT_ID, NAVIGATION_ID, TREE_ID, GRID_ID, LARGEICON_ID, DIALOG_ID, ALT_DIALOG_ID, IMG_DIALOG_ID, EXTN_DIALOG_ID, UPLOAD_DIALOG_ID, RETRY_DIALOG_ID, CONTEXT_MENU_ID, SORTBY_ID, VIEW_ID, SPLITTER_ID, CONTENT_ID, BREADCRUMBBAR_ID, UPLOAD_ID, RETRY_ID, SEARCH_ID, ROOT, CONTROL, CHECK_SELECT, ROOT_POPUP, MOBILE, MOB_POPUP, MULTI_SELECT, FILTER, LAYOUT, NAVIGATION, LAYOUT_CONTENT, LARGE_ICONS, TB_ITEM, LIST_ITEM, LIST_TEXT, LIST_PARENT, TB_OPTION_TICK, TB_OPTION_DOT, BLUR, ACTIVE, HOVER, FOCUS, FOCUSED, CHECK, FRAME, CB_WRAP, ROW, ROWCELL, EMPTY, EMPTY_CONTENT, EMPTY_INNER_CONTENT, CLONE, DROP_FOLDER, DROP_FILE, FOLDER, ICON_IMAGE, ICON_MUSIC, ICON_VIDEO, LARGE_ICON, LARGE_EMPTY_FOLDER, LARGE_EMPTY_FOLDER_TWO, LARGE_ICON_FOLDER, SELECTED_ITEMS, TEXT_CONTENT, GRID_HEADER, TEMPLATE_CELL, TREE_VIEW, MENU_ITEM, MENU_ICON, SUBMENU_ICON, GRID_VIEW, ICON_VIEW, ICON_OPEN, ICON_UPLOAD, ICON_CUT, ICON_COPY, ICON_PASTE, ICON_DELETE, ICON_RENAME, ICON_NEWFOLDER, ICON_DETAILS, ICON_SHORTBY, ICON_REFRESH, ICON_SELECTALL, ICON_DOWNLOAD, ICON_OPTIONS, ICON_GRID, ICON_LARGE, ICON_BREADCRUMB, ICON_CLEAR, ICON_DROP_IN, ICON_DROP_OUT, ICON_NO_DROP, ICONS, DETAILS_LABEL, ERROR_CONTENT, STATUS, BREADCRUMBS, RTL, DISPLAY_NONE, COLLAPSED, FULLROW, ICON_COLLAPSIBLE, SPLIT_BAR, HEADER_CHECK, OVERLAY, VALUE, isFile, modelChanged, initialEnd, finalizeEnd, createEnd, filterEnd, beforeDelete, pathDrag, deleteInit, deleteEnd, refreshEnd, resizeEnd, splitterResize, pathChanged, destroy, beforeRequest, upload, skipUpload, afterRequest, download, layoutRefresh, actionFailure, search, openInit, openEnd, selectionChanged, selectAllInit, clearAllInit, clearPathInit, layoutChange, sortByChange, nodeExpand, detailsInit, menuItemData, renameInit, renameEndParent, renameEnd, showPaste, hidePaste, selectedData, cutCopyInit, pasteInit, pasteEnd, cutEnd, hideLayout, updateTreeSelection, treeSelect, sortColumn, pathColumn, searchTextChange, beforeDownload, downloadInit, dropInit, dragEnd, dropPath, dragHelper, dragging, updateSelectionData, methodCall, permissionRead, permissionEdit, permissionEditContents, permissionCopy, permissionUpload, permissionDownload, FileManager, Toolbar, BreadCrumbBar, NavigationPane, DetailsView, LargeIconsView, createDialog, createExtDialog, createImageDialog, ContextMenu } from '@syncfusion/ej2-filemanager';
//# sourceMappingURL=ej2-angular-filemanager.js.map
