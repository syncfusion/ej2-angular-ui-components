import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { Gantt } from '@syncfusion/ej2-gantt';
import { Template } from '@syncfusion/ej2-angular-base';
import { ColumnsDirective } from './columns.directive';
import { AddDialogFieldsDirective } from './adddialogfields.directive';
import { EditDialogFieldsDirective } from './editdialogfields.directive';
import { DayWorkingTimeCollectionDirective } from './dayworkingtime.directive';
import { HolidaysDirective } from './holidays.directive';
import { EventMarkersDirective } from './eventmarkers.directive';

export const inputs: string[] = ['addDialogFields','allowExcelExport','allowFiltering','allowReordering','allowResizing','allowSelection','allowSorting','allowUnscheduledTasks','autoFocusTasks','baselineColor','collapseAllParentTasks','columnMenuItems','columns','connectorLineBackground','connectorLineWidth','contextMenuItems','dataSource','dateFormat','dayWorkingTime','durationUnit','editDialogFields','editSettings','enableContextMenu','enablePersistence','enablePredecessorValidation','enableRtl','eventMarkers','filterSettings','gridLines','height','highlightWeekends','holidays','includeWeekend','labelSettings','locale','milestoneTemplate','parentTaskbarTemplate','projectEndDate','projectStartDate','query','renderBaseline','resourceIDMapping','resourceNameMapping','resources','rowHeight','searchSettings','selectedRowIndex','selectionSettings','showColumnMenu','showInlineNotes','sortSettings','splitterSettings','taskFields','taskbarHeight','taskbarTemplate','timelineSettings','toolbar','tooltipSettings','treeColumnIndex','width','workWeek'];
export const outputs: string[] = ['actionBegin','actionComplete','actionFailure','beforeExcelExport','beforeTooltipRender','cellDeselected','cellDeselecting','cellEdit','cellSelected','cellSelecting','collapsed','collapsing','columnDrag','columnDragStart','columnDrop','columnMenuClick','columnMenuOpen','contextMenuClick','contextMenuOpen','created','dataBound','destroyed','endEdit','excelExportComplete','excelHeaderQueryCellInfo','excelQueryCellInfo','expanded','expanding','headerCellInfo','load','queryCellInfo','queryTaskbarInfo','resizeStart','resizeStop','resizing','rowDataBound','rowDeselected','rowDeselecting','rowSelected','rowSelecting','splitterResizeStart','splitterResized','splitterResizing','taskbarEdited','taskbarEditing','toolbarClick','dataSourceChange'];
export const twoWays: string[] = ['dataSource'];

/**
 * `ejs-gantt` represents the Angular Gantt Component.
 * ```html
 * <ejs-gantt [dataSource]='data' allowSelection='true' allowSorting='true'></ejs-gantt>
 * ```
 */
@Component({
    selector: 'ejs-gantt',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childColumns: new ContentChild(ColumnsDirective), 
        childAddDialogFields: new ContentChild(AddDialogFieldsDirective), 
        childEditDialogFields: new ContentChild(EditDialogFieldsDirective), 
        childDayWorkingTime: new ContentChild(DayWorkingTimeCollectionDirective), 
        childHolidays: new ContentChild(HolidaysDirective), 
        childEventMarkers: new ContentChild(EventMarkersDirective)
    }
})
@ComponentMixins([ComponentBase])
export class GanttComponent extends Gantt implements IComponentBase {
    public childColumns: any;
    public childAddDialogFields: any;
    public childEditDialogFields: any;
    public childDayWorkingTime: any;
    public childHolidays: any;
    public childEventMarkers: any;
    public tags: string[] = ['columns', 'addDialogFields', 'editDialogFields', 'dayWorkingTime', 'holidays', 'eventMarkers'];
    public dataSourceChange: any;
    /** 
     * The parent task bar template that renders customized parent task bars from the given template.
     * @default null
     */
    @ContentChild('parentTaskbarTemplate')
    @Template()
    public parentTaskbarTemplate: any;
    /** 
     * The milestone template that renders customized milestone task from the given template.
     * @default null
     */
    @ContentChild('milestoneTemplate')
    @Template()
    public milestoneTemplate: any;
    /** 
     * The task bar template that renders customized child task bars from the given template.
     * @default null
     */
    @ContentChild('taskbarTemplate')
    @Template()
    public taskbarTemplate: any;
    @ContentChild('labelSettingsRightLabel')
    @Template()
    public labelSettings_rightLabel: any;
    @ContentChild('labelSettingsLeftLabel')
    @Template()
    public labelSettings_leftLabel: any;
    @ContentChild('labelSettingsTaskLabel')
    @Template()
    public labelSettings_taskLabel: any;
    @ContentChild('tooltipSettingsTaskbar')
    @Template()
    public tooltipSettings_taskbar: any;
    @ContentChild('tooltipSettingsBaseline')
    @Template()
    public tooltipSettings_baseline: any;
    @ContentChild('tooltipSettingsConnectorLine')
    @Template()
    public tooltipSettings_connectorLine: any;
    @ContentChild('tooltipSettingsEditing')
    @Template()
    public tooltipSettings_editing: any;

    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
                let mod = this.injector.get('GanttFilter');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('GanttSelection');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('GanttSort');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('GanttReorder');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('GanttResize');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('GanttEdit');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('GanttDayMarkers');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('GanttToolbar');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('GanttContextMenu');
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

