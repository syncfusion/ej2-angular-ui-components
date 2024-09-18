import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, QueryList, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { ImageEditor } from '@syncfusion/ej2-image-editor';
import { Template } from '@syncfusion/ej2-angular-base';


export const inputs: string[] = ['allowUndoRedo','cssClass','disabled','enablePersistence','enableRtl','finetuneSettings','fontFamily','height','isReadOnly','locale','quickAccessToolbarTemplate','selectionSettings','showQuickAccessToolbar','theme','toolbar','toolbarTemplate','width','zoomSettings'];
export const outputs: string[] = ['beforeSave','click','created','cropping','destroyed','editComplete','fileOpened','finetuneValueChanging','flipping','frameChange','imageFiltering','panning','quickAccessToolbarItemClick','quickAccessToolbarOpen','resizing','rotating','saved','selectionChanging','shapeChange','shapeChanging','toolbarCreated','toolbarItemClicked','toolbarUpdating','zooming'];
export const twoWays: string[] = [''];

/**
 * Represents the EJ2 Angular ImageEditor Component.
 * ```html
 * <ejs-imageeditor></ejs-imageeditor>
 * ```
 */
@Component({
    selector: 'ejs-imageeditor',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {

    }
})
@ComponentMixins([ComponentBase])
export class ImageEditorComponent extends ImageEditor implements IComponentBase {
    public context : any;
    public tagObjects: any;
	beforeSave: any;
	click: any;
	created: any;
	cropping: any;
	destroyed: any;
	editComplete: any;
	fileOpened: any;
	finetuneValueChanging: any;
	flipping: any;
	frameChange: any;
	imageFiltering: any;
	panning: any;
	quickAccessToolbarItemClick: any;
	quickAccessToolbarOpen: any;
	resizing: any;
	rotating: any;
	saved: any;
	selectionChanging: any;
	shapeChange: any;
	shapeChanging: any;
	toolbarCreated: any;
	toolbarItemClicked: any;
	toolbarUpdating: any;
	public zooming: any;


    /** 
     * Specifies a custom template for the toolbar of an image editor control. 
     * A string that specifies a custom template for the toolbar of the image editor. If this property is defined, the 'toolbar' property will not have any effect.
     * 
     * {% codeBlock src='image-editor/toolbarTemplate/index.md' %}{% endcodeBlock %}
     *     
     * @remarks Use this property if you want to customize the entire toolbar in your own way. The template should be a string that contains the HTML markup for the custom toolbar.

     * @default null
     * @asptype string


     */
    @ContentChild('toolbarTemplate')
    @Template()
    public toolbarTemplate: any;

    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];

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

