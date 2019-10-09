/**
 * Gantt default Sample
 */
import { Component } from '@angular/core';

@Component({
    selector: '<%=dasherize(selector)%>',
    templateUrl: '<%=dasherize(name)%>.component.html',
    styleUrls: ['<%=dasherize(name)%>.component.css']
})

export class <%= classify(name) %>Component {

    // Define an array of JSON data
    public data: Object[] = [];
}
