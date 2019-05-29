import { Component, ViewChild } from '@angular/core';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
/**
 * Default Button Controller
 */
@Component({
    selector: '<%=dasherize(selector)%>',
    templateUrl: '<%=dasherize(name)%>.component.html',
    styleUrls: ['<%=dasherize(name)%>.component.css']
})

export class <%= classify(name) %>Component {
    @ViewChild('toggleBtn')
    public toggleBtn: ButtonComponent;

    // Toggle button click event handler
    private btnClick(): void {
        if (this.toggleBtn.element.classList.contains('e-active')) {
            this.toggleBtn.content = 'Play';
            this.toggleBtn.iconCss = 'e-btn-sb-icons e-play-icon';
        } else {
            this.toggleBtn.content = 'Pause';
            this.toggleBtn.iconCss = 'e-btn-sb-icons e-pause-icon';
        }
    }
}
