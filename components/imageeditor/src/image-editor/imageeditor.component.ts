import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, QueryList, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { ImageEditor } from '@syncfusion/ej2-image-editor';
import { Template } from '@syncfusion/ej2-angular-base';


export const inputs: string[] = ['backgroundColor','backgroundImage','cssClass','disabled','enablePersistence','enableRtl','finetuneSettings','height','isReadOnly','maxStrokeWidth','minStrokeWidth','saveWithBackground','signatureValue','strokeColor','theme','toolbar','toolbarTemplate','velocity','width'];
export const outputs: string[] = ['beforeSave','created','cropping','destroyed','fileOpened','fineTuneValueChanging','flipping','imageFiltering','panning','rotating','saved','shapeChanging','toolbarCreated','toolbarItemClicked','toolbarUpdating','zooming'];
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
	created: any;
	cropping: any;
	destroyed: any;
	fileOpened: any;
	fineTuneValueChanging: any;
	flipping: any;
	imageFiltering: any;
	panning: any;
	rotating: any;
	saved: any;
	shapeChanging: any;
	toolbarCreated: any;
	toolbarItemClicked: any;
	toolbarUpdating: any;
	public zooming: any;


    /** 
     * Specifies template to the Image Editor Toolbar. 
     * If you want to customize the entire toolbar in own way by using this property. 
     * The property is depending on ‘toolbar’.
     * @default null```html
<div id='imageeditor'></div>
```
```typescript
<script>
var imageObj = new ImageEditor({
    toolbarTemplate: '#toolbarTemplate'
});
imageObj.appendTo("#imageeditor");
</script>
<script id="toolbarTemplate" type="text/x-template">
   <div class = 'e-toolbar'>
     <button id= 'dltbtn'></button>
   </div>
 </script>
```

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

