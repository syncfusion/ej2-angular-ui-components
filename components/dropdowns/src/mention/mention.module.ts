import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentionComponent } from './mention.component';

/**
 * NgModule definition for the Mention component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        MentionComponent
    ],
    exports: [
        MentionComponent
    ]
})
export class MentionModule { }