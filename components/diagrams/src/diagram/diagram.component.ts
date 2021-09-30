import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, QueryList, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { Diagram } from '@syncfusion/ej2-diagrams';
import { Template } from '@syncfusion/ej2-angular-base';
import { LayersDirective } from './layers.directive';
import { CustomCursorsDirective } from './customcursor.directive';
import { ConnectorsDirective } from './connectors.directive';
import { NodesDirective } from './nodes.directive';

export const inputs: string[] = ['addInfo','annotationTemplate','backgroundColor','bridgeDirection','commandManager','connectorDefaults','connectors','constraints','contextMenuSettings','customCursor','dataSourceSettings','diagramSettings','drawingObject','enablePersistence','enableRtl','getConnectorDefaults','getCustomCursor','getCustomProperty','getCustomTool','getDescription','getNodeDefaults','height','historyManager','layers','layout','locale','mode','nodeDefaults','nodeTemplate','nodes','pageSettings','rulerSettings','scrollSettings','selectedItems','serializationSettings','setNodeTemplate','snapSettings','tool','tooltip','updateSelection','userHandleTemplate','width'];
export const outputs: string[] = ['animationComplete','click','collectionChange','commandExecute','connectionChange','contextMenuBeforeItemRender','contextMenuClick','contextMenuOpen','created','dataLoaded','doubleClick','dragEnter','dragLeave','dragOver','drop','expandStateChange','fixedUserHandleClick','historyChange','historyStateChange','keyDown','keyUp','mouseEnter','mouseLeave','mouseOver','onImageLoad','onUserHandleMouseDown','onUserHandleMouseEnter','onUserHandleMouseLeave','onUserHandleMouseUp','positionChange','propertyChange','rotateChange','scrollChange','segmentCollectionChange','selectionChange','sizeChange','sourcePointChange','targetPointChange','textEdit'];
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
        childCustomCursor: new ContentChild(CustomCursorsDirective), 
        childConnectors: new ContentChild(ConnectorsDirective), 
        childNodes: new ContentChild(NodesDirective)
    }
})
@ComponentMixins([ComponentBase])
export class DiagramComponent extends Diagram implements IComponentBase {
    public context : any;
    public tagObjects: any;
	animationComplete: any;
	click: any;
	collectionChange: any;
	commandExecute: any;
	connectionChange: any;
	contextMenuBeforeItemRender: any;
	contextMenuClick: any;
	contextMenuOpen: any;
	created: any;
	dataLoaded: any;
	doubleClick: any;
	dragEnter: any;
	dragLeave: any;
	dragOver: any;
	drop: any;
	expandStateChange: any;
	fixedUserHandleClick: any;
	historyChange: any;
	historyStateChange: any;
	keyDown: any;
	keyUp: any;
	mouseEnter: any;
	mouseLeave: any;
	mouseOver: any;
	onImageLoad: any;
	onUserHandleMouseDown: any;
	onUserHandleMouseEnter: any;
	onUserHandleMouseLeave: any;
	onUserHandleMouseUp: any;
	positionChange: any;
	propertyChange: any;
	rotateChange: any;
	scrollChange: any;
	segmentCollectionChange: any;
	selectionChange: any;
	sizeChange: any;
	sourcePointChange: any;
	targetPointChange: any;
	public textEdit: any;
    public childLayers: QueryList<LayersDirective>;
    public childCustomCursor: QueryList<CustomCursorsDirective>;
    public childConnectors: QueryList<ConnectorsDirective>;
    public childNodes: QueryList<NodesDirective>;
    public tags: string[] = ['layers', 'customCursor', 'connectors', 'nodes'];
    /** 
     * Customizes the annotation template
     * @default undefined
     */
    @ContentChild('annotationTemplate')
    @Template()
    public annotationTemplate: any;
    /** 
     * Customizes the node template
     * @default undefined
     */
    @ContentChild('nodeTemplate')
    @Template()
    public nodeTemplate: any;
    /** 
     * This property represents the template content of a user handle. The user can define any HTML element as a template.
     * @default undefined
     */
    @ContentChild('userHandleTemplate')
    @Template()
    public userHandleTemplate: any;

    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
                let mod = this.injector.get('DiagramsHierarchicalTree');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('DiagramsMindMap');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('DiagramsRadialTree');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('DiagramsComplexHierarchicalTree');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('DiagramsDataBinding');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('DiagramsSnapping');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('DiagramsPrintAndExport');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('DiagramsBpmnDiagrams');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('DiagramsSymmetricLayout');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('DiagramsConnectorBridging');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('DiagramsUndoRedo');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('DiagramsLayoutAnimation');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('DiagramsDiagramContextMenu');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('DiagramsLineRouting');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('DiagramsConnectorEditing');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('DiagramsBlazorTooltip');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('DiagramsLineDistribution');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
        this.context  = new ComponentBase();
    }

    public ngOnInit() {
        this.context.ngOnInit(this);
    }

    public ngAfterViewInit(): void {
        this.context.ngAfterViewInit(this);
    }

    public ngOnDestroy(): void {
        this.context.ngOnDestroy(this);
    }

    public ngAfterContentChecked(): void {
        this.tagObjects[0].instance = this.childLayers;
        
	    if (this.childCustomCursor) {
            this.tagObjects[1].instance = this.childCustomCursor;
        }
        
	    if (this.childConnectors) {
            this.tagObjects[2].instance = this.childConnectors;
        }
        
	    if (this.childNodes) {
            this.tagObjects[3].instance = this.childNodes;
        }
        this.context.ngAfterContentChecked(this);
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

