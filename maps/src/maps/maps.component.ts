import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { Maps } from '@syncfusion/ej2-maps';

import { LayersDirective } from './layers.directive';
import { AnnotationsDirective } from './annotations.directive';

export const inputs: string[] = ['annotations','background','baseLayerIndex','border','centerPosition','description','enablePersistence','enableRtl','format','height','layers','legendSettings','locale','mapsArea','margin','projectionType','tabIndex','theme','titleSettings','useGroupingSeparator','width','zoomSettings'];
export const outputs: string[] = ['animationComplete','annotationRendering','beforePrint','bubbleClick','bubbleMouseMove','bubbleRendering','click','dataLabelRendering','doubleClick','itemHighlight','itemSelection','layerRendering','load','loaded','markerClick','markerMouseMove','markerRendering','resize','rightClick','shapeHighlight','shapeRendering','shapeSelected','tooltipRender','dataSourceChange'];
export const twoWays: string[] = ['dataSource'];

/**
 * Represents Maps Component
 * ```html
 * <ej-maps></ej-maps>
 * ```
 */
@Component({
    selector: 'ejs-maps',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childLayers: new ContentChild(LayersDirective), 
        childAnnotations: new ContentChild(AnnotationsDirective)
    }
})
@ComponentMixins([ComponentBase])
export class MapsComponent extends Maps implements IComponentBase {
    public childLayers: any;
    public childAnnotations: any;
    public tags: string[] = ['layers', 'annotations'];
    public dataSourceChange: any;

    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try{ this.injectedModules.push(this.injector.get('MapsBubble')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('MapsLegend')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('MapsMarker')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('MapsHighlight')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('MapsSelection')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('MapsMapsTooltip')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('MapsZoom')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('MapsDataLabel')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('MapsNavigationLine')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('MapsAnnotations')); }catch {} 

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

