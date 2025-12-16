import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['cssClass', 'day', 'label', 'top'];
let outputs: string[] = [];
/**
 * `e-event-markers` directive represent a event marker collection in Gantt. 
 * It must be contained in a Gantt component(`ejs-gantt`). 
 * ```html
 * <ejs-gantt [dataSource]='data' allowSelection='true' allowSorting='true'> 
 *   <e-event-markers>
 *     <e-event-marker day='02/10/2018' label='Project Starts'></e-event-marker>
 *   </e-event-markers>
 * </ejs-gantt>
 * ```
 */
@Directive({
    selector: 'ejs-gantt>e-event-markers>e-event-marker',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class EventMarkerDirective extends ComplexBase<EventMarkerDirective> {
    public directivePropList: any;
	


    /** 
     * Specifies a custom CSS class for the event marker. 
     * This can be used to apply custom styles to the line and label of the marker.
     * @default null
     */
    public cssClass: any;
    /** 
     * Specifies the date or day of the event marker. 
     * The value can be a `Date` object or a date string.
     * @default null
     */
    public day: any;
    /** 
     * Specifies the label for the event marker.
     * @default null
     */
    public label: any;
    /** 
     * Vertical offset of the label from the timeline top. 
     * Must be in pixels (e.g., '50px'). Invalid values default to '50px'. 
     * Negative values are normalized to '50px'.
     * @default '50px'
     */
    public top: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * EventMarker Array Directive
 * @private
 */
@Directive({
    selector: 'ejs-gantt>e-event-markers',
    queries: {
        children: new ContentChildren(EventMarkerDirective)
    },
})
export class EventMarkersDirective extends ArrayBase<EventMarkersDirective> {
    constructor() {
        super('eventmarkers');
    }
}