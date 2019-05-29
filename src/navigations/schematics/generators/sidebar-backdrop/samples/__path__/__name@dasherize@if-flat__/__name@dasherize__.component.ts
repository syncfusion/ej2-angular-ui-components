/**
 * Sidebar backdrop Sample
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
    @ViewChild('sidebar')
    public sidebar: Sidebar;
     public showBackdrop: boolean = true;
     public type: string = 'Push';
     public closeOnDocumentClick: boolean = true;
 
    closeClick(): void {
         this.sidebar.hide();
     };
 
     toggleClick():void{
       this.sidebar.show();
     }
}