/**
 * TimePicker strict mode Sample
 */
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: '<%=dasherize(selector)%>',
    templateUrl: '<%=dasherize(name)%>.component.html',
    styleUrls: ['<%=dasherize(name)%>.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class <%= classify(name) %>Component {
    public strictMode: Boolean = true;
    public min: Object = new Date('3/8/2017 9:00 AM');
    public max: Object = new Date('3/8/2017 11:30 AM');
    public value: Object = new Date('3/8/2017 11:00 AM');
    public placeholder: string = "Select a time";
}