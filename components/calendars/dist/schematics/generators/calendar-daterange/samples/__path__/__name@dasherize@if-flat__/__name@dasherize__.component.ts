/**
 * Calendar Date Range Sample
 */
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: '<%=dasherize(selector)%>',
    templateUrl: '<%=dasherize(name)%>.component.html',
    styleUrls: ['<%=dasherize(name)%>.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class <%= classify(name) %>Component {
    public minDate: Object = new Date("05/05/2017");
    public maxDate: Object = new Date("05/27/2017");

    onValueChange(args: any):void {
        /*Displays selected date in the label*/
            (<HTMLInputElement>document.getElementById('selected')).textContent = 'Selected Value: ' + args.value.toLocaleDateString();
        }
}