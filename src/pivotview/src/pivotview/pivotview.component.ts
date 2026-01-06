import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, QueryList, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { PivotView } from '@syncfusion/ej2-pivotview';
import { Template } from '@syncfusion/ej2-angular-base';


export const inputs: string[] = ['aggregateTypes','allowCalculatedField','allowConditionalFormatting','allowDataCompression','allowDeferLayoutUpdate','allowDrillThrough','allowExcelExport','allowGrouping','allowNumberFormatting','allowPdfExport','cellTemplate','chartSettings','chartTypes','cssClass','dataSourceSettings','displayOption','editSettings','enableFieldSearching','enableHtmlSanitizer','enablePaging','enablePersistence','enableRtl','enableValueSorting','enableVirtualization','exportAllPages','gridSettings','groupingBarSettings','height','hyperlinkSettings','loadOnDemandInMemberEditor','locale','maxNodeLimitInMemberEditor','maxRowsInDrillThrough','pageSettings','pagerSettings','pivotValues','showFieldList','showGroupingBar','showToolbar','showTooltip','showValuesButton','spinnerTemplate','toolbar','toolbarTemplate','tooltipTemplate','virtualScrollSettings','width'];
export const outputs: string[] = ['actionBegin','actionComplete','actionFailure','afterServiceInvoke','aggregateCellInfo','aggregateMenuOpen','beforeExport','beforeServiceInvoke','beginDrillThrough','calculatedFieldCreate','cellClick','cellSelected','cellSelecting','chartSeriesCreated','conditionalFormatting','created','dataBound','destroyed','drill','drillThrough','editCompleted','enginePopulated','enginePopulating','exportComplete','fetchReport','fieldDragStart','fieldDrop','fieldListRefreshed','fieldRemove','hyperlinkCellClick','load','loadReport','memberEditorOpen','memberFiltering','newReport','numberFormatting','onFieldDropped','onHeadersSort','onPdfCellRender','removeReport','renameReport','saveReport','toolbarClick','toolbarRender'];
export const twoWays: string[] = [];

/**
 * `ej-pivotview` represents the Angular Pivot Table Component.
 * ```html
 * <ej-pivotview></ej-pivotview>
 * ```
 */
@Component({
    selector: 'ejs-pivotview',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {

    }
})
@ComponentMixins([ComponentBase])
export class PivotViewComponent extends PivotView implements IComponentBase {
    public context : any;
    public tagObjects: any;
	actionBegin: any;
	actionComplete: any;
	actionFailure: any;
	afterServiceInvoke: any;
	aggregateCellInfo: any;
	aggregateMenuOpen: any;
	beforeExport: any;
	beforeServiceInvoke: any;
	beginDrillThrough: any;
	calculatedFieldCreate: any;
	cellClick: any;
	cellSelected: any;
	cellSelecting: any;
	chartSeriesCreated: any;
	conditionalFormatting: any;
	created: any;
	dataBound: any;
	destroyed: any;
	drill: any;
	drillThrough: any;
	editCompleted: any;
	enginePopulated: any;
	enginePopulating: any;
	exportComplete: any;
	fetchReport: any;
	fieldDragStart: any;
	fieldDrop: any;
	fieldListRefreshed: any;
	fieldRemove: any;
	hyperlinkCellClick: any;
	load: any;
	loadReport: any;
	memberEditorOpen: any;
	memberFiltering: any;
	newReport: any;
	numberFormatting: any;
	onFieldDropped: any;
	onHeadersSort: any;
	onPdfCellRender: any;
	removeReport: any;
	renameReport: any;
	saveReport: any;
	toolbarClick: any;
	public toolbarRender: any;


    /** 
     * Allows the table cell elements to be customized with either an HTML string or the element’s ID, 
     * that can be used to add additional HTML elements with custom formats to the cell elements that are displayed in the pivot table.
     * @default null
     * @asptype string
     */
    @ContentChild('cellTemplate')
    @Template()
    public cellTemplate: any;
    /** 
     * Allows the tooltip element to be customized with either an HTML string or the element’s ID, 
     * can be used to displayed with custom formats either by mouse hovering or by touch in the pivot table.
     * @default null
     * @asptype string
     */
    @ContentChild('tooltipTemplate')
    @Template()
    public tooltipTemplate: any;

    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
                let mod = this.injector.get('PivotViewGroupingBar');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('PivotViewFieldList');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('PivotViewCalculatedField');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('PivotViewConditionalFormatting');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('PivotViewVirtualScroll');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('PivotViewDrillThrough');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('PivotViewToolbar');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('PivotViewPivotChart');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('PivotViewPDFExport');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('PivotViewExcelExport');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('PivotViewNumberFormatting');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('PivotViewGrouping');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('PivotViewPager');
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
        
        this.context.ngAfterContentChecked(this);
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

