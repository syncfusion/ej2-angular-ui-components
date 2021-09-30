import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, QueryList, Renderer2, Injector, ValueProvider } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { QRCodeGenerator } from '@syncfusion/ej2-barcode-generator';



export const inputs: string[] = ['backgroundColor','displayText','enablePersistence','enableRtl','errorCorrectionLevel','foreColor','height','locale','margin','mode','value','version','width','xDimension'];
export const outputs: string[] = ['invalid'];
export const twoWays: string[] = [''];

/**
 * QRCode Component
 * ```html
 * <ej-qrcode-generator></ej-qrcode-generator>
 * ```
 */
@Component({
    selector: 'ejs-qrcodegenerator',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {

    }
})
@ComponentMixins([ComponentBase])
export class QRCodeGeneratorComponent extends QRCodeGenerator implements IComponentBase {
    public context : any;
    public tagObjects: any;
	public invalid: any;



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

