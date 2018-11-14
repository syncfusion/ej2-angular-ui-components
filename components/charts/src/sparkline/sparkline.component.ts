import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { Sparkline } from '@syncfusion/ej2-charts';

import { RangeBandSettingsDirective } from './rangebandsettings.directive';

export const inputs: string[] = ['axisSettings','border','containerArea','dataLabelSettings','dataSource','enablePersistence','enableRtl','endPointColor','fill','format','height','highPointColor','lineWidth','locale','lowPointColor','markerSettings','negativePointColor','opacity','padding','palette','rangeBandSettings','startPointColor','theme','tiePointColor','tooltipSettings','type','useGroupingSeparator','valueType','width','xName','yName'];
export const outputs: string[] = ['axisRendering','dataLabelRendering','load','loaded','markerRendering','pointRegionMouseClick','pointRegionMouseMove','pointRendering','resize','seriesRendering','sparklineMouseClick','sparklineMouseMove','tooltipInitialize'];
export const twoWays: string[] = [''];

/**
 * Sparkline Component
 * ```html
 * <ejs-sparkline></ejs-sparkline>
 * ```
 */
@Component({
    selector: 'ejs-sparkline',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childRangeBandSettings: new ContentChild(RangeBandSettingsDirective)
    }
})
@ComponentMixins([ComponentBase])
export class SparklineComponent extends Sparkline implements IComponentBase {
    public childRangeBandSettings: any;
    public tags: string[] = ['rangeBandSettings'];


    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try{ this.injectedModules.push(this.injector.get('ChartsSparklineTooltip')); }catch {} 

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

