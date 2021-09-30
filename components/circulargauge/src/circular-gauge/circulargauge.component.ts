import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, QueryList, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { CircularGauge } from '@syncfusion/ej2-circulargauge';
import { Template } from '@syncfusion/ej2-angular-base';
import { AxesDirective } from './axes.directive';

export const inputs: string[] = ['allowImageExport','allowMargin','allowPdfExport','allowPrint','axes','background','border','centerX','centerY','description','enablePersistence','enablePointerDrag','enableRangeDrag','enableRtl','height','legendSettings','locale','margin','moveToCenter','tabIndex','theme','title','titleStyle','tooltip','useGroupingSeparator','width'];
export const outputs: string[] = ['animationComplete','annotationRender','axisLabelRender','beforePrint','dragEnd','dragMove','dragStart','gaugeMouseDown','gaugeMouseLeave','gaugeMouseMove','gaugeMouseUp','legendRender','load','loaded','radiusCalculate','resized','tooltipRender'];
export const twoWays: string[] = [''];

/**
 * Circular Gauge Component
 * ```html
 * <ej-circulargauge></ej-circulargauge>
 * ```
 */
@Component({
    selector: 'ejs-circulargauge',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childAxes: new ContentChild(AxesDirective)
    }
})
@ComponentMixins([ComponentBase])
export class CircularGaugeComponent extends CircularGauge implements IComponentBase {
    public context : any;
    public tagObjects: any;
	animationComplete: any;
	annotationRender: any;
	axisLabelRender: any;
	beforePrint: any;
	dragEnd: any;
	dragMove: any;
	dragStart: any;
	gaugeMouseDown: any;
	gaugeMouseLeave: any;
	gaugeMouseMove: any;
	gaugeMouseUp: any;
	legendRender: any;
	load: any;
	loaded: any;
	radiusCalculate: any;
	resized: any;
	public tooltipRender: any;
    public childAxes: QueryList<AxesDirective>;
    public tags: string[] = ['axes'];
    @ContentChild('tooltipTemplate')
    @Template()
    public tooltip_template: any;

    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
                let mod = this.injector.get('CircularGaugeGaugeTooltip');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('CircularGaugeAnnotations');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('CircularGaugeLegend');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('CircularGaugePrint');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('CircularGaugePdfExport');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('CircularGaugeImageExport');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('CircularGaugeGradient');
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
        this.tagObjects[0].instance = this.childAxes;
        this.context.ngAfterContentChecked(this);
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

