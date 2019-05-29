import { Component } from '@angular/core';
import { TooltipDataModel, TicksDataModel } from '@syncfusion/ej2-inputs';

@Component({
  selector: '<%=dasherize(selector)%>',
  templateUrl: '<%=dasherize(name)%>.component.html',
  styleUrls: ['<%=dasherize(name)%>.component.css']
})
export class <%= classify(name) %>Component {
  tooltip: TooltipDataModel = { placement: 'Before', showOn: 'Focus', isVisible: true };
  value = [20, 80];
  ticks: TicksDataModel = {
    placement: 'Before', largeStep: 20, smallStep: 5, showSmallTicks: true
  };
}
