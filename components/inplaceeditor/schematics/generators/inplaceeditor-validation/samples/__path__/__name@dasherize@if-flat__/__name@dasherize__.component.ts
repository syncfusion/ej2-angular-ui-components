import { Component } from '@angular/core';
/**
 * Validation - In-place Editor
 */
@Component({
    selector: '<%=dasherize(selector)%>',
    templateUrl: '<%=dasherize(name)%>.component.html',
    styleUrls: ['<%=dasherize(name)%>.component.css']
})

export class <%= classify(name) %>Component {
    public model: object = { placeholder: 'Select date' };
    public rules: object = {
      Today: { required: true }
    };
}