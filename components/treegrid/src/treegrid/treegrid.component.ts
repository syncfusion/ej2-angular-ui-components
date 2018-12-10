import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { TreeGrid } from '@syncfusion/ej2-treegrid';
import { Template } from '@syncfusion/ej2-angular-base';
import { ColumnsDirective } from './columns.directive';
import { AggregatesDirective } from './aggregates.directive';

export const inputs: string[] = ['actionBegin','actionComplete','actionFailure','aggregates','allowExcelExport','allowFiltering','allowMultiSorting','allowPaging','allowPdfExport','allowReordering','allowResizing','allowSelection','allowSorting','allowTextWrap','childMapping','columnQueryMode','columns','contextMenuItems','dataSource','editSettings','enableAltRow','enableCollapseAll','enableHover','enablePersistence','enableRtl','expandStateMapping','filterSettings','gridLines','hasChildMapping','height','idMapping','locale','pageSettings','parentIdMapping','printMode','query','rowHeight','searchSettings','selectedRowIndex','selectionSettings','showColumnMenu','sortSettings','textWrapSettings','toolbar','treeColumnIndex','width'];
export const outputs: string[] = ['beforeDataBound','beforeExcelExport','beforePdfExport','beforePrint','beginEdit','cellDeselected','cellDeselecting','cellEdit','cellSelected','cellSelecting','collapsed','collapsing','columnDrag','columnDragStart','columnDrop','contextMenuClick','contextMenuOpen','created','dataBound','dataSourceChanged','dataStateChange','excelExportComplete','excelHeaderQueryCellInfo','excelQueryCellInfo','expanded','expanding','headerCellInfo','load','pdfExportComplete','pdfHeaderQueryCellInfo','pdfQueryCellInfo','printComplete','queryCellInfo','recordDoubleClick','resizeStart','resizeStop','resizing','rowDataBound','rowDeselected','rowDeselecting','rowSelected','rowSelecting','toolbarClick','dataSourceChange'];
export const twoWays: string[] = ['dataSource'];

/**
 * `ejs-treegrid` represents the Angular TreeTreeGrid Component.
 * ```html
 * <ejs-treegrid [dataSource]='data' allowPaging='true' allowSorting='true'></ejs-treegrid>
 * ```
 */
@Component({
    selector: 'ejs-treegrid',
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
export class TreeGridComponent extends TreeGrid implements IComponentBase {
    public childColumns: any;
    public childAggregates: any;
    public tags: string[] = ['columns', 'aggregates'];
    public dataSourceChange: any;
    @ContentChild('toolbarTemplate')
    @Template()
    public toolbarTemplate: any;
    @ContentChild('pagerTemplate')
    @Template()
    public pagerTemplate: any;
    @ContentChild('editSettingsTemplate')
    @Template()
    public editSettings_template: any;

    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try{ this.injectedModules.push(this.injector.get('TreeGridFilter')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('TreeGridPage')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('TreeGridSort')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('TreeGridReorder')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('TreeGridToolbar')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('TreeGridAggregate')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('TreeGridResize')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('TreeGridColumnMenu')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('TreeGridExcelExport')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('TreeGridPdfExport')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('TreeGridCommandColumn')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('TreeGridContextMenu')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('TreeGridEdit')); }catch {} 

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

