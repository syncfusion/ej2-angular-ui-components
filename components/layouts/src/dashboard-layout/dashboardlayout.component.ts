import { Component, ElementRef, ViewContainerRef, Renderer2, Injector, ChangeDetectionStrategy, ValueProvider, ContentChild } from '@angular/core';
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
    public childPanels: any;
    public tags: string[] = ['panels'];


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

