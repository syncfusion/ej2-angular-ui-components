import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { Overview } from '@syncfusion/ej2-diagrams';



export const inputs: string[] = ['enablePersistence','enableRtl','height','locale','sourceID','width'];
export const outputs: string[] = ['created'];
export const twoWays: string[] = [''];

/**
 * Overview Component
 * ```html
 * <ej-overview></ej-overview>
 * ```
 */
@Component({
    selector: 'ejs-overview',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        
    }
})
@ComponentMixins([ComponentBase])
export class OverviewComponent extends Overview implements IComponentBase {

    public tags: string[] = [''];


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

