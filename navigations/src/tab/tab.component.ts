import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { Tab } from '@syncfusion/ej2-navigations';

import { TabItemsDirective } from './items.directive';

export const inputs: string[] = ['animation','cssClass','enablePersistence','enableRtl','headerPlacement','height','heightAdjustMode','items','locale','overflowMode','selectedItem','showCloseButton','width'];
export const outputs: string[] = ['added','adding','created','destroyed','removed','removing','selected','selecting'];
export const twoWays: string[] = [''];

/**
 * Represents the EJ2 Angular Tab Component.
 * ```html
 * <ejs-tab overflowMode= 'Popup'></ejs-tab>
 * ```
 */
@Component({
    selector: 'ejs-tab',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childItems: new ContentChild(TabItemsDirective)
    }
})
@ComponentMixins([ComponentBase])
export class TabComponent extends Tab implements IComponentBase {
    public childItems: any;
    public tags: string[] = ['items'];


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

