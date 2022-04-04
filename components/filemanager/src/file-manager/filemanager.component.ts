import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, QueryList, Renderer2, Injector, ValueProvider } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { FileManager } from '@syncfusion/ej2-filemanager';



export const inputs: string[] = ['ajaxSettings','allowDragAndDrop','allowMultiSelection','contextMenuSettings','cssClass','detailsViewSettings','enableHtmlSanitizer','enablePersistence','enableRtl','height','locale','navigationPaneSettings','path','popupTarget','rootAliasName','searchSettings','selectedItems','showFileExtension','showHiddenItems','showThumbnail','sortBy','sortOrder','toolbarSettings','uploadSettings','view','width'];
export const outputs: string[] = ['beforeDownload','beforeImageLoad','beforePopupClose','beforePopupOpen','beforeSend','created','destroyed','failure','fileDragStart','fileDragStop','fileDragging','fileDropped','fileLoad','fileOpen','fileSelect','fileSelection','menuClick','menuOpen','popupClose','popupOpen','success','toolbarClick','toolbarCreate','uploadListCreate'];
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

    }
})
@ComponentMixins([ComponentBase])
export class FileManagerComponent extends FileManager implements IComponentBase {
    public context : any;
    public tagObjects: any;
	beforeDownload: any;
	beforeImageLoad: any;
	beforePopupClose: any;
	beforePopupOpen: any;
	beforeSend: any;
	created: any;
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
	menuClick: any;
	menuOpen: any;
	popupClose: any;
	popupOpen: any;
	success: any;
	toolbarClick: any;
	toolbarCreate: any;
	public uploadListCreate: any;



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
        
        this.context.ngAfterContentChecked(this);
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

