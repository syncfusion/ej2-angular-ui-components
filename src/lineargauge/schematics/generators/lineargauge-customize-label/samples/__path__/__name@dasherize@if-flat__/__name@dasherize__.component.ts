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
        labelStyle: {
            format: '{value}%',
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
