import { Component, ViewChild } from '@angular/core';  
import { EventSettingsModel, View} from '@syncfusion/ej2-angular-schedule';
import { generateObject } from './assets/datasource';

/**
 * Agenda views sample
 */

@Component({
    selector: '<%=dasherize(selector)%>',
    templateUrl: '<%=dasherize(name)%>.component.html',	
    styleUrls: ['<%=dasherize(name)%>.component.css'],
})
export class <%= classify(name) %>Component { 
    public selectedDate: Date = new Date(2018, 1, 15);
    public currentView: View = "Agenda";
    public eventSettings: EventSettingsModel = { dataSource: generateObject() };  
}