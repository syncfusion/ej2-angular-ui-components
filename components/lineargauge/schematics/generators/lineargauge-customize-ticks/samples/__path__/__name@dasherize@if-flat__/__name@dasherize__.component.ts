//tslint:disable
import { Component } from '@angular/core';

/**
 * Sample for Default linear gauge
 */
@Component({
    selector: '<%=dasherize(selector)%>',
    templateUrl: '<%=dasherize(name)%>.component.html',
    styleUrls: ['<%=dasherize(name)%>.component.css']
})
export class <%= classify(name) %>Component {
    // initializing Axes
    public Axes: Object[] = [{
        majorTicks: {
            color: 'blue',
            interval: 10
        },
        minorTicks: {
            color: 'red',
            interval: 2
        },
        pointers: [{
            value: 10,
            height: 0,
            width: 0,
        }],
    }];
    constructor() {
        // code
    };
}
