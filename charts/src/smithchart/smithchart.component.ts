import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { Smithchart } from '@syncfusion/ej2-charts';

import { SmithchartSeriesCollectionDirective } from './series.directive';

export const inputs: string[] = ['background','border','elementSpacing','enablePersistence','enableRtl','font','height','horizontalAxis','legendSettings','locale','margin','radialAxis','radius','renderType','series','theme','title','width'];
export const outputs: string[] = ['animationComplete','axisLabelRender','beforePrint','legendRender','load','loaded','seriesRender','subtitleRender','textRender','titleRender'];
export const twoWays: string[] = [''];

/**
 * Smithchart Component
 * ```html
 * <ejs-smithchart></ejs-smithchart>
 * ```
 */
@Component({
    selector: 'ejs-smithchart',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childSeries: new ContentChild(SmithchartSeriesCollectionDirective)
    }
})
@ComponentMixins([ComponentBase])
export class SmithchartComponent extends Smithchart implements IComponentBase {
    public childSeries: any;
    public tags: string[] = ['series'];


    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try{ this.injectedModules.push(this.injector.get('ChartsSmithchartLegend')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsTooltipRender')); }catch {} 

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

