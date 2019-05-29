import { Component, ViewChild } from '@angular/core'; 
import {
  ScheduleComponent, View, TimeScaleModel, EventSettingsModel
}  from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './assets/datasource';

/**
 * time scale sample
 */

@Component({
  selector: '<%=dasherize(selector)%>',
  templateUrl: '<%=dasherize(name)%>.component.html',
  styleUrls: ['<%=dasherize(name)%>.component.css'],
})

export class <%= classify(name) %>Component {
    public selectedDate: Date = new Date(2018, 1, 15);
    public timeScale: TimeScaleModel = { enable: true, interval: 60, slotCount: 6 };
    public eventSettings: EventSettingsModel = { dataSource: scheduleData};
    public currentView: View = 'Week'; 
}