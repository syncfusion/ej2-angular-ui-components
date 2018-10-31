import { Component, ElementRef, ViewContainerRef, Renderer2, Injector, ChangeDetectionStrategy, ValueProvider } from '@angular/core';
import { ComponentBase, ComponentMixins, IComponentBase, applyMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { Button } from '@syncfusion/ej2-buttons';



export const inputs: string[] = ['content','cssClass','disabled','enablePersistence','enableRtl','iconCss','iconPosition','isPrimary','isToggle','locale'];
export const outputs: string[] = ['created'];
export const twoWays: string[] = [];

/**
 * Represents the Angular Button Component.
 * ```html
 * <button ejs-button>Button</button>
 * ```
 */
@Component({
    selector: '[ejs-button]',
    inputs: inputs,
    outputs: outputs,
    template: '<ng-content></ng-content>',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {

    }
})
@ComponentMixins([ComponentBase])
export class ButtonComponent extends Button implements IComponentBase {




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

