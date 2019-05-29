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
            height: 0,
            width: 0,
        }],
        majorTicks: {
            color: '#9E9E9E',
            interval: 10
        },
        minorTicks: {
            color: '#9E9E9E',
            interval: 2
        }
    }];
    public Annotation: Object = [{
        content: '<div id="pointer" style="width:70px"><h1 style="font-size:14px;">10 MPH</h1></div>',
        axisIndex: 0,
        axisValue: 10,
        x: 10,
        y: -70, zIndex: '1',
    }];
    constructor() {
        // code
    };
}
