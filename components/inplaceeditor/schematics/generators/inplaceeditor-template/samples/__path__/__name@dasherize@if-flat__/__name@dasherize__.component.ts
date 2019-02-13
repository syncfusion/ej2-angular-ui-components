import { Component, ViewChild } from '@angular/core';
import { ActionEventArgs, InPlaceEditorComponent } from '@syncfusion/ej2-angular-inplace-editor';
/**
 * Template - In-place Editor
 */
@Component({
    selector: '<%=dasherize(selector)%>',
    templateUrl: '<%=dasherize(name)%>.component.html',
    styleUrls: ['<%=dasherize(name)%>.component.css']
})

export class <%= classify(name) %>Component {
    @ViewChild('editor') editObj: InPlaceEditorComponent;

    public onActionBegin(e: ActionEventArgs): void {
        const value: string = (<HTMLInputElement>this.editObj.element.querySelector('#date')).value;
        this.editObj.value = value;
        e.value = value;
    }
}