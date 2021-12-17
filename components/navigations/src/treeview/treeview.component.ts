import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, QueryList, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { TreeView } from '@syncfusion/ej2-navigations';
import { Template } from '@syncfusion/ej2-angular-base';


export const inputs: string[] = ['allowDragAndDrop','allowEditing','allowMultiSelection','allowTextWrap','animation','autoCheck','checkedNodes','cssClass','disabled','dragArea','enableHtmlSanitizer','enablePersistence','enableRtl','expandOn','expandedNodes','fields','fullRowNavigable','fullRowSelect','loadOnDemand','locale','nodeTemplate','selectedNodes','showCheckBox','sortOrder'];
export const outputs: string[] = ['actionFailure','created','dataBound','dataSourceChanged','destroyed','drawNode','keyPress','nodeChecked','nodeChecking','nodeClicked','nodeCollapsed','nodeCollapsing','nodeDragStart','nodeDragStop','nodeDragging','nodeDropped','nodeEdited','nodeEditing','nodeExpanded','nodeExpanding','nodeSelected','nodeSelecting'];
export const twoWays: string[] = [''];

/**
 * TreeView component is used to represent the hierarchical data in tree like structure with advanced functions to perform edit, drag and drop, selection with check-box and more.
 * ```html
 * <ej-treeview allowDragAndDrop='true'></ej-treeview>
 * ```
 */
@Component({
    selector: 'ejs-treeview',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {

    }
})
@ComponentMixins([ComponentBase])
export class TreeViewComponent extends TreeView implements IComponentBase {
    public context : any;
    public tagObjects: any;
	actionFailure: any;
	created: any;
	dataBound: any;
	dataSourceChanged: any;
	destroyed: any;
	drawNode: any;
	keyPress: any;
	nodeChecked: any;
	nodeChecking: any;
	nodeClicked: any;
	nodeCollapsed: any;
	nodeCollapsing: any;
	nodeDragStart: any;
	nodeDragStop: any;
	nodeDragging: any;
	nodeDropped: any;
	nodeEdited: any;
	nodeEditing: any;
	nodeExpanded: any;
	nodeExpanding: any;
	nodeSelected: any;
	public nodeSelecting: any;


    /** 
     * Specifies a template to render customized content for all the nodes. If the `nodeTemplate` property 
     * is set, the template content overrides the displayed node text. The property accepts template string 
     * [template string](https://ej2.syncfusion.com/documentation/common/template-engine/) 
     * or HTML element ID holding the content. For more information on template concept, refer to 
     * [Template](../../treeview/template/).
     * @default null
     */
    @ContentChild('nodeTemplate')
    @Template()
    public nodeTemplate: any;

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

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

