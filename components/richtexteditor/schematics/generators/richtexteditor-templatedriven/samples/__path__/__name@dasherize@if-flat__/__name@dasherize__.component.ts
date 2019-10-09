/**
 * RTE Inline Sample
 */
import { Component, ViewChild } from '@angular/core';
import { RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
    selector: '<%=dasherize(selector)%>',
    templateUrl: '<%=dasherize(name)%>.component.html',
    styleUrls: ['<%=dasherize(name)%>.component.css']
})

export class <%= classify(name) %>Component {

    public value: string = null;
    @ViewChild('fromRTE') rteEle: RichTextEditorComponent;

    rteCreated(): void {
        this.rteEle.element.focus();
    }

    onSubmit(): void {
      alert('Form submitted successfully');
    }
}
