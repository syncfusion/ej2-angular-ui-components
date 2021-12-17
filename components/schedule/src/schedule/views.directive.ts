import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';


let input: string[] = ['allowVirtualScrolling', 'cellHeaderTemplate', 'cellTemplate', 'dateFormat', 'dateHeaderTemplate', 'dayHeaderTemplate', 'displayDate', 'displayName', 'endHour', 'eventTemplate', 'firstDayOfWeek', 'firstMonthOfYear', 'group', 'headerIndentTemplate', 'headerRows', 'interval', 'isSelected', 'monthHeaderTemplate', 'monthsCount', 'numberOfWeeks', 'option', 'orientation', 'readonly', 'resourceHeaderTemplate', 'showWeekNumber', 'showWeekend', 'startHour', 'timeFormat', 'timeScale', 'workDays'];
let outputs: string[] = [];
/**
 * `e-views` directive represent a view of the Angular Schedule. 
 * It must be contained in a Schedule component(`ejs-schedule`). 
 * ```html
 * <ejs-schedule>
 *   <e-views>
 *    <e-view option='day' dateFormat='dd MMM'></e-view>
 *    <e-view option='week'></e-view>
 *   </e-views>
 * </ejs-schedule>
 * ```
 */
@Directive({
    selector: 'e-views>e-view',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class ViewDirective extends ComplexBase<ViewDirective> {
    public directivePropList: any;
	


    /** 
     * It is used to allow or disallow the virtual scrolling functionality on Agenda View. This is applicable only on Agenda view.
     * @default false
     */
    public allowVirtualScrolling: any;
    /** 
     * By default, Schedule follows the date-format as per the default culture assigned to it. It is also possible to manually set 
     *  specific date format by using the `dateFormat` property. The format of the date range label in the header bar depends on 
     *  the `dateFormat` value or else based on the locale assigned to the Schedule. 
     *  It gets applied only to the view objects on which it is defined.
     * @default null
     */
    public dateFormat: any;
    /** 
     * Specifies the starting week date at an initial rendering of month view. This property is only applicable for month view. 
     *  If this property value is not set, then the month view will be rendered from the first week of the month. 
     * {% codeBlock src='schedule/displayDate/index.md' %}{% endcodeBlock %}
     * @default null
     */
    public displayDate: any;
    /** 
     * When the same view is customized with different intervals, this property allows the user to set different display name 
     *  for those views.
     * @default null
     */
    public displayName: any;
    /** 
     * It is used to specify the end hour, at which the Schedule ends. It too accepts the time string in a short skeleton format.
     * @default '24:00'
     */
    public endHour: any;
    /** 
     * This option allows the user to set the first day of a week on Schedule. It should be based on the locale set to it and each culture 
     *  defines its own first day of week values. If needed, the user can set it manually on his own by defining the value through 
     *  this property. It usually accepts the integer values, whereby 0 is always denoted as Sunday, 1 as Monday and so on.
     * @default 0
     */
    public firstDayOfWeek: any;
    /** 
     * This property helps render the year view customized months. 
     * By default, it is set to `0`.
     * @default 0
     */
    public firstMonthOfYear: any;
    /** 
     * Allows to set different resource grouping options on all available schedule view modes.
     * @default { byDate: false, byGroupID: true, allowGroupEdit: false, resources:[]}
     */
    public group: any;
    /** 
     * Allows defining the collection of custom header rows to display the year, month, week, date and hour label as an individual row 
     *  on the timeline view of the scheduler.
     * @default []
     */
    public headerRows: any;
    /** 
     * It accepts the number value denoting to include the number of days, weeks, workweeks or months on the defined view type.
     * @default 1
     */
    public interval: any;
    /** 
     * To denote whether the view name given on the `option` is active or not. 
     * It acts similar to the `currentView` property and defines the active view of Schedule.
     * @default false
     */
    public isSelected: any;
    /** 
     * This option allows the user to set the number of months count to be displayed on the Schedule. 
     * {% codeBlock src='schedule/monthsCount/index.md' %}{% endcodeBlock %}
     * @default 12
     * @asptype int
     */
    public monthsCount: any;
    /** 
     * This property customizes the number of weeks that are shown in month view. By default, it shows all weeks in the current month. 
     *  Use displayDate property to customize the starting week of month. 
     * {% codeBlock src='schedule/numberOfWeeks/index.md' %}{% endcodeBlock %}
     * @default 0
     * @asptype int
     */
    public numberOfWeeks: any;
    /** 
     * It accepts the schedule view name, based on which we can define with its related properties in a single object. 
     * The applicable view names are, 
     * * Day 
     * * Week 
     * * WorkWeek 
     * * Month 
     * * Year 
     * * Agenda 
     * * MonthAgenda 
     * * TimelineDay 
     * * TimelineWeek 
     * * TimelineWorkWeek 
     * * TimelineMonth 
     * * TimelineYear
     * @default null
     */
    public option: any;
    /** 
     * It is used to specify the year view rendering orientation on the schedule. 
     * The applicable orientation values are, 
     * * Horizontal 
     * * Vertical
     * @default 'Horizontal'
     */
    public orientation: any;
    /** 
     * When set to `true`, displays a quick popup with cell or event details on single clicking over the cells or on events. 
     *  By default, it is set to `true`. It gets applied only to the view objects on which it is defined.
     * @default false
     */
    public readonly: any;
    /** 
     * When set to `true`, displays the week number of the current view date range.
     * @default false
     */
    public showWeekNumber: any;
    /** 
     * When set to `false`, it hides the weekend days of a week from the Schedule. 
     * The days which are not defined in the working days collection are usually treated as weekend days. 
     * Note: By default, this option is not applicable on `Work Week` view. 
     * For example, if the working days are defined as [1, 2, 3, 4], then the remaining days of that week will be considered as the 
     *  weekend days and will be hidden on all the views.
     * @default true
     */
    public showWeekend: any;
    /** 
     * It is used to specify the starting hour, from which the Schedule starts to display. 
     *  It accepts the time string in a short skeleton format and also, hides the time beyond the specified start time.
     * @default '00:00'
     */
    public startHour: any;
    /** 
     * By default, Schedule follows the time-format as per the default culture assigned to it. 
     * It is also possible to manually set specific time format by using the `timeFormat` property. 
     * {% codeBlock src='schedule/timeFormat/index.md' %}{% endcodeBlock %}
     * @default null
     */
    public timeFormat: any;
    /** 
     * Allows to set different timescale configuration on each applicable view modes such as day, week and work week.
     * @default { enable: true, interval: 60, slotCount: 2, majorSlotTemplate: null, minorSlotTemplate: null }
     */
    public timeScale: any;
    /** 
     * It is used to set the working days on schedule. The only days that are defined in this collection will be rendered on the 
     *  `workWeek` view whereas on other views, it will display all the usual days and simply highlights the working days with different 
     *  shade.
     * @default '[1, 2, 3, 4, 5]'
     * @asptype int[]
     */
    public workDays: any;
    /** 
     * It accepts either the string or HTMLElement as template design content and parse it appropriately before displaying it onto the 
     *  date header cells. The field that can be accessed via this template is `date`. 
     *  It gets applied only to the view objects on which it is defined.
     * @default null
     */
    @ContentChild('dateHeaderTemplate')
    @Template()
    public dateHeaderTemplate: any;
    /** 
     * It accepts either the string or HTMLElement as template design content and parse it appropriately before displaying it onto the 
     *  Year view day cell header. 
     *  This template is only applicable for year view header cells.
     * @default null
     */
    @ContentChild('dayHeaderTemplate')
    @Template()
    public dayHeaderTemplate: any;
    /** 
     * It accepts either the string or HTMLElement as template design content and parse it appropriately before displaying it onto the 
     *  month date cells. 
     *  This template is only applicable for month view day cells.
     * @default null
     */
    @ContentChild('cellHeaderTemplate')
    @Template()
    public cellHeaderTemplate: any;
    /** 
     * The template option which is used to render the customized work cells on the Schedule. Here, the 
     *  template accepts either the string or HTMLElement as template design and then the parsed design is displayed onto the work cells. 
     *  The field accessible via template is `date`. It gets applied only to the view objects on which it is defined.
     * @default null
     */
    @ContentChild('cellTemplate')
    @Template()
    public cellTemplate: any;
    /** 
     * It accepts either the string or HTMLElement as template design content and parse it appropriately before displaying it onto 
     *  the event background. All the event fields mapped to Schedule from dataSource can be accessed within this template code. 
     *  It is similar to that of the `template` option available within the `eventSettings` property, 
     *  whereas it will get applied only on the events of the view to which it is currently being defined.
     * @default null
     */
    @ContentChild('eventTemplate')
    @Template()
    public eventTemplate: any;
    /** 
     * It accepts either the string or HTMLElement as template design content and parse it appropriately before displaying it onto the 
     *  Year view day cell header. 
     *  This template is only applicable for year view header cells.
     * @default null
     */
    @ContentChild('monthHeaderTemplate')
    @Template()
    public monthHeaderTemplate: any;
    /** 
     * The template option which is used to render the customized header cells on the schedule. Here, the 
     *  template accepts either the string or HTMLElement as template design and then the parsed design is displayed onto the header cells. 
     *  All the resource fields mapped within resources can be accessed within this template code. 
     *  It gets applied only to the view objects on which it is defined.
     * @default null
     */
    @ContentChild('resourceHeaderTemplate')
    @Template()
    public resourceHeaderTemplate: any;
    /** 
     * The template option which is used to render the customized header indent cell on the schedule. Here, the 
     *  template accepts either the string or HTMLElement as template design and then the parsed design is displayed onto the header indent cell. 
     *  It gets applied only to the view objects on which it is defined.
     * @default null
     */
    @ContentChild('headerIndentTemplate')
    @Template()
    public headerIndentTemplate: any;
    @ContentChild('timeScaleMinorSlotTemplate')
    @Template()
    public timeScale_minorSlotTemplate: any;
    @ContentChild('timeScaleMajorSlotTemplate')
    @Template()
    public timeScale_majorSlotTemplate: any;
    @ContentChild('groupHeaderTooltipTemplate')
    @Template()
    public group_headerTooltipTemplate: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * View Array Directive
 * @private
 */
@Directive({
    selector: 'ejs-schedule>e-views',
    queries: {
        children: new ContentChildren(ViewDirective)
    },
})
export class ViewsDirective extends ArrayBase<ViewsDirective> {
    constructor() {
        super('views');
    }
}