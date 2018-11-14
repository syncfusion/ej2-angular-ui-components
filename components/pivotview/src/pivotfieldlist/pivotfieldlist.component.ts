import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, Renderer2, Injector, ValueProvider } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { PivotFieldList } from '@syncfusion/ej2-pivotview';



export const inputs: string[] = ['allowCalculatedField','cssClass','dataSource','enablePersistence','enableRtl','locale','renderMode','showValuesButton','target'];
export const outputs: string[] = ['created','dataBound','destroyed','enginePopulated','enginePopulating','load','onFieldDropped'];
export const twoWays: string[] = [''];

/**
 * `ej-pivotfieldlist` represents the Angular PivotFieldList Component.
 * ```html
 * <ej-pivotfieldlist></ej-pivotfieldlist>
 * ```
 */
@Component({
    selector: 'ejs-pivotfieldlist',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {

    }
})
export class PivotFieldListComponent extends PivotFieldList implements IComponentBase {




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

applyMixins(PivotFieldListComponent, [ComponentBase]);
