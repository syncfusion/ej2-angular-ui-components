import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, QueryList, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { Kanban } from '@syncfusion/ej2-kanban';
import { Template } from '@syncfusion/ej2-angular-base';
import { ColumnsDirective } from './columns.directive';
import { StackedHeadersDirective } from './stackedheaders.directive';

export const inputs: string[] = ['allowDragAndDrop','allowKeyboard','cardSettings','columns','constraintType','cssClass','dataSource','dialogSettings','enablePersistence','enableRtl','enableTooltip','externalDropId','height','keyField','locale','query','showEmptyColumn','sortSettings','stackedHeaders','swimlaneSettings','tooltipTemplate','width'];
export const outputs: string[] = ['actionBegin','actionComplete','actionFailure','cardClick','cardDoubleClick','cardRendered','created','dataBinding','dataBound','dataSourceChanged','dataStateChange','dialogClose','dialogOpen','drag','dragStart','dragStop','queryCellInfo'];
export const twoWays: string[] = [''];

/**
 * `ej-kanban` represents the Angular Kanban Component.
 * ```html
 * <ejs-kanban></ejs-kanban>
 * ```
 */
@Component({
    selector: 'ejs-kanban',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childColumns: new ContentChild(ColumnsDirective), 
        childStackedHeaders: new ContentChild(StackedHeadersDirective)
    }
})
@ComponentMixins([ComponentBase])
export class KanbanComponent extends Kanban implements IComponentBase {
    public context : any;
    public tagObjects: any;
	actionBegin: any;
	actionComplete: any;
	actionFailure: any;
	cardClick: any;
	cardDoubleClick: any;
	cardRendered: any;
	created: any;
	dataBinding: any;
	dataBound: any;
	dataSourceChanged: any;
	dataStateChange: any;
	dialogClose: any;
	dialogOpen: any;
	drag: any;
	dragStart: any;
	dragStop: any;
	public queryCellInfo: any;
    public childColumns: QueryList<ColumnsDirective>;
    public childStackedHeaders: QueryList<StackedHeadersDirective>;
    public tags: string[] = ['columns', 'stackedHeaders'];
    /** 
     * Defines the template content to card’s tooltip. The property works by enabling the ‘enableTooltip’ property.
     * @default null
     */
    @ContentChild('tooltipTemplate')
    @Template()
    public tooltipTemplate: any;
    @ContentChild('columnsTemplate')
    @Template()
    public columns_template: any;
    @ContentChild('swimlaneSettingsTemplate')
    @Template()
    public swimlaneSettings_template: any;
    @ContentChild('cardSettingsTemplate')
    @Template()
    public cardSettings_template: any;
    @ContentChild('dialogSettingsTemplate')
    @Template()
    public dialogSettings_template: any;

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
        this.tagObjects[0].instance = this.childColumns;
        if (this.childStackedHeaders) {
                    this.tagObjects[1].instance = this.childStackedHeaders as any;
                }
        this.context.ngAfterContentChecked(this);
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

