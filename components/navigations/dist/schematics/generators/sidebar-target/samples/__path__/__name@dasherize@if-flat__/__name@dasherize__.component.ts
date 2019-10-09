/**
 * Sidebar target Sample
 */
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { Sidebar } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: '<%=dasherize(selector)%>',
    templateUrl: '<%=dasherize(name)%>.component.html',
    styleUrls: ['<%=dasherize(name)%>.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class <%= classify(name) %>Component {
    @ViewChild('sidebar')
    public sidebar: Sidebar;
    public type: string = 'Push';
    public target: string = '.content';
 
    btnClick(){
        this.sidebar.show();
        document.getElementById("toggle").style.visibility = "hidden";
    }
    closeClick() {
        this.sidebar.hide();
        document.getElementById("toggle").style.visibility = "visible";
    }
}