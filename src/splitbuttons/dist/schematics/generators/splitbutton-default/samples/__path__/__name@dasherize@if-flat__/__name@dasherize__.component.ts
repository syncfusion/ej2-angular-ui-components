import { Component } from '@angular/core';
import { ItemModel, MenuEventArgs } from '@syncfusion/ej2-angular-<%=dasherize(selector)%>s';

/**
 * Toolbar integration Menu Controller
 */
@Component({
    selector: 'splitbutton',
    templateUrl: '<%=dasherize(name)%>.component.html',
    styleUrls: ['<%=dasherize(name)%>.component.css']
})

export class <%= classify(name) %>Component {
    //SplitButton items definition
    public items: ItemModel[] = [
        {
            text: 'Paste',
            iconCss: 'e-btn-icons e-paste'
        },
        {
            text: 'Paste Special',
            iconCss: 'e-btn-icons e-paste-special'
        },
        {
            text: 'Paste as Formula',
            iconCss: 'e-btn-icons e-paste-formula'
        },
        {
            text: 'Paste as Hyperlink',
            iconCss: 'e-btn-icons e-paste-hyperlink'
        }
    ];

    public addDisabled(args: MenuEventArgs): void {
        if (args.item.text !== 'Paste') {
            args.element.classList.add('e-disabled');
        }
    }
}
