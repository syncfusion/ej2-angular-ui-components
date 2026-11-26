import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, QueryList, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { WorkflowDesigner } from '@syncfusion/ej2-workflow-designer';



export const inputs: string[] = ['aiAssistSettings','canvasToolbarSettings','connectionDefaults','enablePersistence','enableRtl','executionLogSettings','executionSettings','height','locale','propertyPanelSettings','stepCollectionSettings','stepDefaults','toolbarSettings','width','workflowSettings','workflowStepTemplate'];
export const outputs: string[] = ['aiAssistCompleted','aiAssistFailed','approvalRequested','beforeConnect','beforeItemRemove','beforeRequestSend','beforeStepExecute','created','credentialRequested','customExecutionRequested','executionCompleted','executionStarted','executionStepCompleted','executionStepFailed','executionStepStarted','notifyRequested','selectionChanged','workflowChanged'];
export const twoWays: string[] = [''];

/**
 * Workflow Designer Component
 * ```html
 * <ej-workflow-designer></ej-workflow-designer>
 * ```
 */
@Component({
    selector: 'ejs-workflowdesigner',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    queries: {
    }
})
@ComponentMixins([ComponentBase])
export class WorkflowDesignerComponent extends WorkflowDesigner implements IComponentBase {
    public declare context : any;
    public declare tagObjects: any;
	declare aiAssistCompleted: any;
	declare aiAssistFailed: any;
	declare approvalRequested: any;
	declare beforeConnect: any;
	declare beforeItemRemove: any;
	declare beforeRequestSend: any;
	declare beforeStepExecute: any;
	declare created: any;
	declare credentialRequested: any;
	declare customExecutionRequested: any;
	declare executionCompleted: any;
	declare executionStarted: any;
	declare executionStepCompleted: any;
	declare executionStepFailed: any;
	declare executionStepStarted: any;
	declare notifyRequested: any;
	declare selectionChanged: any;
	public declare workflowChanged: any;

    public tags: string[] = [''];

    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];

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
        
        this.context.ngAfterContentChecked(this);
    }

    public declare registerEvents: (eventList: string[]) => void;
    public declare addTwoWay: (propList: string[]) => void;
}


