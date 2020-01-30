import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { Kanban } from '@syncfusion/ej2-kanban';
import { Template } from '@syncfusion/ej2-angular-base';
import { ColumnsDirective } from './columns.directive';
import { StackedHeadersDirective } from './stackedheaders.directive';

export const inputs: string[] = ['allowDragAndDrop','allowKeyboard','cardSettings','columns','constraintType','cssClass','dataSource','enablePersistence','enableRtl','enableTooltip','height','keyField','locale','query','stackedHeaders','swimlaneSettings','tooltipTemplate','width'];
export const outputs: string[] = ['actionBegin','actionComplete','actionFailure','cardClick','cardDoubleClick','cardRendered','columnRendered','created','dataBinding','dataBound','drag','dragStart','dragStop'];
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
    public childColumns: any;
    public childStackedHeaders: any;
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

    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];

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

