import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewDirective, ViewsDirective } from './views.directive';
import { AIAssistViewComponent } from './aiassistview.component';

/**
 * NgModule definition for the AIAssistView component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        AIAssistViewComponent,
        ViewDirective,
        ViewsDirective
    ],
    exports: [
        AIAssistViewComponent,
        ViewDirective,
        ViewsDirective
    ]
})
export class AIAssistViewModule { }