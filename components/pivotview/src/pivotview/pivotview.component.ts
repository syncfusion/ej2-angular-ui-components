import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { PivotView } from '@syncfusion/ej2-pivotview';
import { Template } from '@syncfusion/ej2-angular-base';


export const inputs: string[] = ['allowCalculatedField','allowConditionalFormatting','allowDataCompression','allowDeferLayoutUpdate','allowDrillThrough','allowExcelExport','allowNumberFormatting','allowPdfExport','cellTemplate','chartSettings','currencyCode','dataSourceSettings','displayOption','editSettings','enablePersistence','enableRtl','enableValueSorting','enableVirtualization','gridSettings','groupingBarSettings','height','hyperlinkSettings','loadOnDemandInMemberEditor','locale','maxNodeLimitInMemberEditor','maxRowsInDrillThrough','pivotValues','showFieldList','showGroupingBar','showToolbar','showTooltip','showValuesButton','spinnerTemplate','toolbar','width'];
export const outputs: string[] = ['aggregateCellInfo','beforeExport','beginDrillThrough','cellClick','cellSelected','cellSelecting','chartSeriesCreated','conditionalFormatting','created','dataBound','destroyed','drill','drillThrough','enginePopulated','enginePopulating','fetchReport','fieldListRefreshed','hyperlinkCellClick','load','loadReport','memberFiltering','newReport','onFieldDropped','onPdfCellRender','removeReport','renameReport','saveReport','toolbarClick','toolbarRender'];
export const twoWays: string[] = [];

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
@ComponentMixins([ComponentBase])
export class PivotViewComponent extends PivotView implements IComponentBase {



    /** 
     * The template option which is used to render the pivot cells on the pivotview. Here, the template accepts either 
     *  the string or HTMLElement as template design and then the parsed design is displayed onto the pivot cells.
     * @default null
     */
    @ContentChild('cellTemplate')
    @Template()
    public cellTemplate: any;

    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
                let mod = this.injector.get('PivotViewGroupingBar');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('PivotViewFieldList');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('PivotViewCalculatedField');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('PivotViewConditionalFormatting');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('PivotViewVirtualScroll');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('PivotViewDrillThrough');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('PivotViewToolbar');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('PivotViewPivotChart');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('PivotViewPDFExport');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('PivotViewExcelExport');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('PivotViewNumberFormatting');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

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

