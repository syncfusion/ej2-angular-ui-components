import { Component, ElementRef, ViewContainerRef, ValueProvider, Renderer2, Injector, ChangeDetectionStrategy, forwardRef, ContentChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, FormBase, setValue } from '@syncfusion/ej2-angular-base';
import { DropDownTree } from '@syncfusion/ej2-dropdowns';
import { Template } from '@syncfusion/ej2-angular-base';


export const inputs: string[] = ['actionFailureTemplate','allowFiltering','allowMultiSelection','changeOnBlur','cssClass','customTemplate','delimiterChar','enablePersistence','enableRtl','enabled','fields','filterBarPlaceholder','filterType','floatLabelType','footerTemplate','headerTemplate','htmlAttributes','ignoreAccent','ignoreCase','itemTemplate','locale','mode','noRecordsTemplate','placeholder','popupHeight','popupWidth','readonly','selectAllText','showCheckBox','showClearButton','showDropDownIcon','showSelectAll','sortOrder','text','treeSettings','unSelectAllText','value','width','wrapText','zIndex'];
export const outputs: string[] = ['actionFailure','beforeOpen','blur','change','close','created','dataBound','destroyed','filtering','focus','keyPress','open','select','valueChange'];
export const twoWays: string[] = ['value'];

/**
*The DropDownTree component contains a list of predefined values from which you can choose a single or multiple values.
*```html
*<ejs-dropdowntree></ejs-dropdowntree>
*```
*/
@Component({
    selector: 'ejs-dropdowntree',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DropDownTreeComponent),
            multi: true
        }
    ],
    queries: {

    }
})
@ComponentMixins([ComponentBase, FormBase])
export class DropDownTreeComponent extends DropDownTree implements IComponentBase {
    public formCompContext : any;
    public formContext : any;
    public tagObjects: any;
	actionFailure: any;
	beforeOpen: any;
	blur: any;
	change: any;
	close: any;
	created: any;
	dataBound: any;
	destroyed: any;
	filtering: any;
	focus: any;
	keyPress: any;
	open: any;
	select: any;
	public valueChange: any;


    /** 
     * Specifies the template that renders a customized footer container at the bottom of the pop-up list. 
     * By default, the footerTemplate will be null and there will be no footer container for the pop-up list.
     * @default null
     */
    @ContentChild('footerTemplate')
    @Template()
    public footerTemplate: any;
    /** 
     * Specifies the template that renders a customized header container at the top of the pop-up list. 
     * By default, the headerTemplate will be null and there will be no header container for the pop-up list.
     * @default null
     */
    @ContentChild('headerTemplate')
    @Template()
    public headerTemplate: any;
    /** 
     * Specifies a template to render customized content for all the items. 
     * If the **itemTemplate** property is set, the template content overrides the displayed item text. 
     * The property accepts [template string](https://ej2.syncfusion.com/documentation/common/template-engine/) 
     * or HTML element ID holding the content.
     * @default null
     */
    @ContentChild('itemTemplate')
    @Template()
    public itemTemplate: any;
    @ContentChild('noRecordsTemplate')
    @Template('No records found')
    public noRecordsTemplate: any;
    @ContentChild('actionFailureTemplate')
    @Template('Request failed')
    public actionFailureTemplate: any;

    private skipFromEvent:boolean = true;
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

