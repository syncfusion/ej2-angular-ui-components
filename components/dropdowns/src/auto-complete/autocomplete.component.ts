import { Component, ElementRef, ViewContainerRef, ValueProvider, Renderer2, Injector, ChangeDetectionStrategy, ChangeDetectorRef, forwardRef, ContentChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, FormBase, setValue } from '@syncfusion/ej2-angular-base';
import { AutoComplete } from '@syncfusion/ej2-dropdowns';
import { Template } from '@syncfusion/ej2-angular-base';


export const inputs: string[] = ['actionFailureTemplate','allowCustom','allowFiltering','autofill','cssClass','dataSource','enablePersistence','enableRtl','enableVirtualization','enabled','fields','filterBarPlaceholder','filterType','floatLabelType','footerTemplate','groupTemplate','headerTemplate','highlight','htmlAttributes','ignoreAccent','ignoreCase','index','itemTemplate','locale','minLength','noRecordsTemplate','placeholder','popupHeight','popupWidth','query','readonly','showClearButton','showPopupButton','sortOrder','suggestionCount','text','value','valueTemplate','width','zIndex'];
export const outputs: string[] = ['actionBegin','actionComplete','actionFailure','beforeOpen','blur','change','close','created','customValueSpecifier','dataBound','destroyed','filtering','focus','open','select','valueChange'];
export const twoWays: string[] = ['value'];

/**
 *The AutoComplete component provides the matched suggestion list when type into the input, from which the user can select one.
*```html
*<ejs-autocomplete></ejs-autocomplete>
*```
*/
@Component({
    selector: 'ejs-autocomplete',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => AutoCompleteComponent),
            multi: true
        }
    ],
    queries: {

    }
})
@ComponentMixins([ComponentBase, FormBase])
export class AutoCompleteComponent extends AutoComplete implements IComponentBase {
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
     * @asptype string
     * @deprecated 
     */
    @ContentChild('footerTemplate')
    @Template()
    public footerTemplate: any;
    /** 
     * Accepts the template design and assigns it to the header container of the popup list. 
     * > For more details about the available template options refer to [`Template`](../../drop-down-list/templates) documentation.
     * @default null
     * @asptype string
     * @deprecated 
     */
    @ContentChild('headerTemplate')
    @Template()
    public headerTemplate: any;
    /** 
     * Accepts the template design and assigns it to the group headers present in the popup list.
     * @default null
     * @asptype string
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
     * @asptype string
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
    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector, private cdr: ChangeDetectorRef) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
                let mod = this.injector.get('DropDownsVirtualScroll');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

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

