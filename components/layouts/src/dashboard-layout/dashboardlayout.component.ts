import { Component, ElementRef, ViewContainerRef, Renderer2, Injector, ChangeDetectionStrategy, QueryList, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, ComponentMixins, IComponentBase, applyMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { DashboardLayout } from '@syncfusion/ej2-layouts';

import { PanelsDirective } from './panels.directive';

export const inputs: string[] = ['allowDragging','allowFloating','allowPushing','allowResizing','cellAspectRatio','cellSpacing','columns','draggableHandle','enableHtmlSanitizer','enablePersistence','enableRtl','locale','mediaQuery','panels','resizableHandles','showGridLines'];
export const outputs: string[] = ['change','created','destroyed','drag','dragStart','dragStop','resize','resizeStart','resizeStop'];
export const twoWays: string[] = [''];

/**
 * Represents the Essential JS 2 Angular DashboardLayout Component.
 * ```html
 * <ejs-dashboardlayout></ejs-dashboardlayout>
 * ```
 */
@Component({
    selector: 'ejs-dashboardlayout',
    inputs: inputs,
    outputs: outputs,
    template: `<ng-content select='div'></ng-content>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childPanels: new ContentChild(PanelsDirective)
    }
})
@ComponentMixins([ComponentBase])
export class DashboardLayoutComponent extends DashboardLayout implements IComponentBase {
    public containerContext : any;
    public tagObjects: any;
	change: any;
	created: any;
	destroyed: any;
	drag: any;
	dragStart: any;
	dragStop: any;
	resize: any;
	resizeStart: any;
	public resizeStop: any;
    public childPanels: QueryList<PanelsDirective>;
    public tags: string[] = ['panels'];

    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];

        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
        this.containerContext  = new ComponentBase();
    }

    public ngOnInit() {
        this.containerContext.ngOnInit(this);
    }

    public ngAfterViewInit(): void {
        this.containerContext.ngAfterViewInit(this);
    }

    public ngOnDestroy(): void {
        this.containerContext.ngOnDestroy(this);
    }

    public ngAfterContentChecked(): void {
        this.tagObjects[0].instance = this.childPanels;
        this.containerContext.ngAfterContentChecked(this);
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

