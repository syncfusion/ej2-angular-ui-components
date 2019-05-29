/**
 * DateTimePicker multi selection Sample
 */
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: '<%=dasherize(selector)%>',
    templateUrl: '<%=dasherize(name)%>.component.html',
    styleUrls: ['<%=dasherize(name)%>.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class <%= classify(name) %>Component {
    public placeholder: string ="Select a date and time";
    public year: number = new Date().getFullYear();
    public month: number = new Date().getMonth();
    public isMultiSelection: boolean = true;
    public dates: Date[] = [new Date(this.year, this.month, 10), new Date(this.year, this.month, 15), new Date(this.year, this.month, 25)];
}