import { Component } from '@angular/core';
import { TooltipDataModel } from '@syncfusion/ej2-inputs';

@Component({
  selector: '<%=dasherize(selector)%>',
  templateUrl: '<%=dasherize(name)%>.component.html',
  styleUrls: ['<%=dasherize(name)%>.component.css']
})
export class <%= classify(name) %>Component {
  tooltip: TooltipDataModel = { placement: 'Before', showOn: 'Focus', isVisible: true };
  value = [20, 80];
}
