import { Component, ViewChild } from '@angular/core';
import { CheckBoxComponent } from '@syncfusion/ej2-angular-buttons';

/**
 * CheckBox Controller
 */
@Component({
    selector: '<%=dasherize(selector)%>',
    templateUrl: '<%=dasherize(name)%>.component.html',
    styleUrls: ['<%=dasherize(name)%>.component.css']
})

export class <%= classify(name) %>Component {
    @ViewChild('checkbox')
    public checkbox: CheckBoxComponent;

    // function to handle the CheckBox change event
    public changeHandler(): void {
        this.checkbox.label = 'CheckBox: ' + this.checkbox.checked;
    }
 }
