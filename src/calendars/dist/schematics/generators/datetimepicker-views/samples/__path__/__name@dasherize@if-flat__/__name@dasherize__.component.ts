/**
 * DateTimePicker <%=dasherize(selector)%> Sample
 */
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'views',
    templateUrl: '<%=dasherize(name)%>.component.html',
    styleUrls: ['<%=dasherize(name)%>.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class <%= classify(name) %>Component {
    public placeholder: string ="Select a date and time";
    public start: string = "Decade";
    public depth: string = "Year";
}