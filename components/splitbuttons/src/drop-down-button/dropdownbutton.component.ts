import { Component, ElementRef, ViewContainerRef, Renderer2, Injector, ChangeDetectionStrategy, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, ComponentMixins, IComponentBase, applyMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { DropDownButton } from '@syncfusion/ej2-splitbuttons';

import { DropDownButtonItemsDirective } from './items.directive';

export const inputs: string[] = ['content','cssClass','disabled','enableHtmlSanitizer','enablePersistence','enableRtl','iconCss','iconPosition','items','locale','target'];
export const outputs: string[] = ['beforeClose','beforeItemRender','beforeOpen','close','created','open','select'];
export const twoWays: string[] = [];

/**
 * Represents the Angular DropDownButton Component.
 * ```html
 * <button ejs-dropdownbutton>DropDownButton</button>
 * ```
 */
@Component({
    selector: '[ejs-dropdownbutton]',
    inputs: inputs,
    outputs: outputs,
    template: `<ng-content ></ng-content>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childItems: new ContentChild(DropDownButtonItemsDirective)
    }
})
@ComponentMixins([ComponentBase])
export class DropDownButtonComponent extends DropDownButton implements IComponentBase {
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

