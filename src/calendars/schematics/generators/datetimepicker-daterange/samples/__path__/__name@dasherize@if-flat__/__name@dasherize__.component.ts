/**
 * DateTimePicker date range Sample
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
    public date: Date = new Date(this.currentYear, this.currentMonth, 14, 10, 30);
    public minDate: Date = new Date(this.currentYear, this.currentMonth, 7, 10);
    public maxDate: Date = new Date(this.currentYear, this.currentMonth, 27, 22, 30);
    public placeholder: string ="Select a date and time";
}