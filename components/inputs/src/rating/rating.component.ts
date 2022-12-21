import { Component, ElementRef, ViewContainerRef, ValueProvider, Renderer2, Injector, ChangeDetectionStrategy, forwardRef, ContentChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, FormBase, setValue } from '@syncfusion/ej2-angular-base';
import { Rating } from '@syncfusion/ej2-inputs';
import { Template } from '@syncfusion/ej2-angular-base';


export const inputs: string[] = ['allowReset','cssClass','disabled','emptyTemplate','enableAnimation','enablePersistence','enableRtl','enableSingleSelection','fullTemplate','itemsCount','labelPosition','labelTemplate','locale','min','precision','readOnly','showLabel','showTooltip','tooltipTemplate','value','visible'];
export const outputs: string[] = ['focus', 'blur', 'beforeItemRender','created','onItemHover','valueChanged','valueChange'];
export const twoWays: string[] = ['value'];

/**
 * Represents the EJ2 Angular Rating Component.
 * ```html
 * <input ejs-rating [value]='value' />
 * ```
 */
@Component({
    selector: '[ejs-rating]',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => RatingComponent),
            multi: true
        }
    ],
    queries: {

    }
})
@ComponentMixins([ComponentBase, FormBase])
export class RatingComponent extends Rating implements IComponentBase {
    public formCompContext : any;
    public formContext : any;
    public tagObjects: any;
	beforeItemRender: any;
	created: any;
	onItemHover: any;
	valueChanged: any;
	public valueChange: any;


    /** 
     * Defines the template content for each item when it is selected. 
     * The template context will contain the current item value for customization.
     * @default ''
     */
    @ContentChild('fullTemplate')
    @Template()
    public fullTemplate: any;
    /** 
     * Defines the template content for each item when it is not selected. 
     * The template context will contain the current item value for customization.
     * @default ''
     */
    @ContentChild('emptyTemplate')
    @Template()
    public emptyTemplate: any;
    /** 
     * Defines the template content for the tooltip. 
     * The template context will contain the current value for customization.
     * @default ''
     */
    @ContentChild('tooltipTemplate')
    @Template()
    public tooltipTemplate: any;
    /** 
     * Defines the template content for the label. 
     * The template context will contain the current value and maximum value for customization.
     * @default ''
     */
    @ContentChild('labelTemplate')
    @Template()
    public labelTemplate: any;

    public focus: any;
    public blur: any;
    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];

        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
        this.formContext  = new FormBase();
        this.formCompContext  = new ComponentBase();
    }

    public registerOnChange(registerFunction: (_: any) => void): void {
    }

    public registerOnTouched(registerFunction: () => void): void {
    }

    public writeValue(value: any): void {
    }
    
    public setDisabledState(disabled: boolean): void {
    }

    public ngOnInit() {
        this.formCompContext.ngOnInit(this);
    }

    public ngAfterViewInit(): void {
        this.formContext.ngAfterViewInit(this);
    }

    public ngOnDestroy(): void {
        this.formCompContext.ngOnDestroy(this);
    }

    public ngAfterContentChecked(): void {
        
        this.formCompContext.ngAfterContentChecked(this);
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

