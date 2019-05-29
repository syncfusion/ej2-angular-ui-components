/**
 * AutoComplete Template Driven Sample
 */
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: '<%=dasherize(selector)%>',
    templateUrl: '<%=dasherize(name)%>.component.html',
    styleUrls: ['<%=dasherize(name)%>.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class <%= classify(name) %>Component {
    public autoSkillsetData: string[] = [
        'ASP.NET', 'ActionScript', 'Basic',
        'C++' , 'C#' , 'dBase' , 'Delphi' ,
        'ESPOL' , 'F#' , 'FoxPro' , 'Java',
        'J#' , 'Lisp' , 'Logo' , 'PHP'
    ];
    public autoDrivenPlaceholder: String = 'Select book';

    public autoskillname: string =  null;

    onfocus(element: FocusEvent) : void {
        let target: HTMLInputElement = element.target as HTMLInputElement;
        let parentNode: HTMLElement = target.parentNode as HTMLElement;
        if (parentNode.classList.contains('e-input-in-wrap')) {
            parentNode = (parentNode.parentNode as HTMLElement);
        }
        parentNode.classList.add('e-input-focus');
        parentNode.querySelector('.e-float-text').classList.add('e-label-top');
        parentNode.querySelector('.e-float-text').classList.remove('e-label-bottom');
    }
}
