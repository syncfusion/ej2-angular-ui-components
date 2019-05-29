/**
 * RTE Markdown Sample
 */
import { Component } from '@angular/core';
@Component({
    selector: '<%=dasherize(selector)%>',
    templateUrl: '<%=dasherize(name)%>.component.html',
    styleUrls: ['<%=dasherize(name)%>.component.css']
})

export class <%= classify(name) %>Component {

    // Define a toolbar items
    public tools: object = {
        items: ['Bold', 'Italic', 'StrikeThrough', '|',
        'Formats', 'OrderedList', 'UnorderedList', '|',
        'CreateLink', 'Image', '|',
        'Undo', 'Redo']
    };
    // set markdown mode
    public mode: string = 'Markdown';
}
