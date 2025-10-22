import { Component, ElementRef, ViewContainerRef, Renderer2, Injector, ChangeDetectionStrategy, QueryList, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, ComponentMixins, IComponentBase, applyMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { Stepper } from '@syncfusion/ej2-navigations';
import { Template } from '@syncfusion/ej2-angular-base';
import { StepsDirective } from './steps.directive';

export const inputs: string[] = ['activeStep','animation','cssClass','enablePersistence','enableRtl','labelPosition','linear','locale','orientation','readOnly','showTooltip','stepType','steps','template','tooltipTemplate'];
export const outputs: string[] = ['beforeStepRender','created','stepChanged','stepChanging','stepClick','activeStepChange'];
export const twoWays: string[] = ['activeStep'];

/**
 * Represents the EJ2 Angular Stepper Component.
 * ```html
 * <nav ejs-stepper [steps]='stepItems'></nav>
 * ```
 */
@Component({
    selector: 'ejs-stepper',
    inputs: inputs,
    outputs: outputs,
    template: `<ng-content select='nav'></ng-content>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childSteps: new ContentChild(StepsDirective)
    }
})
@ComponentMixins([ComponentBase])
export class StepperComponent extends Stepper implements IComponentBase {
    public containerContext : any;
    public tagObjects: any;
	beforeStepRender: any;
	created: any;
	stepChanged: any;
	stepChanging: any;
	stepClick: any;
	public activeStepChange: any;
    public childSteps: QueryList<StepsDirective>;
    public tags: string[] = ['steps'];
    /** 
     * Defines the template content for each step.
     * 
     * {% codeBlock src='stepper/template/index.md' %}{% endcodeBlock %}
     *     
     * @default ''
     * @angulartype string | object
     * @reacttype string | function | JSX.Element
     * @vuetype string | function
     * @asptype string
     */
    @ContentChild('template')
    @Template()
    public template: any;
    /** 
     * Defines the template content for the tooltip.
     * @default ''
     * @angulartype string | object
     * @reacttype string | function | JSX.Element
     * @vuetype string | function
     * @asptype string
     */
    @ContentChild('tooltipTemplate')
    @Template()
    public tooltipTemplate: any;

    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];

        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
        this.containerContext  = new ComponentBase();
    }

    public ngOnInit() {
        this.containerContext.ngOnInit(this);
    }

    public ngAfterViewInit(): void {
        this.containerContext.ngAfterViewInit(this);
    }

    public ngOnDestroy(): void {
        this.containerContext.ngOnDestroy(this);
    }

    public ngAfterContentChecked(): void {
        this.tagObjects[0].instance = this.childSteps;
        this.containerContext.ngAfterContentChecked(this);
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

