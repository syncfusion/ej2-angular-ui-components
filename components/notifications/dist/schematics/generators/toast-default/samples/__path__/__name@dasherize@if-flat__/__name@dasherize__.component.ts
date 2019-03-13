import { Component, ViewChild } from '@angular/core';
import { ToastComponent } from '@syncfusion/ej2-angular-notifications';

/**
 * Default Toast
 */
@Component({
    selector: '<%=dasherize(selector)%>',
    templateUrl: '<%=dasherize(name)%>.component.html',
    styleUrls: ['<%=dasherize(name)%>.component.css']
})

export class <%= classify(name) %>Component {
    @ViewChild('toast') public toastObj: ToastComponent;
    public position: Object = { X: 'Right' };
  
    public onCreate(): void {
      setTimeout(() => {
        this.toastObj.show();
      }, 200);
    }
}