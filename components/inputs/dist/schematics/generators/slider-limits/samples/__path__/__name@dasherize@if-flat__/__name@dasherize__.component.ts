import { Component } from '@angular/core';
import { LimitDataModel, TooltipDataModel } from '@syncfusion/ej2-inputs';

@Component({
  selector: '<%=dasherize(selector)%>',
  templateUrl: '<%=dasherize(name)%>.component.html',
  styleUrls: ['<%=dasherize(name)%>.component.css']
})
export class <%= classify(name) %>Component {
  tooltip: TooltipDataModel = { placement: 'Before', showOn: 'Focus', isVisible: true };
  limits: LimitDataModel = { enabled: true, minStart: 10, minEnd: 40, maxStart: 60, maxEnd: 90 };
  value = [20, 80];
}
