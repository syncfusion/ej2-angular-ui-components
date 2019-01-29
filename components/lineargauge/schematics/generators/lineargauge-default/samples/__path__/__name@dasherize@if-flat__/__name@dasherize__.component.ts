//tslint:disable
import { Component } from '@angular/core';
@Component({
    selector: '<%=dasherize(selector)%>',
    templateUrl: '<%=dasherize(name)%>.component.html',
    styleUrls: ['<%=dasherize(name)%>.component.css']
})
export class <%= classify(name) %>Component {
    
    // initializing Axes
    public Axes: Object[] = [{
        pointers: [{
            value: 10,
            height: 15,
            width: 15,
            placement: 'Near',
            offset: -50,
            markerType: 'Triangle'
        }],
        majorTicks: {
            color: '#9E9E9E',
            interval: 10
        },
        minorTicks: {
            color: '#9E9E9E',
            interval: 2
        },
        labelStyle: {
            offset: 48
        }
    }];
    constructor() {
        // code
    };
}
