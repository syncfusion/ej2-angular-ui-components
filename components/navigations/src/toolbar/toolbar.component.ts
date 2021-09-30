import { Component, ElementRef, ViewContainerRef, Renderer2, Injector, ChangeDetectionStrategy, QueryList, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, ComponentMixins, IComponentBase, applyMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { Toolbar } from '@syncfusion/ej2-navigations';

import { ItemsDirective } from './items.directive';

export const inputs: string[] = ['allowKeyboard','cssClass','enableCollision','enableHtmlSanitizer','enablePersistence','enableRtl','height','items','locale','overflowMode','scrollStep','width'];
export const outputs: string[] = ['beforeCreate','clicked','created','destroyed'];
export const twoWays: string[] = [''];

/**
 * Represents the Angular Toolbar Component.
 * ```html
 * <ejs-toolbar></ejs-toolbar>
 * ```
 */
@Component({
    selector: 'ejs-toolbar',
    inputs: inputs,
    outputs: outputs,
    template: `<ng-content select='div'></ng-content>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childItems: new ContentChild(ItemsDirective)
    }
})
@ComponentMixins([ComponentBase])
export class ToolbarComponent extends Toolbar implements IComponentBase {
    public containerContext : any;
    public tagObjects: any;
	beforeCreate: any;
	clicked: any;
	created: any;
	public destroyed: any;
    public childItems: QueryList<ItemsDirective>;
    public tags: string[] = ['items'];

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
        this.tagObjects[0].instance = this.childItems;
        this.containerContext.ngAfterContentChecked(this);
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

