import { Component, ElementRef, ViewContainerRef, Renderer2, Injector, ChangeDetectionStrategy, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, ComponentMixins, IComponentBase, applyMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { Splitter } from '@syncfusion/ej2-layouts';

import { PanesDirective } from './panesettings.directive';

export const inputs: string[] = ['cssClass','enablePersistence','enableRtl','enabled','height','locale','orientation','paneSettings','separatorSize','width'];
export const outputs: string[] = ['created','resizeStart','resizeStop','resizing'];
export const twoWays: string[] = [''];

/**
 * Represents the Angular Splitter Component
 * ```html
 * <ejs-splitter></ejs-splitter>
 * ```
 */
@Component({
    selector: 'ejs-splitter',
    inputs: inputs,
    outputs: outputs,
    template: `<ng-content select='div'></ng-content>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childPaneSettings: new ContentChild(PanesDirective)
    }
})
@ComponentMixins([ComponentBase])
export class SplitterComponent extends Splitter implements IComponentBase {
    public childPaneSettings: any;
    public tags: string[] = ['paneSettings'];


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

