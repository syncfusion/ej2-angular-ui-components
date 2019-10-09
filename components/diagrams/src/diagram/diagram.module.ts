import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayerDirective, LayersDirective } from './layers.directive';
import { CustomCursorDirective, CustomCursorsDirective } from './customcursor.directive';
import { ConnectorAnnotationDirective, ConnectorAnnotationsDirective } from './connector-annotation.directive';
import { ConnectorDirective, ConnectorsDirective } from './connectors.directive';
import { NodeAnnotationDirective, NodeAnnotationsDirective } from './node-annotation.directive';
import { PortDirective, PortsDirective } from './ports.directive';
import { NodeDirective, NodesDirective } from './nodes.directive';
import { DiagramComponent } from './diagram.component';

/**
 * NgModule definition for the Diagram component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        DiagramComponent,
        LayerDirective,
        LayersDirective,
        CustomCursorDirective,
        CustomCursorsDirective,
        ConnectorAnnotationDirective,
        ConnectorAnnotationsDirective,
        ConnectorDirective,
        ConnectorsDirective,
        NodeAnnotationDirective,
        NodeAnnotationsDirective,
        PortDirective,
        PortsDirective,
        NodeDirective,
        NodesDirective
    ],
    exports: [
        DiagramComponent,
        LayerDirective,
        LayersDirective,
        CustomCursorDirective,
        CustomCursorsDirective,
        ConnectorAnnotationDirective,
        ConnectorAnnotationsDirective,
        ConnectorDirective,
        ConnectorsDirective,
        NodeAnnotationDirective,
        NodeAnnotationsDirective,
        PortDirective,
        PortsDirective,
        NodeDirective,
        NodesDirective
    ]
})
export class DiagramModule { }