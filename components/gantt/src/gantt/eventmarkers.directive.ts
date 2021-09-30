import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['cssClass', 'day', 'label'];
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
     * Define custom css class for event marker to customize line and label.
     * @default null
     */
    public cssClass: any;
    /** 
     * Defines day of event marker.
     * @default null
     */
    public day: any;
    /** 
     * Defines label of event marker.
     * @default null
     */
    public label: any;

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