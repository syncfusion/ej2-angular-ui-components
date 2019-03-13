import { Component, ViewEncapsulation } from '@angular/core';
import { MultiSelectComponent } from '@syncfusion/ej2-angular-dropdowns';
@Component({
    selector: '<%=dasherize(selector)%>',
    templateUrl: '<%=dasherize(name)%>.component.html',
    styleUrls: ['<%=dasherize(name)%>.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class <%= classify(name) %>Component {
    // define the JSON of data
    public sportsData: Object[] = [
        { Id: 'Game1', Game: 'American Football' },
        { Id: 'Game2', Game: 'Badminton' },
        { Id: 'Game3', Game: 'Basketball' },
        { Id: 'Game4', Game: 'Cricket' },
        { Id: 'Game5', Game: 'Football' },
        { Id: 'Game6', Game: 'Golf' },
        { Id: 'Game7', Game: 'Hockey' },
        { Id: 'Game8', Game: 'Rugby' },
        { Id: 'Game9', Game: 'Snooker' },
        { Id: 'Game10', Game: 'Tennis' }
    ];
    // maps the appropriate column to fields property
    public fields: Object = { text: 'Game', value: 'Id' };
    // set the placeholder to MultiSelect input element
    public waterMark: string = 'Favorite Sports';    
    // set the type of mode for how to visualized the selected items in input element.
    public box : string = 'Box';
}
