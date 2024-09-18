import { NgModule, ValueProvider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewDirective, ViewsDirective } from './views.directive';
import { AIAssistViewComponent } from './aiassistview.component';
import { AIAssistViewModule } from './aiassistview.module';





/**
 * NgModule definition for the AIAssistView component with providers.
 */
@NgModule({
    imports: [CommonModule, AIAssistViewModule],
    exports: [
        AIAssistViewModule
    ],
    providers:[
        
    ]
})
export class AIAssistViewAllModule { }