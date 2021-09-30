import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, QueryList, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { Grid } from '@syncfusion/ej2-grids';
import { Template } from '@syncfusion/ej2-angular-base';
import { ColumnsDirective } from './columns.directive';
import { AggregatesDirective } from './aggregates.directive';

export const inputs: string[] = ['aggregates','allowExcelExport','allowFiltering','allowGrouping','allowKeyboard','allowMultiSorting','allowPaging','allowPdfExport','allowReordering','allowResizing','allowRowDragAndDrop','allowSelection','allowSorting','allowTextWrap','childGrid','clipMode','columnChooserSettings','columnMenuItems','columnQueryMode','columns','contextMenuItems','currencyCode','currentAction','dataSource','detailTemplate','editSettings','ej2StatePersistenceVersion','enableAdaptiveUI','enableAltRow','enableAutoFill','enableColumnVirtualization','enableHeaderFocus','enableHover','enableImmutableMode','enableInfiniteScrolling','enablePersistence','enableRtl','enableStickyHeader','enableVirtualization','filterSettings','frozenColumns','frozenRows','gridLines','groupSettings','height','hierarchyPrintMode','infiniteScrollSettings','locale','pageSettings','pagerTemplate','parentDetails','printMode','query','queryString','resizeSettings','rowDropSettings','rowHeight','rowRenderingMode','rowTemplate','searchSettings','selectedRowIndex','selectionSettings','showColumnChooser','showColumnMenu','sortSettings','textWrapSettings','toolbar','toolbarTemplate','width'];
export const outputs: string[] = ['actionBegin','actionComplete','actionFailure','batchAdd','batchCancel','batchDelete','beforeAutoFill','beforeBatchAdd','beforeBatchDelete','beforeBatchSave','beforeCopy','beforeDataBound','beforeExcelExport','beforeOpenAdaptiveDialog','beforeOpenColumnChooser','beforePaste','beforePdfExport','beforePrint','beginEdit','cellDeselected','cellDeselecting','cellEdit','cellSave','cellSaved','cellSelected','cellSelecting','checkBoxChange','columnDataStateChange','columnDeselected','columnDeselecting','columnDrag','columnDragStart','columnDrop','columnMenuClick','columnMenuOpen','columnSelected','columnSelecting','commandClick','contextMenuClick','contextMenuOpen','created','dataBound','dataSourceChanged','dataStateChange','destroyed','detailDataBound','excelAggregateQueryCellInfo','excelExportComplete','excelHeaderQueryCellInfo','excelQueryCellInfo','exportDetailDataBound','exportGroupCaption','headerCellInfo','keyPressed','lazyLoadGroupCollapse','lazyLoadGroupExpand','load','pdfAggregateQueryCellInfo','pdfExportComplete','pdfHeaderQueryCellInfo','pdfQueryCellInfo','printComplete','queryCellInfo','recordClick','recordDoubleClick','resizeStart','resizeStop','resizing','rowDataBound','rowDeselected','rowDeselecting','rowDrag','rowDragStart','rowDragStartHelper','rowDrop','rowSelected','rowSelecting','toolbarClick','dataSourceChange'];
export const twoWays: string[] = ['dataSource'];

/**
 * `ejs-grid` represents the Angular Grid Component.
 * ```html
 * <ejs-grid [dataSource]='data' allowPaging='true' allowSorting='true'></ejs-grid>
 * ```
 */
@Component({
    selector: 'ejs-grid',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childColumns: new ContentChild(ColumnsDirective), 
        childAggregates: new ContentChild(AggregatesDirective)
    }
})
@ComponentMixins([ComponentBase])
export class GridComponent extends Grid implements IComponentBase {
    public context : any;
    public tagObjects: any;
	actionBegin: any;
	actionComplete: any;
	actionFailure: any;
	batchAdd: any;
	batchCancel: any;
	batchDelete: any;
	beforeAutoFill: any;
	beforeBatchAdd: any;
	beforeBatchDelete: any;
	beforeBatchSave: any;
	beforeCopy: any;
	beforeDataBound: any;
	beforeExcelExport: any;
	beforeOpenAdaptiveDialog: any;
	beforeOpenColumnChooser: any;
	beforePaste: any;
	beforePdfExport: any;
	beforePrint: any;
	beginEdit: any;
	cellDeselected: any;
	cellDeselecting: any;
	cellEdit: any;
	cellSave: any;
	cellSaved: any;
	cellSelected: any;
	cellSelecting: any;
	checkBoxChange: any;
	columnDataStateChange: any;
	columnDeselected: any;
	columnDeselecting: any;
	columnDrag: any;
	columnDragStart: any;
	columnDrop: any;
	columnMenuClick: any;
	columnMenuOpen: any;
	columnSelected: any;
	columnSelecting: any;
	commandClick: any;
	contextMenuClick: any;
	contextMenuOpen: any;
	created: any;
	dataBound: any;
	dataSourceChanged: any;
	dataStateChange: any;
	destroyed: any;
	detailDataBound: any;
	excelAggregateQueryCellInfo: any;
	excelExportComplete: any;
	excelHeaderQueryCellInfo: any;
	excelQueryCellInfo: any;
	exportDetailDataBound: any;
	exportGroupCaption: any;
	headerCellInfo: any;
	keyPressed: any;
	lazyLoadGroupCollapse: any;
	lazyLoadGroupExpand: any;
	load: any;
	pdfAggregateQueryCellInfo: any;
	pdfExportComplete: any;
	pdfHeaderQueryCellInfo: any;
	pdfQueryCellInfo: any;
	printComplete: any;
	queryCellInfo: any;
	recordClick: any;
	recordDoubleClick: any;
	resizeStart: any;
	resizeStop: any;
	resizing: any;
	rowDataBound: any;
	rowDeselected: any;
	rowDeselecting: any;
	rowDrag: any;
	rowDragStart: any;
	rowDragStartHelper: any;
	rowDrop: any;
	rowSelected: any;
	rowSelecting: any;
	toolbarClick: any;
	public dataSourceChange: any;
    public childColumns: QueryList<ColumnsDirective>;
    public childAggregates: QueryList<AggregatesDirective>;
    public tags: string[] = ['columns', 'aggregates'];
    /** 
     * The row template that renders customized rows from the given template. 
     * By default, Grid renders a table row for every data source item. 
     * > * It accepts either [template string](../../common/template-engine/) or HTML element ID. 
     * > * The row template must be a table row.
     * 
     * > Check the [`Row Template`](../../grid/row/) customization.
     *     
     */
    @ContentChild('rowTemplate')
    @Template()
    public rowTemplate: any;
    /** 
     * The detail template allows you to show or hide additional information about a particular row.
     * 
     * > It accepts either the [template string](../../common/template-engine/) or the HTML element ID.
     *
     *{% codeBlock src="grid/detail-template-api/index.ts" %}{% endcodeBlock %}
     *     
     */
    @ContentChild('detailTemplate')
    @Template()
    public detailTemplate: any;
    /** 
     * It used to render toolbar template
     * @default null
     */
    @ContentChild('toolbarTemplate')
    @Template()
    public toolbarTemplate: any;
    /** 
     * It used to render pager template
     * @default null
     */
    @ContentChild('pagerTemplate')
    @Template()
    public pagerTemplate: any;
    @ContentChild('editSettingsTemplate')
    @Template()
    public editSettings_template: any;
    @ContentChild('groupSettingsCaptionTemplate')
    @Template()
    public groupSettings_captionTemplate: any;

    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
                let mod = this.injector.get('GridsFilter');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('GridsPage');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('GridsSelection');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('GridsSort');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('GridsGroup');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('GridsReorder');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('GridsRowDD');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('GridsDetailRow');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('GridsToolbar');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('GridsAggregate');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('GridsSearch');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('GridsVirtualScroll');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('GridsEdit');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('GridsResize');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('GridsExcelExport');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('GridsPdfExport');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('GridsCommandColumn');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('GridsContextMenu');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('GridsFreeze');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('GridsColumnMenu');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('GridsColumnChooser');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('GridsForeignKey');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('GridsInfiniteScroll');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('GridsLazyLoadGroup');
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
        this.tagObjects[0].instance = this.childColumns;
        if (this.childAggregates) {
                    this.tagObjects[1].instance = this.childAggregates as any;
                }
        this.context.ngAfterContentChecked(this);
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

