import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, QueryList, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { RangeNavigator } from '@syncfusion/ej2-charts';
import { Template } from '@syncfusion/ej2-angular-base';
import { RangenavigatorSeriesCollectionDirective } from './series.directive';

export const inputs: string[] = ['allowIntervalData','allowSnapping','animationDuration','background','dataSource','disableRangeSelector','enableDeferredUpdate','enableGrouping','enablePersistence','enableRtl','groupBy','height','interval','intervalType','labelFormat','labelIntersectAction','labelPosition','labelStyle','locale','logBase','majorGridLines','majorTickLines','margin','maximum','minimum','navigatorBorder','navigatorStyleSettings','periodSelectorSettings','query','secondaryLabelAlignment','series','skeleton','skeletonType','theme','tickPosition','tooltip','useGroupingSeparator','value','valueType','width','xName','yName'];
export const outputs: string[] = ['beforePrint','beforeResize','changed','labelRender','load','loaded','resized','selectorRender','tooltipRender','dataSourceChange'];
export const twoWays: string[] = ['dataSource'];

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
    public context : any;
    public tagObjects: any;
	beforePrint: any;
	beforeResize: any;
	changed: any;
	labelRender: any;
	load: any;
	loaded: any;
	resized: any;
	selectorRender: any;
	tooltipRender: any;
	public dataSourceChange: any;
    public childSeries: QueryList<RangenavigatorSeriesCollectionDirective>;
    public tags: string[] = ['series'];
    @ContentChild('tooltipTemplate')
    @Template()
    public tooltip_template: any;

    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
                let mod = this.injector.get('ChartsRangeTooltip');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ChartsPeriodSelector');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ChartsAreaSeries');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ChartsStepLineSeries');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ChartsDateTime');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ChartsLogarithmic');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ChartsExport');
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
        this.tagObjects[0].instance = this.childSeries;
        this.context.ngAfterContentChecked(this);
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

