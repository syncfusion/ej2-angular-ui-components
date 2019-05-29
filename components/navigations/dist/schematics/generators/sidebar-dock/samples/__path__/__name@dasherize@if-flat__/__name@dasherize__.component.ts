/**
 * Sidebar dock Sample
 */
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { Sidebar } from '@syncfusion/ej2-angular-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

@Component({
    selector: '<%=dasherize(selector)%>',
    templateUrl: '<%=dasherize(name)%>.component.html',
    styleUrls: ['<%=dasherize(name)%>.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class <%= classify(name) %>Component {
    @ViewChild('dockBar')
    public dockBar: Sidebar;
    public enableDock: boolean = true;
    public width: string = '220px';
    public dockSize: string = '72px';

     positionChange(event: any) {
        debugger
          this.dockBar.position = event.currentTarget.defaultValue == "left" ? "Left" : "Right";
      }
      toggleClick() {
          this.dockBar.toggle();
      }
}