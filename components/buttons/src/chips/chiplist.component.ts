import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { ChipList } from '@syncfusion/ej2-buttons';

import { ChipsDirective } from './chips.directive';

export const inputs: string[] = ['avatarIconCss','avatarText','chips','cssClass','enableDelete','enablePersistence','enableRtl','enabled','leadingIconCss','locale','selectedChips','selection','text','trailingIconCss'];
export const outputs: string[] = ['click','created','delete'];
export const twoWays: string[] = [''];

/**
 * Represents the Essential JS 2 Angular ChipList Component.
 * ```html
 * <ejs-chiplist></ejs-chiplist>
 * ```
 */
@Component({
    selector: 'ejs-chiplist',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childChips: new ContentChild(ChipsDirective)
    }
})
@ComponentMixins([ComponentBase])
export class ChipListComponent extends ChipList implements IComponentBase {
    public childChips: any;
    public tags: string[] = ['chips'];


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

