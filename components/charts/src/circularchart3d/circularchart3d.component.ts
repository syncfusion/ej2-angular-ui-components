import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, QueryList, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { CircularChart3D } from '@syncfusion/ej2-charts';
import { Template } from '@syncfusion/ej2-angular-base';
import { CircularChart3DSeriesCollectionDirective } from './series.directive';
import { CircularChart3DSelectedDataIndexesDirective } from './selecteddataindexes.directive';

export const inputs: string[] = ['background','backgroundImage','border','dataSource','depth','enableAnimation','enableExport','enablePersistence','enableRotation','enableRtl','height','highlightColor','highlightMode','highlightPattern','isMultiSelect','legendSettings','locale','margin','rotation','selectedDataIndexes','selectionMode','selectionPattern','series','subTitle','subTitleStyle','theme','tilt','title','titleStyle','tooltip','useGroupingSeparator','width'];
export const outputs: string[] = ['afterExport','beforeExport','beforePrint','beforeResize','circularChart3DMouseClick','circularChart3DMouseDown','circularChart3DMouseLeave','circularChart3DMouseMove','circularChart3DMouseUp','legendClick','legendRender','load','loaded','pointClick','pointMove','pointRender','resized','selectionComplete','seriesRender','textRender','tooltipRender','dataSourceChange'];
export const twoWays: string[] = ['dataSource'];

/**
 * CircularChart3D Component
 * ```html
 * <ejs-circularchart3d></ejs-circularchart3d>
 * ```
 */
@Component({
    selector: 'ejs-circularchart3d',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childSeries: new ContentChild(CircularChart3DSeriesCollectionDirective), 
        childSelectedDataIndexes: new ContentChild(CircularChart3DSelectedDataIndexesDirective)
    }
})
@ComponentMixins([ComponentBase])
export class CircularChart3DComponent extends CircularChart3D implements IComponentBase {
    public context : any;
    public tagObjects: any;
	afterExport: any;
	beforeExport: any;
	beforePrint: any;
	beforeResize: any;
	circularChart3DMouseClick: any;
	circularChart3DMouseDown: any;
	circularChart3DMouseLeave: any;
	circularChart3DMouseMove: any;
	circularChart3DMouseUp: any;
	legendClick: any;
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
    public childSeries: QueryList<CircularChart3DSeriesCollectionDirective>;
    public childSelectedDataIndexes: QueryList<CircularChart3DSelectedDataIndexesDirective>;
    public tags: string[] = ['series', 'selectedDataIndexes'];
    @ContentChild('tooltipTemplate')
    @Template()
    public tooltip_template: any;

    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
                let mod = this.injector.get('ChartsPieSeries3D');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ChartsCircularChartTooltip3D');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ChartsCircularChartLegend3D');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ChartsCircularChartSelection3D');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ChartsCircularChartDataLabel3D');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ChartsCircularChartHighlight3D');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ChartsCircularChartExport3D');
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
        if (this.childSelectedDataIndexes) {
                    this.tagObjects[1].instance = this.childSelectedDataIndexes as any;
                }
        this.context.ngAfterContentChecked(this);
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

