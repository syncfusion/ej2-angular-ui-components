/**
 * TimePicker format Sample
 */
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
    selector: '<%=dasherize(selector)%>',
    templateUrl: '<%=dasherize(name)%>.component.html',
    styleUrls: ['<%=dasherize(name)%>.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class <%= classify(name) %>Component {
  public value: Date = new Date();
  public interval: number = 60;
  public customFormat : string = 'HH:mm';
  public placeholder: string = "Select a time";
}