/**
 * DateRangePicker date range Sample
 */
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: '<%=dasherize(selector)%>',
    templateUrl: '<%=dasherize(name)%>.component.html',
    styleUrls: ['<%=dasherize(name)%>.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class <%= classify(name) %>Component {
    public today: Date = new Date();
    public currentYear: number = this.today.getFullYear();
    public currentMonth: number = this.today.getMonth();
    public currentDay: number = this.today.getDate();
    public date: Date = new Date(this.currentYear, this.currentMonth, 14);
    public minDate: Date = new Date(this.currentYear, this.currentMonth, 7);
    public maxDate: Date = new Date(this.currentYear, this.currentMonth, 27);
    public placeholder: string = "Select a range";
}