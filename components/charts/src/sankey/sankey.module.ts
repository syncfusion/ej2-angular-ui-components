import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SankeyNodeDirective, SankeyNodesCollectionDirective } from './nodes.directive';
import { SankeyLinkDirective, SankeyLinksCollectionDirective } from './links.directive';
import { SankeyComponent } from './sankey.component';

/**
 * NgModule definition for the Sankey component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        SankeyComponent,
        SankeyNodeDirective,
        SankeyNodesCollectionDirective,
        SankeyLinkDirective,
        SankeyLinksCollectionDirective
    ],
    exports: [
        SankeyComponent,
        SankeyNodeDirective,
        SankeyNodesCollectionDirective,
        SankeyLinkDirective,
        SankeyLinksCollectionDirective
    ]
})
export class SankeyModule { }