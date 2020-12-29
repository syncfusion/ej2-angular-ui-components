import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, QueryList, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { ProgressBar } from '@syncfusion/ej2-progressbar';

import { ProgressBarAnnotationsDirective } from './annotations.directive';

export const inputs: string[] = ['animation','annotations','cornerRadius','enablePersistence','enablePieProgress','enableProgressSegments','enableRtl','endAngle','gapWidth','height','innerRadius','isActive','isGradient','isIndeterminate','isStriped','labelOnTrack','labelStyle','locale','margin','maximum','minimum','progressColor','progressThickness','radius','rangeColors','role','secondaryProgress','segmentColor','segmentCount','showProgressValue','startAngle','theme','trackColor','trackThickness','type','value','width'];
export const outputs: string[] = ['animationComplete','load','loaded','mouseClick','mouseDown','mouseLeave','mouseMove','mouseUp','progressCompleted','textRender','valueChanged'];
export const twoWays: string[] = [''];

/**
 * ProgressBar Component
 * ```html
 * <ejsprogressbar></ejsprogressbar>
 * ```
 */
@Component({
    selector: 'ejs-progressbar',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childAnnotations: new ContentChild(ProgressBarAnnotationsDirective)
    }
})
@ComponentMixins([ComponentBase])
export class ProgressBarComponent extends ProgressBar implements IComponentBase {
    public context : any;
    public tagObjects: any;
    public childAnnotations: QueryList<ProgressBarAnnotationsDirective>;
    public tags: string[] = ['annotations'];


    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
                let mod = this.injector.get('ProgressBarProgressAnnotation');
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
        this.tagObjects[0].instance = this.childAnnotations;
        this.context.ngAfterContentChecked(this);
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

