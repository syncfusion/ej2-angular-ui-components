/**
 * RTE Inline Sample
 */
import { Component } from '@angular/core';

@Component({
    selector: '<%=dasherize(selector)%>',
    templateUrl: '<%=dasherize(name)%>.component.html',
    styleUrls: ['<%=dasherize(name)%>.component.css']
})

export class <%= classify(name) %>Component {

    // Define a toolbar items
    public toolbarSettings: Object = {
        items: ['Bold', 'Italic', 'Underline',
            'Formats', '-', 'Alignments', 'OrderedList', 'UnorderedList',
            'CreateLink']
    };
    // Set the format dropdown width
    public format: Object = {
        width: 'auto'
    };
    // Set the font family dropdown width
    public fontFamily: Object = {
        width: 'auto'
    };
    // Enable inline mode
    public inlineMode: object = { enable: true, onSelection: true };
}
