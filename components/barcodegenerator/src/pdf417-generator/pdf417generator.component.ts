import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, QueryList, Renderer2, Injector, ValueProvider } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { PDF417Generator } from '@syncfusion/ej2-barcode-generator';



export const inputs: string[] = ['backgroundColor','columns','compactionMode','displayText','enablePersistence','enableRtl','enableWebMcp','errorCorrectionLevel','foreColor','height','isCompact','locale','margin','mode','rowHeightRatio','rows','value','webMcpSettings','width'];
export const outputs: string[] = ['beforeWebMcpToolExecute','invalid'];
export const twoWays: string[] = [''];

/**
 * PDF417 Component
 * ```html
 * <ej-pdf417-generator></ej-pdf417-generator>
 * ```
 */
@Component({
    selector: 'ejs-pdf417generator',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    queries: {
    }
})
@ComponentMixins([ComponentBase])
export class PDF417GeneratorComponent extends PDF417Generator implements IComponentBase {
    public declare context : any;
    public declare tagObjects: any;
	declare beforeWebMcpToolExecute: any;
	public declare invalid: any;



    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
                let mod = this.injector.get('Barcode-GeneratorWebMcpBarcode');
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

    public declare registerEvents: (eventList: string[]) => void;
    public declare addTwoWay: (propList: string[]) => void;
}


