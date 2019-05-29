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
        ranges: [{
            start: 0,
            end: 32,
            color: '#30B32D',
            startWidth: 15,
            endWidth: 15
        },],
        pointers: [{
            value: 10,
            height: 15,
            width: 15,
           // placement: 'Near',
            //offset: 90,
            type: 'Bar'
        }],
        majorTicks: {
            color: '#9E9E9E',
            interval: 10
        },
        minorTicks: {
            color: '#9E9E9E',
            interval: 2
        },
    }];
    constructor() {
        // code
    };
}
