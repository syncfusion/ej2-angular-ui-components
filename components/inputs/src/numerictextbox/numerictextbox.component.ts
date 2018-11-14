import { Component, ElementRef, ViewContainerRef, ValueProvider, Renderer2, Injector, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ComponentBase, IComponentBase, applyMixins, PropertyCollectionInfo, FormBase, setValue } from '@syncfusion/ej2-angular-base';
import { NumericTextBox } from '@syncfusion/ej2-inputs';



export const inputs: string[] = ['cssClass','currency','currencyCode','decimals','enablePersistence','enableRtl','enabled','floatLabelType','format','locale','max','min','placeholder','readonly','showClearButton','showSpinButton','step','strictMode','validateDecimalOnType','value','width'];
export const outputs: string[] = ['change','created','destroyed','valueChange'];
export const twoWays: string[] = ['value'];

/**
 * Represents the EJ2 Angular NumericTextBox Component.
 * ```html
 * <ej-numerictextbox [value]='value'></ej-numerictextbox>
 * ```
 */
@Component({
    selector: 'ejs-numerictextbox',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => NumericTextBoxComponent),
            multi: true
        }
    ],
    queries: {

    }
})
export class NumericTextBoxComponent extends NumericTextBox implements IComponentBase {


    public valueChange: any;

    private skipFromEvent:boolean = true;
    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];

        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
    }

    public registerOnChange(registerFunction: (_: any) => void): void {
    }

    public registerOnTouched(registerFunction: () => void): void {
    }

    public writeValue(value: any): void {
    }
    
    public setDisabledState(disabled: boolean): void {
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

applyMixins(NumericTextBoxComponent, [ComponentBase, FormBase]);
