import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, QueryList, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { TreeMap } from '@syncfusion/ej2-treemap';
import { Template } from '@syncfusion/ej2-angular-base';
import { LevelsDirective } from './levels.directive';

export const inputs: string[] = ['allowImageExport','allowPdfExport','allowPrint','background','border','breadcrumbConnector','colorValuePath','dataSource','description','drillDownView','enableBreadcrumb','enableDrillDown','enablePersistence','enableRtl','equalColorValuePath','format','height','highlightSettings','initialDrillDown','layoutType','leafItemSettings','legendSettings','levels','locale','margin','palette','query','rangeColorValuePath','renderDirection','selectionSettings','tabIndex','theme','titleSettings','tooltipSettings','useGroupingSeparator','weightValuePath','width'];
export const outputs: string[] = ['beforePrint','click','doubleClick','drillEnd','drillStart','itemClick','itemHighlight','itemMove','itemRendering','itemSelected','legendItemRendering','legendRendering','load','loaded','mouseMove','resize','rightClick','tooltipRendering'];
export const twoWays: string[] = [''];

/**
 * TreeMap Component
 * ```html
 * <ej-treemap></ej-treemap>
 * ```
 */
@Component({
    selector: 'ejs-treemap',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childLevels: new ContentChild(LevelsDirective)
    }
})
@ComponentMixins([ComponentBase])
export class TreeMapComponent extends TreeMap implements IComponentBase {
    public context : any;
    public tagObjects: any;
	beforePrint: any;
	click: any;
	doubleClick: any;
	drillEnd: any;
	drillStart: any;
	itemClick: any;
	itemHighlight: any;
	itemMove: any;
	itemRendering: any;
	itemSelected: any;
	legendItemRendering: any;
	legendRendering: any;
	load: any;
	loaded: any;
	mouseMove: any;
	resize: any;
	rightClick: any;
	public tooltipRendering: any;
    public childLevels: QueryList<LevelsDirective>;
    public tags: string[] = ['levels'];
    @ContentChild('tooltipSettingsTemplate')
    @Template()
    public tooltipSettings_template: any;
    @ContentChild('leafItemSettingsLabelTemplate')
    @Template()
    public leafItemSettings_labelTemplate: any;

    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
                let mod = this.injector.get('TreeMapTreeMapTooltip');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('TreeMapTreeMapLegend');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('TreeMapTreeMapHighlight');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('TreeMapTreeMapSelection');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('TreeMapPrint');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('TreeMapPdfExport');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('TreeMapImageExport');
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
        this.tagObjects[0].instance = this.childLevels;
        this.context.ngAfterContentChecked(this);
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

