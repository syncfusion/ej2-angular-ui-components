import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, QueryList, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { Maps } from '@syncfusion/ej2-maps';

import { LayersDirective } from './layers.directive';
import { AnnotationsDirective } from './annotations.directive';

export const inputs: string[] = ['allowImageExport','allowPdfExport','allowPrint','annotations','background','baseLayerIndex','border','centerPosition','description','enablePersistence','enableRtl','format','height','layers','legendSettings','locale','mapsArea','margin','projectionType','tabIndex','theme','titleSettings','tooltipDisplayMode','useGroupingSeparator','width','zoomSettings'];
export const outputs: string[] = ['animationComplete','annotationRendering','beforePrint','bubbleClick','bubbleMouseMove','bubbleRendering','click','dataLabelRendering','doubleClick','itemHighlight','itemSelection','layerRendering','legendRendering','load','loaded','markerClick','markerClusterClick','markerClusterMouseMove','markerClusterRendering','markerMouseMove','markerRendering','pan','resize','rightClick','shapeHighlight','shapeRendering','shapeSelected','tooltipRender','tooltipRenderComplete','zoom','dataSourceChange'];
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
    public context : any;
    public tagObjects: any;
	animationComplete: any;
	annotationRendering: any;
	beforePrint: any;
	bubbleClick: any;
	bubbleMouseMove: any;
	bubbleRendering: any;
	click: any;
	dataLabelRendering: any;
	doubleClick: any;
	itemHighlight: any;
	itemSelection: any;
	layerRendering: any;
	legendRendering: any;
	load: any;
	loaded: any;
	markerClick: any;
	markerClusterClick: any;
	markerClusterMouseMove: any;
	markerClusterRendering: any;
	markerMouseMove: any;
	markerRendering: any;
	pan: any;
	resize: any;
	rightClick: any;
	shapeHighlight: any;
	shapeRendering: any;
	shapeSelected: any;
	tooltipRender: any;
	tooltipRenderComplete: any;
	zoom: any;
	public dataSourceChange: any;
    public childLayers: QueryList<LayersDirective>;
    public childAnnotations: QueryList<AnnotationsDirective>;
    public tags: string[] = ['layers', 'annotations'];

    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
                let mod = this.injector.get('MapsBubble');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('MapsLegend');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('MapsMarker');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('MapsHighlight');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('MapsSelection');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('MapsMapsTooltip');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('MapsZoom');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('MapsDataLabel');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('MapsNavigationLine');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('MapsAnnotations');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('MapsPrint');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('MapsPdfExport');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('MapsImageExport');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
        this.context  = new ComponentBase();
    }

    public ngOnInit() {
        this.context.ngOnInit(this);
    }

    public ngAfterViewInit(): void {
        this.context.ngAfterViewInit(this);
    }

    public ngOnDestroy(): void {
        this.context.ngOnDestroy(this);
    }

    public ngAfterContentChecked(): void {
        this.tagObjects[0].instance = this.childLayers;
        if (this.childAnnotations) {
                    this.tagObjects[1].instance = this.childAnnotations as any;
                }
        this.context.ngAfterContentChecked(this);
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

