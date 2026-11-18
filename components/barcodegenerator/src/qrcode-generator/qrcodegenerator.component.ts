import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, QueryList, Renderer2, Injector, ValueProvider } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { QRCodeGenerator } from '@syncfusion/ej2-barcode-generator';



export const inputs: string[] = ['backgroundColor','displayText','enableGS1','enablePersistence','enableRtl','enableWebMcp','errorCorrectionLevel','foreColor','height','locale','logo','margin','mode','value','version','webMcpSettings','width','xDimension'];
export const outputs: string[] = ['beforeWebMcpToolExecute','invalid'];
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
    standalone: true,
    queries: {
    }
})
@ComponentMixins([ComponentBase])
export class QRCodeGeneratorComponent extends QRCodeGenerator implements IComponentBase {
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


