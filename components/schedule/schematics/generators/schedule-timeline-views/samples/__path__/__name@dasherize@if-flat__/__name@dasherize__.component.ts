import { Component } from '@angular/core';
import { EventSettingsModel, View} from '@syncfusion/ej2-angular-schedule';
import { scheduleData} from './assets/datasource';

/**
 * Timeline views sample
 */

@Component({
  selector: '<%=dasherize(selector)%>',
  templateUrl: '<%=dasherize(name)%>.component.html',
  styleUrls: ['<%=dasherize(name)%>.component.css']
})
export class <%= classify(name) %>Component {
    public currentDate: Date = new Date(2018, 1, 15); 
    public currentView: View = 'TimelineWeek';
    public eventSettings: EventSettingsModel = { dataSource: scheduleData }; 
}