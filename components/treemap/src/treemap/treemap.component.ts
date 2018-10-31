import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { TreeMap } from '@syncfusion/ej2-treemap';
import { Template } from '@syncfusion/ej2-angular-base';
import { LevelsDirective } from './levels.directive';

export const inputs: string[] = ['background','border','dataSource','description','enableDrillDown','enablePersistence','enableRtl','equalColorValuePath','format','height','highlightSettings','initialDrillDown','layoutType','leafItemSettings','legendSettings','levels','locale','margin','palette','query','rangeColorValuePath','selectionSettings','tabIndex','theme','titleSettings','tooltipSettings','useGroupingSeparator','weightValuePath','width'];
export const outputs: string[] = ['beforePrint','click','drillEnd','drillStart','itemClick','itemHighlight','itemMove','itemRendering','itemSelected','load','loaded','mouseMove','resize','tooltipRendering'];
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
    public childLevels: any;
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
        try{ this.injectedModules.push(this.injector.get('TreeMapTreeMapTooltip')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('TreeMapTreeMapLegend')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('TreeMapTreeMapHighlight')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('TreeMapTreeMapSelection')); }catch {} 

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

