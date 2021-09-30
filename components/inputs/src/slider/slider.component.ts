import { Component, ElementRef, ViewContainerRef, ValueProvider, Renderer2, Injector, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, FormBase, setValue } from '@syncfusion/ej2-angular-base';
import { Slider } from '@syncfusion/ej2-inputs';



export const inputs: string[] = ['colorRange','cssClass','customValues','enableAnimation','enableHtmlSanitizer','enablePersistence','enableRtl','enabled','limits','locale','max','min','orientation','readonly','showButtons','step','ticks','tooltip','type','value','width'];
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
@ComponentMixins([ComponentBase, FormBase])
export class SliderComponent extends Slider implements IComponentBase {
    public formCompContext : any;
    public formContext : any;
    public tagObjects: any;
	change: any;
	changed: any;
	created: any;
	renderedTicks: any;
	renderingTicks: any;
	tooltipChange: any;
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
        this.formContext  = new FormBase();
        this.formCompContext  = new ComponentBase();
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
        this.formCompContext.ngOnInit(this);
    }

    public ngAfterViewInit(): void {
        this.formContext.ngAfterViewInit(this);
    }

    public ngOnDestroy(): void {
        this.formCompContext.ngOnDestroy(this);
    }

    public ngAfterContentChecked(): void {
        
        this.formCompContext.ngAfterContentChecked(this);
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

