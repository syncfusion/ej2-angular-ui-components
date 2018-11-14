import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, Renderer2, Injector, ValueProvider } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { PivotView } from '@syncfusion/ej2-pivotview';



export const inputs: string[] = ['allowCalculatedField','allowConditionalFormatting','allowExcelExport','allowPdfExport','currencyCode','dataSource','enablePersistence','enableRtl','enableValueSorting','enableVirtualization','gridSettings','groupingBarSettings','height','locale','pivotValues','showFieldList','showGroupingBar','showValuesButton','width'];
export const outputs: string[] = ['beforeExport','cellClick','created','dataBound','destroyed','enginePopulated','enginePopulating','load','onFieldDropped','datasourceChange'];
export const twoWays: string[] = ['datasource'];

/**
 * `ej-pivotview` represents the Angular PivotView Component.
 * ```html
 * <ej-pivotview></ej-pivotview>
 * ```
 */
@Component({
    selector: 'ejs-pivotview',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {

    }
})
export class PivotViewComponent extends PivotView implements IComponentBase {


    public datasourceChange: any;

    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try{ this.injectedModules.push(this.injector.get('PivotViewGroupingBar')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('PivotViewFieldList')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('PivotViewCalculatedField')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('PivotViewConditionalFormatting')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('PivotViewVirtualScroll')); }catch {} 

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

applyMixins(PivotViewComponent, [ComponentBase]);
