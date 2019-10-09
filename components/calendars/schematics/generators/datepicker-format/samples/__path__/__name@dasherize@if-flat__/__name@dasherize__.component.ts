/**
 * DatePicker format Sample
 */
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { Calendar } from '@syncfusion/ej2-calendars';

@Component({
    selector: '<%=dasherize(selector)%>',
    templateUrl: '<%=dasherize(name)%>.component.html',
    styleUrls: ['<%=dasherize(name)%>.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class <%= classify(name) %>Component {
    public date: Object = new Date();
  public format: string = 'dd-MMM-yy';
  public placeholder: string ="Select a date";
  @ViewChild('datepick')
  public dateObj: Calendar;
  changeFormat() {
    let dateFormat: string = (document.getElementById('dateformats') as HTMLSelectElement).value;
    this.format = dateFormat;
    this.dateObj.dataBind();
  }
}