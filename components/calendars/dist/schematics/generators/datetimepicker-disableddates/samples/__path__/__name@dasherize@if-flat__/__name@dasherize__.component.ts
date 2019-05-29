/**
 * DateTimePicker disabled dates Sample
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
    onLoad(args: any) {
        /*Date need to be disabled*/
        if (args.date.getDay() === 0 || args.date.getDay() === 6) {
          args.isDisabled = true;
        }
      }
}