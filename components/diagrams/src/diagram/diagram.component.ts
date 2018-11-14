import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { Diagram } from '@syncfusion/ej2-diagrams';

import { LayersDirective } from './layers.directive';
import { ConnectorsDirective } from './connectors.directive';
import { NodesDirective } from './nodes.directive';

export const inputs: string[] = ['addInfo','backgroundColor','bridgeDirection','commandManager','connectors','constraints','contextMenuSettings','dataSourceSettings','drawingObject','enablePersistence','enableRtl','getConnectorDefaults','getCustomCursor','getCustomProperty','getCustomTool','getDescription','getNodeDefaults','height','layers','layout','locale','mode','nodes','pageSettings','rulerSettings','scrollSettings','selectedItems','setNodeTemplate','snapSettings','tool','tooltip','width'];
export const outputs: string[] = ['animationComplete','click','collectionChange','connectionChange','contextMenuClick','contextMenuOpen','created','dataLoaded','doubleClick','dragEnter','dragLeave','dragOver','drop','historyChange','mouseEnter','mouseLeave','mouseOver','positionChange','propertyChange','rotateChange','scrollChange','selectionChange','sizeChange','sourcePointChange','targetPointChange','textEdit'];
export const twoWays: string[] = [''];

/**
 * Diagram Component
 * ```html
 * <ej-diagram></ej-diagram>
 * ```
 */
@Component({
    selector: 'ejs-diagram',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childLayers: new ContentChild(LayersDirective), 
        childConnectors: new ContentChild(ConnectorsDirective), 
        childNodes: new ContentChild(NodesDirective)
    }
})
@ComponentMixins([ComponentBase])
export class DiagramComponent extends Diagram implements IComponentBase {
    public childLayers: any;
    public childConnectors: any;
    public childNodes: any;
    public tags: string[] = ['layers', 'connectors', 'nodes'];


    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try{ this.injectedModules.push(this.injector.get('DiagramsHierarchicalTree')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('DiagramsMindMap')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('DiagramsRadialTree')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('DiagramsComplexHierarchicalTree')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('DiagramsDataBinding')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('DiagramsSnapping')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('DiagramsPrintAndExport')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('DiagramsBpmnDiagrams')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('DiagramsSymmetricLayout')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('DiagramsConnectorBridging')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('DiagramsUndoRedo')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('DiagramsLayoutAnimation')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('DiagramsDiagramContextMenu')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('DiagramsConnectorEditing')); }catch {} 

        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
    }

    public ngOnInit() {
    }

    public ngAfterViewInit(): void {
    }

    public ngOnDestroy(): void {
    }

    public ngAfterContentChecked(): void {
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

