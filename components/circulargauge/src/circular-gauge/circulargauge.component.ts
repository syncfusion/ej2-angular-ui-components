import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { CircularGauge } from '@syncfusion/ej2-circulargauge';
import { Template } from '@syncfusion/ej2-angular-base';
import { AxesDirective } from './axes.directive';

export const inputs: string[] = ['axes','background','border','centerX','centerY','description','enablePersistence','enablePointerDrag','enableRtl','height','locale','margin','moveToCenter','tabIndex','theme','title','titleStyle','tooltip','useGroupingSeparator','width'];
export const outputs: string[] = ['animationComplete','annotationRender','axisLabelRender','dragEnd','dragMove','dragStart','gaugeMouseDown','gaugeMouseLeave','gaugeMouseMove','gaugeMouseUp','load','loaded','resized','tooltipRender'];
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
    public childAxes: any;
    public tags: string[] = ['axes'];

    @ContentChild('tooltipTemplate')
    @Template()
    public tooltip_template: any;

    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try{ this.injectedModules.push(this.injector.get('CircularGaugeGaugeTooltip')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('CircularGaugeAnnotations')); }catch {} 

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

