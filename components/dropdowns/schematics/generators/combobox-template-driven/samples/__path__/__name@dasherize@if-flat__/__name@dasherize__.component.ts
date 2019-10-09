/**
 * ComboBox Template Driven Sample
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

    onreset(element: MouseEvent) : void {
        let parentNode: NodeListOf<HTMLElement> = document.getElementsByClassName('box-form')[0].querySelectorAll('.e-float-text');
        for (let i: number = 0; i < parentNode.length; i++) {
            parentNode[i].classList.remove('e-label-top');
            parentNode[i].classList.add('e-label-bottom');
        }
    }
}
