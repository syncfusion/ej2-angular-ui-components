import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageDirective, MessagesDirective } from './messages.directive';
import { ChatUIComponent } from './chatui.component';

/**
 * NgModule definition for the ChatUI component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        ChatUIComponent,
        MessageDirective,
        MessagesDirective
    ],
    exports: [
        ChatUIComponent,
        MessageDirective,
        MessagesDirective
    ]
})
export class ChatUIModule { }