import { Component } from '@angular/core';
/**
 * Icon Tab
 */
@Component({
    selector: '<%=dasherize(selector)%>',
    templateUrl: '<%=dasherize(name)%>.component.html',
    styleUrls: ['<%=dasherize(name)%>.component.css']
})

export class <%= classify(name) %>Component {
    public headerText: Object = [
        { text: 'Twitter', 'iconCss': 'e-twitter', iconPosition: 'top' },
        { text: 'Facebook', 'iconCss': 'e-facebook', iconPosition: 'top' },
        { text: 'WhatsApp', 'iconCss': 'e-whatsapp', iconPosition: 'top' }
      ];
}