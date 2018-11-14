import { Component, ElementRef, ViewContainerRef, ValueProvider, Renderer2, Injector, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ComponentBase, IComponentBase, applyMixins, PropertyCollectionInfo, FormBase, setValue } from '@syncfusion/ej2-angular-base';
import { Slider } from '@syncfusion/ej2-inputs';



export const inputs: string[] = ['cssClass','customValues','enableAnimation','enablePersistence','enableRtl','enabled','limits','locale','max','min','orientation','readonly','showButtons','step','ticks','tooltip','type','value'];
export const outputs: string[] = ['focus', 'blur', 'change','changed','created','renderedTicks','renderingTicks','tooltipChange','valueChange'];
export const twoWays: string[] = ['value'];

/**
 * Represents the EJ2 Angular Slider Component.
 * ```html
 * <ejs-slider [value]='value'></ejs-slider>
 * ```
 */
@Component({
    selector: 'ejs-slider',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SliderComponent),
            multi: true
        }
    ],
    queries: {

    }
})
export class SliderComponent extends Slider implements IComponentBase {


    public valueChange: any;

    public focus: any;
    public blur: any;
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

applyMixins(SliderComponent, [ComponentBase, FormBase]);
