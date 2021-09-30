import { Component, ElementRef, ViewContainerRef, ValueProvider, Renderer2, Injector, ChangeDetectionStrategy, forwardRef, ContentChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, FormBase, setValue } from '@syncfusion/ej2-angular-base';
import { ComboBox } from '@syncfusion/ej2-dropdowns';
import { Template } from '@syncfusion/ej2-angular-base';


export const inputs: string[] = ['actionFailureTemplate','allowCustom','allowFiltering','autofill','cssClass','dataSource','enablePersistence','enableRtl','enabled','fields','filterBarPlaceholder','filterType','floatLabelType','footerTemplate','groupTemplate','headerTemplate','htmlAttributes','ignoreAccent','ignoreCase','index','itemTemplate','locale','noRecordsTemplate','placeholder','popupHeight','popupWidth','query','readonly','showClearButton','sortOrder','text','value','valueTemplate','width','zIndex'];
export const outputs: string[] = ['actionBegin','actionComplete','actionFailure','beforeOpen','blur','change','close','created','customValueSpecifier','dataBound','destroyed','filtering','focus','open','select','valueChange'];
export const twoWays: string[] = ['value'];

/**
*The ComboBox component allows the user to type a value or choose an option from the list of predefined options.
*```html
*<ejs-combobox></ejs-combobox>
*```
*/
@Component({
    selector: 'ejs-combobox',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ComboBoxComponent),
            multi: true
        }
    ],
    queries: {

    }
})
@ComponentMixins([ComponentBase, FormBase])
export class ComboBoxComponent extends ComboBox implements IComponentBase {
    public formCompContext : any;
    public formContext : any;
    public tagObjects: any;
	actionBegin: any;
	actionComplete: any;
	actionFailure: any;
	beforeOpen: any;
	blur: any;
	change: any;
	close: any;
	created: any;
	customValueSpecifier: any;
	dataBound: any;
	destroyed: any;
	filtering: any;
	focus: any;
	open: any;
	select: any;
	public valueChange: any;


    /** 
     * Accepts the template design and assigns it to the footer container of the popup list. 
     * > For more details about the available template options refer to [`Template`](../../drop-down-list/templates) documentation.
     * @default null
     * @deprecated 
     */
    @ContentChild('footerTemplate')
    @Template()
    public footerTemplate: any;
    /** 
     * Accepts the template design and assigns it to the header container of the popup list. 
     * > For more details about the available template options refer to [`Template`](../../drop-down-list/templates) documentation.
     * @default null
     * @deprecated 
     */
    @ContentChild('headerTemplate')
    @Template()
    public headerTemplate: any;
    /** 
     * Accepts the template design and assigns it to the group headers present in the popup list.
     * @default null
     * @deprecated 
     */
    @ContentChild('groupTemplate')
    @Template()
    public groupTemplate: any;
    /** 
     * Accepts the template design and assigns it to each list item present in the popup. 
     * We have built-in `template engine`
     * 
     * which provides options to compile template string into a executable function.
     *For EX: We have expression evolution as like ES6 expression string literals.
     *     
     * @default null
     * @deprecated 
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

