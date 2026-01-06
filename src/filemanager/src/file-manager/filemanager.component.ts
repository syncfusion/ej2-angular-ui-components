import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, QueryList, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { FileManager } from '@syncfusion/ej2-filemanager';
import { Template } from '@syncfusion/ej2-angular-base';
import { ToolbarItemsDirective } from './toolbaritems.directive';

export const inputs: string[] = ['ajaxSettings','allowDragAndDrop','allowMultiSelection','contextMenuSettings','cssClass','detailsViewSettings','enableHtmlSanitizer','enablePersistence','enableRangeSelection','enableRtl','enableVirtualization','fileSystemData','height','largeIconsTemplate','locale','navigationPaneSettings','navigationPaneTemplate','path','popupTarget','rootAliasName','searchSettings','selectedItems','showFileExtension','showHiddenItems','showItemCheckBoxes','showThumbnail','sortBy','sortComparer','sortOrder','toolbarItems','toolbarSettings','uploadSettings','view','width'];
export const outputs: string[] = ['beforeDelete','beforeDownload','beforeFolderCreate','beforeImageLoad','beforeMove','beforePopupClose','beforePopupOpen','beforeRename','beforeSend','created','delete','destroyed','failure','fileDragStart','fileDragStop','fileDragging','fileDropped','fileLoad','fileOpen','fileSelect','fileSelection','folderCreate','menuClick','menuClose','menuOpen','move','popupClose','popupOpen','rename','search','success','toolbarClick','toolbarCreate','uploadListCreate'];
export const twoWays: string[] = [''];

/**
  * Represents the Essential JS 2 Angular FileManager Component.
 * ```html
 * <ejs-filemanager showThumbnail='false'></ejs-filemanager>
 * ```
 */
@Component({
    selector: 'ejs-filemanager',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childToolbarItems: new ContentChild(ToolbarItemsDirective)
    }
})
@ComponentMixins([ComponentBase])
export class FileManagerComponent extends FileManager implements IComponentBase {
    public context : any;
    public tagObjects: any;
	beforeDelete: any;
	beforeDownload: any;
	beforeFolderCreate: any;
	beforeImageLoad: any;
	beforeMove: any;
	beforePopupClose: any;
	beforePopupOpen: any;
	beforeRename: any;
	beforeSend: any;
	created: any;
	delete: any;
	destroyed: any;
	failure: any;
	fileDragStart: any;
	fileDragStop: any;
	fileDragging: any;
	fileDropped: any;
	fileLoad: any;
	fileOpen: any;
	fileSelect: any;
	fileSelection: any;
	folderCreate: any;
	menuClick: any;
	menuClose: any;
	menuOpen: any;
	move: any;
	popupClose: any;
	popupOpen: any;
	rename: any;
	search: any;
	success: any;
	toolbarClick: any;
	toolbarCreate: any;
	public uploadListCreate: any;
    public childToolbarItems: QueryList<ToolbarItemsDirective>;
    public tags: string[] = ['toolbarItems'];
    /** 
     * Specifies a template to render customized content for all the files or folders in the large icons view. If the `largeIconsTemplate` property 
     * is set, the template content overrides the displayed files or folders text in the File Manager large icons view. The property accepts template string 
     * or HTML element ID holding the content.
     * @default null
     * @angulartype string | object
     * @reacttype string | function | JSX.Element
     * @vuetype string | function
     * @asptype string
     */
    @ContentChild('largeIconsTemplate')
    @Template()
    public largeIconsTemplate: any;
    /** 
     * Specifies a template to render customized content for all the nodes. If the `navigationPaneTemplate` property 
     * is set, the template content overrides the displayed node text in the File Manager navigation pane. 
     * The property accepts a template string or HTML element ID holding the content.
     * @default null
     * @angulartype string | object
     * @reacttype string | function | JSX.Element
     * @vuetype string | function
     * @asptype string
     */
    @ContentChild('navigationPaneTemplate')
    @Template()
    public navigationPaneTemplate: any;

    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
                let mod = this.injector.get('FileManagerDetailsView');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('FileManagerNavigationPane');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('FileManagerLargeIconsView');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('FileManagerToolbar');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('FileManagerContextMenu');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('FileManagerBreadCrumbBar');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('FileManagerVirtualization');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
        this.context  = new ComponentBase();
    }

    public ngOnInit() {
        this.context.ngOnInit(this);
    }

    public ngAfterViewInit(): void {
        this.context.ngAfterViewInit(this);
    }

    public ngOnDestroy(): void {
        this.context.ngOnDestroy(this);
    }

    public ngAfterContentChecked(): void {
        this.tagObjects[0].instance = this.childToolbarItems;
        this.context.ngAfterContentChecked(this);
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

