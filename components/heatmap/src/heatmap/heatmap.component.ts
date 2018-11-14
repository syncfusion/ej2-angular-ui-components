import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { HeatMap } from '@syncfusion/ej2-heatmap';



export const inputs: string[] = ['cellSettings','dataSource','enablePersistence','enableRtl','height','legendSettings','locale','margin','paletteSettings','renderingMode','showTooltip','theme','titleSettings','width','xAxis','yAxis'];
export const outputs: string[] = ['cellClick','created','load','tooltipRender'];
export const twoWays: string[] = [''];

/**
 * `ejs-heatmap` represents the Angular HeatMap Component.
 * ```html
 * <ejs-heatmap></ejs-heatmap>
 * ```
 */
@Component({
    selector: 'ejs-heatmap',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        
    }
})
export class HeatMapComponent extends HeatMap implements IComponentBase {

    public tags: string[] = [''];


    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try{ this.injectedModules.push(this.injector.get('HeatMapLegend')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('HeatMapTooltip')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('HeatMapAdaptor')); }catch {} 

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

applyMixins(HeatMapComponent, [ComponentBase]);
