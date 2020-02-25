(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@syncfusion/ej2-angular-base'), require('@syncfusion/ej2-filemanager'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@syncfusion/ej2-angular-base', '@syncfusion/ej2-filemanager', '@angular/common'], factory) :
	(factory((global['ej2-angular-filemanager'] = {}),global.ng.core,global.ej2.angular.base,global.ej2.filemanager,global.ng.common));
}(this, (function (exports,core,ej2AngularBase,ej2Filemanager,common) { 'use strict';

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
var inputs = ['ajaxSettings', 'allowDragAndDrop', 'allowMultiSelection', 'contextMenuSettings', 'cssClass', 'detailsViewSettings', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'height', 'locale', 'navigationPaneSettings', 'path', 'rootAliasName', 'searchSettings', 'selectedItems', 'showFileExtension', 'showHiddenItems', 'showThumbnail', 'toolbarSettings', 'uploadSettings', 'view', 'width'];
var outputs = ['beforeDownload', 'beforeImageLoad', 'beforePopupClose', 'beforePopupOpen', 'beforeSend', 'created', 'destroyed', 'failure', 'fileDragStart', 'fileDragStop', 'fileDragging', 'fileDropped', 'fileLoad', 'fileOpen', 'fileSelect', 'fileSelection', 'menuClick', 'menuOpen', 'popupClose', 'popupOpen', 'success', 'toolbarClick', 'toolbarCreate', 'uploadListCreate'];
var twoWays = [''];
/**
 * Represents the Essential JS 2 Angular FileManager Component.
 * ```html
 * <ejs-filemanager showThumbnail='false'></ejs-filemanager>
 * ```
 */
exports.FileManagerComponent = /** @class */ (function (_super) {
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.context = new ej2AngularBase.ComponentBase();
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
}(ej2Filemanager.FileManager));
exports.FileManagerComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-filemanager',
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
exports.FileManagerComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.FileManagerComponent = __decorate([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase]),
    __metadata("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.FileManagerComponent);
/**
 * NgModule definition for the FileManager component.
 */
var FileManagerModule = /** @class */ (function () {
    function FileManagerModule() {
    }
    return FileManagerModule;
}());
FileManagerModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.FileManagerComponent
                ],
                exports: [
                    exports.FileManagerComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
FileManagerModule.ctorParameters = function () { return []; };
var DetailsViewService = { provide: 'FileManagerDetailsView', useValue: ej2Filemanager.DetailsView };
var NavigationPaneService = { provide: 'FileManagerNavigationPane', useValue: ej2Filemanager.NavigationPane };
var LargeIconsViewService = { provide: 'FileManagerLargeIconsView', useValue: ej2Filemanager.LargeIconsView };
var ToolbarService = { provide: 'FileManagerToolbar', useValue: ej2Filemanager.Toolbar };
var ContextMenuService = { provide: 'FileManagerContextMenu', useValue: ej2Filemanager.ContextMenu };
var BreadCrumbBarService = { provide: 'FileManagerBreadCrumbBar', useValue: ej2Filemanager.BreadCrumbBar };
/**
 * NgModule definition for the FileManager component with providers.
 */
var FileManagerAllModule = /** @class */ (function () {
    function FileManagerAllModule() {
    }
    return FileManagerAllModule;
}());
FileManagerAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, FileManagerModule],
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

exports.FileManagerModule = FileManagerModule;
exports.FileManagerAllModule = FileManagerAllModule;
exports.DetailsViewService = DetailsViewService;
exports.NavigationPaneService = NavigationPaneService;
exports.LargeIconsViewService = LargeIconsViewService;
exports.ToolbarService = ToolbarService;
exports.ContextMenuService = ContextMenuService;
exports.BreadCrumbBarService = BreadCrumbBarService;
exports.ɵa = inputs;
exports.ɵb = outputs;
exports.AjaxSettings = ej2Filemanager.AjaxSettings;
exports.toolbarItems = ej2Filemanager.toolbarItems;
exports.ToolbarSettings = ej2Filemanager.ToolbarSettings;
exports.SearchSettings = ej2Filemanager.SearchSettings;
exports.columnArray = ej2Filemanager.columnArray;
exports.DetailsViewSettings = ej2Filemanager.DetailsViewSettings;
exports.fileItems = ej2Filemanager.fileItems;
exports.folderItems = ej2Filemanager.folderItems;
exports.layoutItems = ej2Filemanager.layoutItems;
exports.ContextMenuSettings = ej2Filemanager.ContextMenuSettings;
exports.NavigationPaneSettings = ej2Filemanager.NavigationPaneSettings;
exports.UploadSettings = ej2Filemanager.UploadSettings;
exports.Column = ej2Filemanager.Column;
exports.TOOLBAR_ID = ej2Filemanager.TOOLBAR_ID;
exports.LAYOUT_ID = ej2Filemanager.LAYOUT_ID;
exports.NAVIGATION_ID = ej2Filemanager.NAVIGATION_ID;
exports.TREE_ID = ej2Filemanager.TREE_ID;
exports.GRID_ID = ej2Filemanager.GRID_ID;
exports.LARGEICON_ID = ej2Filemanager.LARGEICON_ID;
exports.DIALOG_ID = ej2Filemanager.DIALOG_ID;
exports.ALT_DIALOG_ID = ej2Filemanager.ALT_DIALOG_ID;
exports.IMG_DIALOG_ID = ej2Filemanager.IMG_DIALOG_ID;
exports.EXTN_DIALOG_ID = ej2Filemanager.EXTN_DIALOG_ID;
exports.UPLOAD_DIALOG_ID = ej2Filemanager.UPLOAD_DIALOG_ID;
exports.RETRY_DIALOG_ID = ej2Filemanager.RETRY_DIALOG_ID;
exports.CONTEXT_MENU_ID = ej2Filemanager.CONTEXT_MENU_ID;
exports.SORTBY_ID = ej2Filemanager.SORTBY_ID;
exports.VIEW_ID = ej2Filemanager.VIEW_ID;
exports.SPLITTER_ID = ej2Filemanager.SPLITTER_ID;
exports.CONTENT_ID = ej2Filemanager.CONTENT_ID;
exports.BREADCRUMBBAR_ID = ej2Filemanager.BREADCRUMBBAR_ID;
exports.UPLOAD_ID = ej2Filemanager.UPLOAD_ID;
exports.RETRY_ID = ej2Filemanager.RETRY_ID;
exports.SEARCH_ID = ej2Filemanager.SEARCH_ID;
exports.ROOT = ej2Filemanager.ROOT;
exports.CONTROL = ej2Filemanager.CONTROL;
exports.CHECK_SELECT = ej2Filemanager.CHECK_SELECT;
exports.ROOT_POPUP = ej2Filemanager.ROOT_POPUP;
exports.MOBILE = ej2Filemanager.MOBILE;
exports.MULTI_SELECT = ej2Filemanager.MULTI_SELECT;
exports.FILTER = ej2Filemanager.FILTER;
exports.LAYOUT = ej2Filemanager.LAYOUT;
exports.NAVIGATION = ej2Filemanager.NAVIGATION;
exports.LAYOUT_CONTENT = ej2Filemanager.LAYOUT_CONTENT;
exports.LARGE_ICONS = ej2Filemanager.LARGE_ICONS;
exports.TB_ITEM = ej2Filemanager.TB_ITEM;
exports.LIST_ITEM = ej2Filemanager.LIST_ITEM;
exports.LIST_TEXT = ej2Filemanager.LIST_TEXT;
exports.LIST_PARENT = ej2Filemanager.LIST_PARENT;
exports.TB_OPTION_TICK = ej2Filemanager.TB_OPTION_TICK;
exports.TB_OPTION_DOT = ej2Filemanager.TB_OPTION_DOT;
exports.BLUR = ej2Filemanager.BLUR;
exports.ACTIVE = ej2Filemanager.ACTIVE;
exports.HOVER = ej2Filemanager.HOVER;
exports.FOCUS = ej2Filemanager.FOCUS;
exports.FOCUSED = ej2Filemanager.FOCUSED;
exports.CHECK = ej2Filemanager.CHECK;
exports.FRAME = ej2Filemanager.FRAME;
exports.CB_WRAP = ej2Filemanager.CB_WRAP;
exports.ROW = ej2Filemanager.ROW;
exports.ROWCELL = ej2Filemanager.ROWCELL;
exports.EMPTY = ej2Filemanager.EMPTY;
exports.EMPTY_CONTENT = ej2Filemanager.EMPTY_CONTENT;
exports.EMPTY_INNER_CONTENT = ej2Filemanager.EMPTY_INNER_CONTENT;
exports.CLONE = ej2Filemanager.CLONE;
exports.DROP_FOLDER = ej2Filemanager.DROP_FOLDER;
exports.DROP_FILE = ej2Filemanager.DROP_FILE;
exports.FOLDER = ej2Filemanager.FOLDER;
exports.ICON_IMAGE = ej2Filemanager.ICON_IMAGE;
exports.ICON_MUSIC = ej2Filemanager.ICON_MUSIC;
exports.ICON_VIDEO = ej2Filemanager.ICON_VIDEO;
exports.LARGE_ICON = ej2Filemanager.LARGE_ICON;
exports.LARGE_EMPTY_FOLDER = ej2Filemanager.LARGE_EMPTY_FOLDER;
exports.LARGE_EMPTY_FOLDER_TWO = ej2Filemanager.LARGE_EMPTY_FOLDER_TWO;
exports.LARGE_ICON_FOLDER = ej2Filemanager.LARGE_ICON_FOLDER;
exports.SELECTED_ITEMS = ej2Filemanager.SELECTED_ITEMS;
exports.TEXT_CONTENT = ej2Filemanager.TEXT_CONTENT;
exports.GRID_HEADER = ej2Filemanager.GRID_HEADER;
exports.TEMPLATE_CELL = ej2Filemanager.TEMPLATE_CELL;
exports.TREE_VIEW = ej2Filemanager.TREE_VIEW;
exports.MENU_ITEM = ej2Filemanager.MENU_ITEM;
exports.MENU_ICON = ej2Filemanager.MENU_ICON;
exports.SUBMENU_ICON = ej2Filemanager.SUBMENU_ICON;
exports.GRID_VIEW = ej2Filemanager.GRID_VIEW;
exports.ICON_VIEW = ej2Filemanager.ICON_VIEW;
exports.ICON_OPEN = ej2Filemanager.ICON_OPEN;
exports.ICON_UPLOAD = ej2Filemanager.ICON_UPLOAD;
exports.ICON_CUT = ej2Filemanager.ICON_CUT;
exports.ICON_COPY = ej2Filemanager.ICON_COPY;
exports.ICON_PASTE = ej2Filemanager.ICON_PASTE;
exports.ICON_DELETE = ej2Filemanager.ICON_DELETE;
exports.ICON_RENAME = ej2Filemanager.ICON_RENAME;
exports.ICON_NEWFOLDER = ej2Filemanager.ICON_NEWFOLDER;
exports.ICON_DETAILS = ej2Filemanager.ICON_DETAILS;
exports.ICON_SHORTBY = ej2Filemanager.ICON_SHORTBY;
exports.ICON_REFRESH = ej2Filemanager.ICON_REFRESH;
exports.ICON_SELECTALL = ej2Filemanager.ICON_SELECTALL;
exports.ICON_DOWNLOAD = ej2Filemanager.ICON_DOWNLOAD;
exports.ICON_OPTIONS = ej2Filemanager.ICON_OPTIONS;
exports.ICON_GRID = ej2Filemanager.ICON_GRID;
exports.ICON_LARGE = ej2Filemanager.ICON_LARGE;
exports.ICON_BREADCRUMB = ej2Filemanager.ICON_BREADCRUMB;
exports.ICON_CLEAR = ej2Filemanager.ICON_CLEAR;
exports.ICON_DROP_IN = ej2Filemanager.ICON_DROP_IN;
exports.ICON_DROP_OUT = ej2Filemanager.ICON_DROP_OUT;
exports.ICON_NO_DROP = ej2Filemanager.ICON_NO_DROP;
exports.ICONS = ej2Filemanager.ICONS;
exports.DETAILS_LABEL = ej2Filemanager.DETAILS_LABEL;
exports.ERROR_CONTENT = ej2Filemanager.ERROR_CONTENT;
exports.STATUS = ej2Filemanager.STATUS;
exports.BREADCRUMBS = ej2Filemanager.BREADCRUMBS;
exports.RTL = ej2Filemanager.RTL;
exports.DISPLAY_NONE = ej2Filemanager.DISPLAY_NONE;
exports.COLLAPSED = ej2Filemanager.COLLAPSED;
exports.FULLROW = ej2Filemanager.FULLROW;
exports.ICON_COLLAPSIBLE = ej2Filemanager.ICON_COLLAPSIBLE;
exports.SPLIT_BAR = ej2Filemanager.SPLIT_BAR;
exports.HEADER_CHECK = ej2Filemanager.HEADER_CHECK;
exports.OVERLAY = ej2Filemanager.OVERLAY;
exports.VALUE = ej2Filemanager.VALUE;
exports.isFile = ej2Filemanager.isFile;
exports.modelChanged = ej2Filemanager.modelChanged;
exports.initialEnd = ej2Filemanager.initialEnd;
exports.finalizeEnd = ej2Filemanager.finalizeEnd;
exports.createEnd = ej2Filemanager.createEnd;
exports.filterEnd = ej2Filemanager.filterEnd;
exports.beforeDelete = ej2Filemanager.beforeDelete;
exports.pathDrag = ej2Filemanager.pathDrag;
exports.deleteInit = ej2Filemanager.deleteInit;
exports.deleteEnd = ej2Filemanager.deleteEnd;
exports.refreshEnd = ej2Filemanager.refreshEnd;
exports.resizeEnd = ej2Filemanager.resizeEnd;
exports.splitterResize = ej2Filemanager.splitterResize;
exports.pathChanged = ej2Filemanager.pathChanged;
exports.destroy = ej2Filemanager.destroy;
exports.beforeRequest = ej2Filemanager.beforeRequest;
exports.upload = ej2Filemanager.upload;
exports.skipUpload = ej2Filemanager.skipUpload;
exports.afterRequest = ej2Filemanager.afterRequest;
exports.download = ej2Filemanager.download;
exports.layoutRefresh = ej2Filemanager.layoutRefresh;
exports.actionFailure = ej2Filemanager.actionFailure;
exports.search = ej2Filemanager.search;
exports.openInit = ej2Filemanager.openInit;
exports.openEnd = ej2Filemanager.openEnd;
exports.selectionChanged = ej2Filemanager.selectionChanged;
exports.selectAllInit = ej2Filemanager.selectAllInit;
exports.clearAllInit = ej2Filemanager.clearAllInit;
exports.clearPathInit = ej2Filemanager.clearPathInit;
exports.layoutChange = ej2Filemanager.layoutChange;
exports.sortByChange = ej2Filemanager.sortByChange;
exports.nodeExpand = ej2Filemanager.nodeExpand;
exports.detailsInit = ej2Filemanager.detailsInit;
exports.menuItemData = ej2Filemanager.menuItemData;
exports.renameInit = ej2Filemanager.renameInit;
exports.renameEndParent = ej2Filemanager.renameEndParent;
exports.renameEnd = ej2Filemanager.renameEnd;
exports.showPaste = ej2Filemanager.showPaste;
exports.hidePaste = ej2Filemanager.hidePaste;
exports.selectedData = ej2Filemanager.selectedData;
exports.cutCopyInit = ej2Filemanager.cutCopyInit;
exports.pasteInit = ej2Filemanager.pasteInit;
exports.pasteEnd = ej2Filemanager.pasteEnd;
exports.cutEnd = ej2Filemanager.cutEnd;
exports.hideLayout = ej2Filemanager.hideLayout;
exports.updateTreeSelection = ej2Filemanager.updateTreeSelection;
exports.treeSelect = ej2Filemanager.treeSelect;
exports.sortColumn = ej2Filemanager.sortColumn;
exports.pathColumn = ej2Filemanager.pathColumn;
exports.searchTextChange = ej2Filemanager.searchTextChange;
exports.beforeDownload = ej2Filemanager.beforeDownload;
exports.downloadInit = ej2Filemanager.downloadInit;
exports.dropInit = ej2Filemanager.dropInit;
exports.dragEnd = ej2Filemanager.dragEnd;
exports.dropPath = ej2Filemanager.dropPath;
exports.dragHelper = ej2Filemanager.dragHelper;
exports.dragging = ej2Filemanager.dragging;
exports.updateSelectionData = ej2Filemanager.updateSelectionData;
exports.methodCall = ej2Filemanager.methodCall;
exports.permissionRead = ej2Filemanager.permissionRead;
exports.permissionEdit = ej2Filemanager.permissionEdit;
exports.permissionEditContents = ej2Filemanager.permissionEditContents;
exports.permissionCopy = ej2Filemanager.permissionCopy;
exports.permissionUpload = ej2Filemanager.permissionUpload;
exports.permissionDownload = ej2Filemanager.permissionDownload;
exports.FileManager = ej2Filemanager.FileManager;
exports.Toolbar = ej2Filemanager.Toolbar;
exports.BreadCrumbBar = ej2Filemanager.BreadCrumbBar;
exports.NavigationPane = ej2Filemanager.NavigationPane;
exports.DetailsView = ej2Filemanager.DetailsView;
exports.LargeIconsView = ej2Filemanager.LargeIconsView;
exports.createDialog = ej2Filemanager.createDialog;
exports.createExtDialog = ej2Filemanager.createExtDialog;
exports.createImageDialog = ej2Filemanager.createImageDialog;
exports.ContextMenu = ej2Filemanager.ContextMenu;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ej2-angular-filemanager.umd.js.map
