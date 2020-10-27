import { NgModule, ValueProvider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayerDirective, LayersDirective } from './layers.directive';
import { CustomCursorDirective, CustomCursorsDirective } from './customcursor.directive';
import { ConnectorFixedUserHandleDirective, ConnectorFixedUserHandlesDirective } from './connector-fixeduserhandle.directive';
import { ConnectorAnnotationDirective, ConnectorAnnotationsDirective } from './connector-annotation.directive';
import { ConnectorDirective, ConnectorsDirective } from './connectors.directive';
import { NodeFixedUserHandleDirective, NodeFixedUserHandlesDirective } from './node-fixeduserhandle.directive';
import { NodeAnnotationDirective, NodeAnnotationsDirective } from './node-annotation.directive';
import { PortDirective, PortsDirective } from './ports.directive';
import { NodeDirective, NodesDirective } from './nodes.directive';
import { DiagramComponent } from './diagram.component';
import { DiagramModule } from './diagram.module';
import {HierarchicalTree, MindMap, RadialTree, ComplexHierarchicalTree, DataBinding, Snapping, PrintAndExport, BpmnDiagrams, SymmetricLayout, ConnectorBridging, UndoRedo, LayoutAnimation, DiagramContextMenu, LineRouting, ConnectorEditing, BlazorTooltip, LineDistribution} from '@syncfusion/ej2-diagrams'


export const HierarchicalTreeService: ValueProvider = { provide: 'DiagramsHierarchicalTree', useValue: HierarchicalTree};
export const MindMapService: ValueProvider = { provide: 'DiagramsMindMap', useValue: MindMap};
export const RadialTreeService: ValueProvider = { provide: 'DiagramsRadialTree', useValue: RadialTree};
export const ComplexHierarchicalTreeService: ValueProvider = { provide: 'DiagramsComplexHierarchicalTree', useValue: ComplexHierarchicalTree};
export const DataBindingService: ValueProvider = { provide: 'DiagramsDataBinding', useValue: DataBinding};
export const SnappingService: ValueProvider = { provide: 'DiagramsSnapping', useValue: Snapping};
export const PrintAndExportService: ValueProvider = { provide: 'DiagramsPrintAndExport', useValue: PrintAndExport};
export const BpmnDiagramsService: ValueProvider = { provide: 'DiagramsBpmnDiagrams', useValue: BpmnDiagrams};
export const SymmetricLayoutService: ValueProvider = { provide: 'DiagramsSymmetricLayout', useValue: SymmetricLayout};
export const ConnectorBridgingService: ValueProvider = { provide: 'DiagramsConnectorBridging', useValue: ConnectorBridging};
export const UndoRedoService: ValueProvider = { provide: 'DiagramsUndoRedo', useValue: UndoRedo};
export const LayoutAnimationService: ValueProvider = { provide: 'DiagramsLayoutAnimation', useValue: LayoutAnimation};
export const DiagramContextMenuService: ValueProvider = { provide: 'DiagramsDiagramContextMenu', useValue: DiagramContextMenu};
export const LineRoutingService: ValueProvider = { provide: 'DiagramsLineRouting', useValue: LineRouting};
export const ConnectorEditingService: ValueProvider = { provide: 'DiagramsConnectorEditing', useValue: ConnectorEditing};
export const BlazorTooltipService: ValueProvider = { provide: 'DiagramsBlazorTooltip', useValue: BlazorTooltip};
export const LineDistributionService: ValueProvider = { provide: 'DiagramsLineDistribution', useValue: LineDistribution};

/**
 * NgModule definition for the Diagram component with providers.
 */
@NgModule({
    imports: [CommonModule, DiagramModule],
    exports: [
        DiagramModule
    ],
    providers:[
        HierarchicalTreeService,
        MindMapService,
        RadialTreeService,
        ComplexHierarchicalTreeService,
        DataBindingService,
        SnappingService,
        PrintAndExportService,
        BpmnDiagramsService,
        SymmetricLayoutService,
        ConnectorBridgingService,
        UndoRedoService,
        LayoutAnimationService,
        DiagramContextMenuService,
        LineRoutingService,
        ConnectorEditingService,
        BlazorTooltipService,
        LineDistributionService
    ]
})
export class DiagramAllModule { }