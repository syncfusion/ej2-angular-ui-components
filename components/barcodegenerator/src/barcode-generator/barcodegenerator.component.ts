import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, Renderer2, Injector, ValueProvider } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { BarcodeGenerator } from '@syncfusion/ej2-barcode-generator';



export const inputs: string[] = ['backgroundColor','displayText','enableCheckSum','enablePersistence','enableRtl','foreColor','height','locale','margin','mode','type','value','width'];
export const outputs: string[] = ['invalid'];
export const twoWays: string[] = [''];

/**
 * Barcode Component
 * ```html
 * <ej-barcode-generator></ej-barcode-generator>
 * ```
 */
@Component({
    selector: 'ejs-barcodegenerator',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {

    }
})
@ComponentMixins([ComponentBase])
export class BarcodeGeneratorComponent extends BarcodeGenerator implements IComponentBase {




    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];

        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
    }

    public ngOnInit() {
    }

    public ngAfterViewInit(): void {
    }

    public ngOnDestroy(): void {
    }

    public ngAfterContentChecked(): void {
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

