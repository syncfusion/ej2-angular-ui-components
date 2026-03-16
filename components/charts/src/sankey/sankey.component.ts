import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, QueryList, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { Sankey } from '@syncfusion/ej2-charts';
import { Template } from '@syncfusion/ej2-angular-base';
import { SankeyNodesCollectionDirective } from './nodes.directive';
import { SankeyLinksCollectionDirective } from './links.directive';

export const inputs: string[] = ['accessibility','allowExport','animation','background','backgroundImage','border','enableExport','enablePersistence','enableRtl','focusBorderColor','focusBorderMargin','focusBorderWidth','height','labelSettings','legendSettings','linkStyle','links','locale','margin','nodeStyle','nodes','orientation','subTitle','subTitleStyle','theme','title','titleStyle','tooltip','width'];
export const outputs: string[] = ['afterExport','beforeExport','beforePrint','exportCompleted','labelRendering','legendItemHover','legendItemRendering','linkClick','linkEnter','linkLeave','linkRendering','load','loaded','nodeClick','nodeEnter','nodeLeave','nodeRendering','sizeChanged','tooltipRendering'];
export const twoWays: string[] = [''];

/**
 * Sankey Component
 * ```html
 * <ejs-sankey></ejs-sankey>
 * ```
 */
@Component({
    selector: 'ejs-sankey',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childNodes: new ContentChild(SankeyNodesCollectionDirective), 
        childLinks: new ContentChild(SankeyLinksCollectionDirective)
    }
})
@ComponentMixins([ComponentBase])
export class SankeyComponent extends Sankey implements IComponentBase {
    public context : any;
    public tagObjects: any;
	afterExport: any;
	beforeExport: any;
	beforePrint: any;
	exportCompleted: any;
	labelRendering: any;
	legendItemHover: any;
	legendItemRendering: any;
	linkClick: any;
	linkEnter: any;
	linkLeave: any;
	linkRendering: any;
	load: any;
	loaded: any;
	nodeClick: any;
	nodeEnter: any;
	nodeLeave: any;
	nodeRendering: any;
	sizeChanged: any;
	public tooltipRendering: any;
    public childNodes: QueryList<SankeyNodesCollectionDirective>;
    public childLinks: QueryList<SankeyLinksCollectionDirective>;
    public tags: string[] = ['nodes', 'links'];
    @ContentChild('tooltipSankeyNodeTemplate')
    @Template()
    public tooltip_sankeyNodeTemplate: any;
    @ContentChild('tooltipSankeyLinkTemplate')
    @Template()
    public tooltip_sankeyLinkTemplate: any;

    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
                let mod = this.injector.get('ChartsSankeyLegend');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ChartsSankeyTooltip');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ChartsSankeyHighlight');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('ChartsSankeyExport');
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
        this.tagObjects[0].instance = this.childNodes;
        if (this.childLinks) {
                    this.tagObjects[1].instance = this.childLinks as any;
                }
        this.context.ngAfterContentChecked(this);
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

