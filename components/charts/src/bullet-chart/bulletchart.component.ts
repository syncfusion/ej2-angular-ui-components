import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { BulletChart } from '@syncfusion/ej2-charts';

import { BulletRangeCollectionDirective } from './ranges.directive';

export const inputs: string[] = ['animation','border','categoryField','categoryLabelStyle','dataLabel','dataSource','enableGroupSeparator','enablePersistence','enableRtl','height','interval','labelFormat','labelPosition','labelStyle','locale','majorTickLines','margin','maximum','minimum','minorTickLines','minorTicksPerInterval','opposedPosition','orientation','query','ranges','subtitle','subtitleStyle','tabIndex','targetColor','targetField','targetTypes','targetWidth','theme','tickPosition','title','titlePosition','titleStyle','tooltip','type','valueBorder','valueField','valueFill','valueHeight','width'];
export const outputs: string[] = ['load','tooltipRender','dataSourceChange'];
export const twoWays: string[] = ['dataSource'];

/**
 * BulletChart Component
 * ```html
 * <ejs-bulletchart></ejs-bulletchart>
 * ```
 */
@Component({
    selector: 'ejs-bulletchart',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childRanges: new ContentChild(BulletRangeCollectionDirective)
    }
})
@ComponentMixins([ComponentBase])
export class BulletChartComponent extends BulletChart implements IComponentBase {
    public childRanges: any;
    public tags: string[] = ['ranges'];
    public dataSourceChange: any;

    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
                let mod = this.injector.get('ChartsBulletTooltip');
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

