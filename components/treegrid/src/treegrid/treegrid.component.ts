import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { TreeGrid } from '@syncfusion/ej2-treegrid';
import { Template } from '@syncfusion/ej2-angular-base';
import { ColumnsDirective } from './columns.directive';
import { AggregatesDirective } from './aggregates.directive';

export const inputs: string[] = ['aggregates','allowExcelExport','allowFiltering','allowMultiSorting','allowPaging','allowPdfExport','allowReordering','allowResizing','allowRowDragAndDrop','allowSelection','allowSorting','allowTextWrap','autoCheckHierarchy','childMapping','columnMenuItems','columnQueryMode','columns','contextMenuItems','dataSource','detailTemplate','editSettings','enableAltRow','enableAutoFill','enableCollapseAll','enableHover','enablePersistence','enableRtl','enableVirtualization','expandStateMapping','filterSettings','frozenColumns','frozenRows','gridLines','hasChildMapping','height','idMapping','loadChildOnDemand','locale','pageSettings','parentIdMapping','printMode','query','rowDropSettings','rowHeight','rowTemplate','searchSettings','selectedRowIndex','selectionSettings','showColumnMenu','sortSettings','textWrapSettings','toolbar','treeColumnIndex','width'];
export const outputs: string[] = ['actionBegin','actionComplete','actionFailure','beforeDataBound','beforeExcelExport','beforePdfExport','beforePrint','beginEdit','cellDeselected','cellDeselecting','cellEdit','cellSave','cellSelected','cellSelecting','checkboxChange','collapsed','collapsing','columnDrag','columnDragStart','columnDrop','columnMenuClick','columnMenuOpen','contextMenuClick','contextMenuOpen','created','dataBound','dataSourceChanged','dataStateChange','detailDataBound','excelExportComplete','excelHeaderQueryCellInfo','excelQueryCellInfo','expanded','expanding','headerCellInfo','load','pdfExportComplete','pdfHeaderQueryCellInfo','pdfQueryCellInfo','printComplete','queryCellInfo','recordDoubleClick','resizeStart','resizeStop','resizing','rowDataBound','rowDeselected','rowDeselecting','rowDrag','rowDragStart','rowDragStartHelper','rowDrop','rowSelected','rowSelecting','toolbarClick','dataSourceChange'];
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
    /** 
     * The row template that renders customized rows from the given template. 
     * By default, TreeGrid renders a table row for every data source item. 
     * > * It accepts either [template string](../../common/template-engine.html) or HTML element ID. 
     * > * The row template must be a table row.
     * 
     * > Check the [`Row Template`](../../treegrid/row) customization.
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
     *     
     */
    @ContentChild('detailTemplate')
    @Template()
    public detailTemplate: any;
    @ContentChild('editSettingsTemplate')
    @Template()
    public editSettings_template: any;

    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
                let mod = this.injector.get('TreeGridFilter');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('TreeGridPage');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('TreeGridSort');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('TreeGridReorder');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('TreeGridToolbar');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('TreeGridAggregate');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('TreeGridResize');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('TreeGridColumnMenu');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('TreeGridExcelExport');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('TreeGridPdfExport');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('TreeGridCommandColumn');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('TreeGridContextMenu');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('TreeGridEdit');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('TreeGridSelection');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('TreeGridVirtualScroll');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('TreeGridDetailRow');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('TreeGridRowDD');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('TreeGridFreeze');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

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

