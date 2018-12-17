import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { RangeNavigator } from '@syncfusion/ej2-charts';
import { Template } from '@syncfusion/ej2-angular-base';
import { RangenavigatorSeriesCollectionDirective } from './series.directive';

export const inputs: string[] = ['allowSnapping','animationDuration','dataSource','disableRangeSelector','enableDeferredUpdate','enableGrouping','enablePersistence','enableRtl','groupBy','height','interval','intervalType','labelFormat','labelIntersectAction','labelPosition','labelStyle','locale','logBase','majorGridLines','majorTickLines','margin','maximum','minimum','navigatorBorder','navigatorStyleSettings','periodSelectorSettings','query','secondaryLabelAlignment','series','skeleton','skeletonType','theme','tickPosition','tooltip','useGroupingSeparator','value','valueType','width','xName','yName'];
export const outputs: string[] = ['beforePrint','changed','labelRender','load','loaded','resized','selectorRender','tooltipRender'];
export const twoWays: string[] = [''];

/**
 * RangeNavigator Component
 * ```html
 * <ejs-rangenavigator></ejs-rangenavigator>
 * ```
 */
@Component({
    selector: 'ejs-rangenavigator',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childSeries: new ContentChild(RangenavigatorSeriesCollectionDirective)
    }
})
@ComponentMixins([ComponentBase])
export class RangeNavigatorComponent extends RangeNavigator implements IComponentBase {
    public childSeries: any;
    public tags: string[] = ['series'];

    @ContentChild('tooltipTemplate')
    @Template()
    public tooltip_template: any;

    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try{ this.injectedModules.push(this.injector.get('ChartsRangeTooltip')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsPeriodSelector')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsAreaSeries')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsStepLineSeries')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsDateTime')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsLogarithmic')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsExport')); }catch {} 

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

