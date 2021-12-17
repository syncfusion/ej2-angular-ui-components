import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, QueryList, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { AccumulationChart } from '@syncfusion/ej2-charts';
import { Template } from '@syncfusion/ej2-angular-base';
import { AccumulationSeriesCollectionDirective } from './series.directive';
import { AccumulationAnnotationsDirective } from './annotations.directive';

export const inputs: string[] = ['allowExport','annotations','background','backgroundImage','border','center','currencyCode','dataSource','enableAnimation','enableBorderOnMouseMove','enableExport','enablePersistence','enableRtl','enableSmartLabels','height','highlightMode','highlightPattern','isMultiSelect','legendSettings','locale','margin','selectedDataIndexes','selectionMode','selectionPattern','series','subTitle','subTitleStyle','theme','title','titleStyle','tooltip','useGroupingSeparator','width'];
export const outputs: string[] = ['afterExport','animationComplete','annotationRender','beforePrint','beforeResize','chartDoubleClick','chartMouseClick','chartMouseDown','chartMouseLeave','chartMouseMove','chartMouseUp','legendRender','load','loaded','pointClick','pointMove','pointRender','resized','selectionComplete','seriesRender','textRender','tooltipRender','dataSourceChange'];
export const twoWays: string[] = ['dataSource'];

/**
 * AccumulationChart Component
 * ```html
 * <ejs-accumulationchart></ejs-accumulationchart>
 * ```
 */
@Component({
    selector: 'ejs-accumulationchart',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childSeries: new ContentChild(AccumulationSeriesCollectionDirective), 
        childAnnotations: new ContentChild(AccumulationAnnotationsDirective)
    }
})
@ComponentMixins([ComponentBase])
export class AccumulationChartComponent extends AccumulationChart implements IComponentBase {
    public context : any;
    public tagObjects: any;
	afterExport: any;
	animationComplete: any;
	annotationRender: any;
	beforePrint: any;
	beforeResize: any;
	chartDoubleClick: any;
	chartMouseClick: any;
	chartMouseDown: any;
	chartMouseLeave: any;
	chartMouseMove: any;
	chartMouseUp: any;
	legendRender: any;
	load: any;
	loaded: any;
	pointClick: any;
	pointMove: any;
	pointRender: any;
	resized: any;
	selectionComplete: any;
	seriesRender: any;
	textRender: any;
	tooltipRender: any;
	public dataSourceChange: any;
    public childSeries: QueryList<AccumulationSeriesCollectionDirective>;
    public childAnnotations: QueryList<AccumulationAnnotationsDirective>;
    public tags: string[] = ['series', 'annotations'];
    @ContentChild('tooltipTemplate')
    @Template()
    public tooltip_template: any;

    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
                let mod = this.injector.get('ChartsPieSeries');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ChartsFunnelSeries');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ChartsPyramidSeries');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ChartsAccumulationTooltip');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ChartsAccumulationLegend');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ChartsAccumulationSelection');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ChartsAccumulationDataLabel');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ChartsAccumulationAnnotation');
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
        if (this.childAnnotations) {
                    this.tagObjects[1].instance = this.childAnnotations as any;
                }
        this.context.ngAfterContentChecked(this);
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

