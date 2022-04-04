import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, QueryList, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { Carousel } from '@syncfusion/ej2-navigations';
import { Template } from '@syncfusion/ej2-angular-base';
import { CarouselItemsDirective } from './items.directive';

export const inputs: string[] = ['animation','autoPlay','buttonsVisibility','cssClass','dataSource','enablePersistence','enableRtl','enableTouchSwipe','height','htmlAttributes','indicatorsTemplate','interval','itemTemplate','items','locale','loop','nextButtonTemplate','playButtonTemplate','previousButtonTemplate','selectedIndex','showIndicators','showPlayButton','width'];
export const outputs: string[] = ['slideChanged','slideChanging','selectedIndexChange'];
export const twoWays: string[] = ['selectedIndex'];

/**
 * Represents the EJ2 Angular Carousel Component.
 * ```html
 * <ejs-carousel [items]='carouselItems'></ejs-carousel>
 * ```
 */
@Component({
    selector: 'ejs-carousel',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childItems: new ContentChild(CarouselItemsDirective)
    }
})
@ComponentMixins([ComponentBase])
export class CarouselComponent extends Carousel implements IComponentBase {
    public context : any;
    public tagObjects: any;
	slideChanged: any;
	slideChanging: any;
	public selectedIndexChange: any;
    public childItems: QueryList<CarouselItemsDirective>;
    public tags: string[] = ['items'];
    /** 
     * Accepts the template for indicator buttons.
     * @default null
     */
    @ContentChild('indicatorsTemplate')
    @Template()
    public indicatorsTemplate: any;
    /** 
     * Accepts the template for next navigation button.
     * @default null
     */
    @ContentChild('nextButtonTemplate')
    @Template()
    public nextButtonTemplate: any;
    /** 
     * Accepts the template for previous navigation button.
     * @default null
     */
    @ContentChild('previousButtonTemplate')
    @Template()
    public previousButtonTemplate: any;
    /** 
     * Accepts the template for play/pause button.
     * @default null
     */
    @ContentChild('playButtonTemplate')
    @Template()
    public playButtonTemplate: any;
    /** 
     * Specifies the template option for carousel items.
     * @default null
     */
    @ContentChild('itemTemplate')
    @Template()
    public itemTemplate: any;

    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];

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
        this.tagObjects[0].instance = this.childItems;
        this.context.ngAfterContentChecked(this);
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

