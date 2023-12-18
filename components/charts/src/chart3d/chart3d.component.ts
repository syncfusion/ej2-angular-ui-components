import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, QueryList, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { Chart3D } from '@syncfusion/ej2-charts';
import { Template } from '@syncfusion/ej2-angular-base';
import { Chart3DSeriesCollectionDirective } from './series.directive';
import { Chart3DAxesDirective } from './axes.directive';
import { Chart3DRowsDirective } from './rows.directive';
import { Chart3DColumnsDirective } from './columns.directive';
import { Chart3DSelectedDataIndexesDirective } from './selecteddataindexes.directive';

export const inputs: string[] = ['axes','background','backgroundImage','border','columns','currencyCode','dataSource','depth','description','enablePersistence','enableRotation','enableRtl','enableSideBySidePlacement','height','highlightColor','highlightMode','highlightPattern','isMultiSelect','isTransposed','legendSettings','locale','margin','palettes','perspectiveAngle','primaryXAxis','primaryYAxis','rotation','rows','selectedDataIndexes','selectionMode','selectionPattern','series','subTitle','subTitleStyle','theme','tilt','title','titleStyle','tooltip','useGroupingSeparator','wallColor','wallSize','width'];
export const outputs: string[] = ['afterExport','axisLabelRender','beforeExport','beforePrint','beforeResize','chart3DMouseClick','chart3DMouseDown','chart3DMouseLeave','chart3DMouseMove','chart3DMouseUp','legendClick','legendRender','load','loaded','pointClick','pointMove','pointRender','resized','selectionComplete','seriesRender','textRender','tooltipRender','dataSourceChange'];
export const twoWays: string[] = ['dataSource'];

/**
 * 3D Chart Component
 * ```html
 * <ejschart3d></ejschart3d>
 * ```
 */
@Component({
    selector: 'ejs-chart3d',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childSeries: new ContentChild(Chart3DSeriesCollectionDirective), 
        childAxes: new ContentChild(Chart3DAxesDirective), 
        childRows: new ContentChild(Chart3DRowsDirective), 
        childColumns: new ContentChild(Chart3DColumnsDirective), 
        childSelectedDataIndexes: new ContentChild(Chart3DSelectedDataIndexesDirective)
    }
})
@ComponentMixins([ComponentBase])
export class Chart3DComponent extends Chart3D implements IComponentBase {
    public context : any;
    public tagObjects: any;
	afterExport: any;
	axisLabelRender: any;
	beforeExport: any;
	beforePrint: any;
	beforeResize: any;
	chart3DMouseClick: any;
	chart3DMouseDown: any;
	chart3DMouseLeave: any;
	chart3DMouseMove: any;
	chart3DMouseUp: any;
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
    public childSeries: QueryList<Chart3DSeriesCollectionDirective>;
    public childAxes: QueryList<Chart3DAxesDirective>;
    public childRows: QueryList<Chart3DRowsDirective>;
    public childColumns: QueryList<Chart3DColumnsDirective>;
    public childSelectedDataIndexes: QueryList<Chart3DSelectedDataIndexesDirective>;
    public tags: string[] = ['series', 'axes', 'rows', 'columns', 'selectedDataIndexes'];
    @ContentChild('tooltipTemplate')
    @Template()
    public tooltip_template: any;

    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
                let mod = this.injector.get('ChartsColumnSeries3D');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ChartsStackingColumnSeries3D');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ChartsBarSeries3D');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ChartsStackingBarSeries3D');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ChartsCategory3D');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ChartsDateTime3D');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ChartsDateTimeCategory3D');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ChartsLogarithmic3D');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ChartsTooltip3D');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ChartsLegend3D');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ChartsDataLabel3D');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ChartsSelection3D');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ChartsExport3D');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ChartsHighlight3D');
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
        if (this.childAxes) {
                    this.tagObjects[1].instance = this.childAxes as any;
                }
        if (this.childRows) {
                    this.tagObjects[2].instance = this.childRows as any;
                }
        if (this.childColumns) {
                    this.tagObjects[3].instance = this.childColumns as any;
                }
        if (this.childSelectedDataIndexes) {
                    this.tagObjects[4].instance = this.childSelectedDataIndexes as any;
                }
        this.context.ngAfterContentChecked(this);
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

