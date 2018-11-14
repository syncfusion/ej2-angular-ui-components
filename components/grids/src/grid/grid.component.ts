import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { Grid } from '@syncfusion/ej2-grids';
import { Template } from '@syncfusion/ej2-angular-base';
import { ColumnsDirective } from './columns.directive';
import { AggregatesDirective } from './aggregates.directive';

export const inputs: string[] = ['aggregates','allowExcelExport','allowFiltering','allowGrouping','allowMultiSorting','allowPaging','allowPdfExport','allowReordering','allowResizing','allowRowDragAndDrop','allowSelection','allowSorting','allowTextWrap','childGrid','columnMenuItems','columnQueryMode','columns','contextMenuItems','currencyCode','dataSource','detailTemplate','editSettings','enableAltRow','enableColumnVirtualization','enableHover','enablePersistence','enableRtl','enableVirtualization','filterSettings','frozenColumns','frozenRows','gridLines','groupSettings','height','locale','pageSettings','printMode','query','queryString','rowDropSettings','rowHeight','rowTemplate','searchSettings','selectedRowIndex','selectionSettings','showColumnChooser','showColumnMenu','sortSettings','textWrapSettings','toolbar','width'];
export const outputs: string[] = ['actionBegin','actionComplete','actionFailure','batchAdd','batchCancel','batchDelete','beforeBatchAdd','beforeBatchDelete','beforeBatchSave','beforeCopy','beforeDataBound','beforeExcelExport','beforeOpenColumnChooser','beforePdfExport','beforePrint','beginEdit','cellDeselected','cellDeselecting','cellEdit','cellSave','cellSaved','cellSelected','cellSelecting','checkBoxChange','columnDrag','columnDragStart','columnDrop','columnMenuClick','columnMenuOpen','contextMenuClick','contextMenuOpen','created','dataBound','dataSourceChanged','dataStateChange','destroyed','detailDataBound','excelExportComplete','excelHeaderQueryCellInfo','excelQueryCellInfo','headerCellInfo','load','pdfExportComplete','pdfHeaderQueryCellInfo','pdfQueryCellInfo','printComplete','queryCellInfo','recordDoubleClick','resizeStart','resizeStop','resizing','rowDataBound','rowDeselected','rowDeselecting','rowDrag','rowDragStart','rowDrop','rowSelected','rowSelecting','toolbarClick','dataSourceChange'];
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
    public childColumns: any;
    public childAggregates: any;
    public tags: string[] = ['columns', 'aggregates'];
    public dataSourceChange: any;
    /** 
     * The row template that renders customized rows from the given template. 
     * By default, Grid renders a table row for every data source item. 
     * > * It accepts either [template string](../common/template-engine.html) or HTML element ID. 
     * > * The row template must be a table row.
     * 
     * > Check the [`Row Template`](./row.html) customization.
     *     
     */
    @ContentChild('rowTemplate')
    @Template()
    public rowTemplate: any;
    /** 
     * The detail template allows you to show or hide additional information about a particular row.
     * 
     * > It accepts either the [template string](../common/template-engine.html) or the HTML element ID.
     *
     *{% codeBlock src="grid/detail-template-api/index.ts" %}{% endcodeBlock %}
     *     
     */
    @ContentChild('detailTemplate')
    @Template()
    public detailTemplate: any;
    @ContentChild('toolbarTemplate')
    @Template()
    public toolbarTemplate: any;
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
        try{ this.injectedModules.push(this.injector.get('GridsFilter')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('GridsPage')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('GridsSelection')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('GridsSort')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('GridsGroup')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('GridsReorder')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('GridsRowDD')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('GridsDetailRow')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('GridsToolbar')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('GridsAggregate')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('GridsSearch')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('GridsVirtualScroll')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('GridsEdit')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('GridsResize')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('GridsExcelExport')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('GridsPdfExport')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('GridsCommandColumn')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('GridsContextMenu')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('GridsFreeze')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('GridsColumnMenu')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('GridsColumnChooser')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('GridsForeignKey')); }catch {} 

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

