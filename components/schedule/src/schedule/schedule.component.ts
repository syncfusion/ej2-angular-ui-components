import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, QueryList, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { Schedule } from '@syncfusion/ej2-schedule';
import { Template } from '@syncfusion/ej2-angular-base';
import { ViewsDirective } from './views.directive';
import { ResourcesDirective } from './resources.directive';
import { HeaderRowsDirective } from './headerrows.directive';

export const inputs: string[] = ['agendaDaysCount','allowDragAndDrop','allowInline','allowKeyboardInteraction','allowMultiCellSelection','allowMultiDrag','allowMultiRowSelection','allowResizing','calendarMode','cellHeaderTemplate','cellTemplate','cssClass','currentView','dateFormat','dateHeaderTemplate','dayHeaderTemplate','editorTemplate','enableAdaptiveUI','enableAllDayScroll','enablePersistence','enableRecurrenceValidation','enableRtl','endHour','eventDragArea','eventSettings','firstDayOfWeek','firstMonthOfYear','group','headerIndentTemplate','headerRows','height','hideEmptyAgendaDays','locale','maxDate','minDate','monthHeaderTemplate','monthsCount','quickInfoOnSelectionEnd','quickInfoTemplates','readonly','resourceHeaderTemplate','resources','rowAutoHeight','selectedDate','showHeaderBar','showQuickInfo','showTimeIndicator','showWeekNumber','showWeekend','startHour','timeFormat','timeScale','timezone','timezoneDataSource','views','weekRule','width','workDays','workHours'];
export const outputs: string[] = ['actionBegin','actionComplete','actionFailure','cellClick','cellDoubleClick','created','dataBinding','dataBound','destroyed','drag','dragStart','dragStop','eventClick','eventRendered','hover','moreEventsClick','navigating','popupClose','popupOpen','renderCell','resizeStart','resizeStop','resizing','select','currentViewChange','selectedDateChange'];
export const twoWays: string[] = ['currentView', 'selectedDate'];

/**
 * `ej-schedule` represents the Angular Schedule Component.
 * ```html
 * <ejs-schedule></ejs-schedule>
 * ```
 */
@Component({
    selector: 'ejs-schedule',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childViews: new ContentChild(ViewsDirective), 
        childResources: new ContentChild(ResourcesDirective), 
        childHeaderRows: new ContentChild(HeaderRowsDirective)
    }
})
@ComponentMixins([ComponentBase])
export class ScheduleComponent extends Schedule implements IComponentBase {
    public context : any;
    public tagObjects: any;
	actionBegin: any;
	actionComplete: any;
	actionFailure: any;
	cellClick: any;
	cellDoubleClick: any;
	created: any;
	dataBinding: any;
	dataBound: any;
	destroyed: any;
	drag: any;
	dragStart: any;
	dragStop: any;
	eventClick: any;
	eventRendered: any;
	hover: any;
	moreEventsClick: any;
	navigating: any;
	popupClose: any;
	popupOpen: any;
	renderCell: any;
	resizeStart: any;
	resizeStop: any;
	resizing: any;
	select: any;
	currentViewChange: any;
	public selectedDateChange: any;
    public childViews: QueryList<ViewsDirective>;
    public childResources: QueryList<ResourcesDirective>;
    public childHeaderRows: QueryList<HeaderRowsDirective>;
    public tags: string[] = ['views', 'resources', 'headerRows'];
    /** 
     * It accepts either the string or HTMLElement as template design content and parse it appropriately before displaying it onto 
     * the date header cells. The field that can be accessed via this template is `date`.
     * 
     * {% codeBlock src='schedule/dateHeaderTemplate/index.md' %}{% endcodeBlock %}
     *     
     * @default null
     */
    @ContentChild('dateHeaderTemplate')
    @Template()
    public dateHeaderTemplate: any;
    /** 
     * It accepts either the string or HTMLElement as template design content and parse it appropriately before displaying it onto 
     * the day header cells. This template is only applicable for year view header cells.
     * 
     * {% codeBlock src='schedule/dayHeaderTemplate/index.md' %}{% endcodeBlock %}
     *     
     * @default null
     */
    @ContentChild('dayHeaderTemplate')
    @Template()
    public dayHeaderTemplate: any;
    /** 
     * The template option which is used to render the customized work cells on the Schedule. Here, the template accepts either 
     *  the string or HTMLElement as template design and then the parsed design is displayed onto the work cells. 
     *  The fields accessible via template are as follows. 
     * * date 
     * * groupIndex 
     * * type
     * 
     * Refer to the below code snippet.
     *
     *{% codeBlock src='schedule/cellTemplate/index.md' %}{% endcodeBlock %}
     *     
     * @default null
     */
    @ContentChild('cellTemplate')
    @Template()
    public cellTemplate: any;
    /** 
     * It accepts either the string or HTMLElement as template design content and parse it appropriately before displaying it onto 
     * the month date cells. This template is only applicable for month view day cells.
     * 
     * {% codeBlock src='schedule/cellHeaderTemplate/index.md' %}{% endcodeBlock %}
     *     
     * @default null
     */
    @ContentChild('cellHeaderTemplate')
    @Template()
    public cellHeaderTemplate: any;
    @ContentChild('eventSettingsTooltipTemplate')
    @Template()
    public eventSettings_tooltipTemplate: any;
    @ContentChild('eventSettingsTemplate')
    @Template()
    public eventSettings_template: any;
    /** 
     * The template option to render the customized editor window. The form elements defined within this template should be accompanied 
     *  with `e-field` class, so as to fetch and process it from internally.
     * 
     * {% codeBlock src='schedule/editorTemplate/index.md' %}{% endcodeBlock %}
     *     
     * @default null
     */
    @ContentChild('editorTemplate')
    @Template()
    public editorTemplate: any;
    /** 
     * It accepts either the string or HTMLElement as template design content and parse it appropriately before displaying it onto 
     * the month header cells. This template is only applicable for year view header cells.
     * 
     * {% codeBlock src='schedule/monthHeaderTemplate/index.md' %}{% endcodeBlock %}
     *     
     * @default null
     */
    @ContentChild('monthHeaderTemplate')
    @Template()
    public monthHeaderTemplate: any;
    @ContentChild('timeScaleMinorSlotTemplate')
    @Template()
    public timeScale_minorSlotTemplate: any;
    @ContentChild('timeScaleMajorSlotTemplate')
    @Template()
    public timeScale_majorSlotTemplate: any;
    /** 
     * Template option to customize the resource header bar. Here, the template accepts either 
     *  the string or HTMLElement as template design and then the parsed design is displayed onto the resource header cells. 
     * The following can be accessible via template. 
     * * resource - All the resource fields. 
     * * resourceData - object collection of current resource.
     * 
     * Refer to the below code snippet.
     *
     *{% codeBlock src='schedule/resourceHeaderTemplate/index.md' %}{% endcodeBlock %}
     *     
     * @default null
     */
    @ContentChild('resourceHeaderTemplate')
    @Template()
    public resourceHeaderTemplate: any;
    /** 
     * Template option to customize the header indent bar. Here, the template accepts either 
     *  the string or HTMLElement as template design and then the parsed design is displayed onto the header indent cell.
     * 
     * Refer to the below code snippet.
     *
     *{% codeBlock src='schedule/headerIndentTemplate/index.md' %}{% endcodeBlock %}
     *     
     * @default null
     */
    @ContentChild('headerIndentTemplate')
    @Template()
    public headerIndentTemplate: any;
    @ContentChild('quickInfoTemplatesHeader')
    @Template()
    public quickInfoTemplates_header: any;
    @ContentChild('quickInfoTemplatesContent')
    @Template()
    public quickInfoTemplates_content: any;
    @ContentChild('quickInfoTemplatesFooter')
    @Template()
    public quickInfoTemplates_footer: any;
    @ContentChild('groupHeaderTooltipTemplate')
    @Template()
    public group_headerTooltipTemplate: any;

    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
                let mod = this.injector.get('ScheduleDay');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ScheduleWeek');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ScheduleWorkWeek');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ScheduleMonth');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ScheduleYear');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ScheduleAgenda');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ScheduleMonthAgenda');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ScheduleTimelineViews');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ScheduleTimelineMonth');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ScheduleTimelineYear');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ScheduleResize');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ScheduleDragAndDrop');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ScheduleExcelExport');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ScheduleICalendarExport');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ScheduleICalendarImport');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('SchedulePrint');
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
        this.tagObjects[0].instance = this.childViews;
        
	    if (this.childResources) {
            this.tagObjects[1].instance = this.childResources;
        }
        
	    if (this.childHeaderRows) {
            this.tagObjects[2].instance = this.childHeaderRows;
        }
        this.context.ngAfterContentChecked(this);
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

