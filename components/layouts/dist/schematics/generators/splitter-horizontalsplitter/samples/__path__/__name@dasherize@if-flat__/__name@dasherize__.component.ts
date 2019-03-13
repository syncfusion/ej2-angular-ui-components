import { Component, ViewEncapsulation } from '@angular/core';

/**
 * Horizontal Splitter sample
 */
@Component({
    selector: '<%=dasherize(selector)%>',
    templateUrl: '<%=dasherize(name)%>.component.html',
    styleUrls: ['<%=dasherize(name)%>.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class <%= classify(name) %>Component { }