import { Component, ElementRef, ViewContainerRef, ValueProvider, Renderer2, Injector, ChangeDetectionStrategy, forwardRef, ContentChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, FormBase, setValue } from '@syncfusion/ej2-angular-base';
import { MultiSelect } from '@syncfusion/ej2-dropdowns';
import { Template } from '@syncfusion/ej2-angular-base';


export const inputs: string[] = ['actionFailureTemplate','allowCustomValue','allowFiltering','changeOnBlur','closePopupOnSelect','cssClass','dataSource','delimiterChar','enableGroupCheckBox','enableHtmlSanitizer','enablePersistence','enableRtl','enableSelectionOrder','enabled','fields','filterBarPlaceholder','filterType','floatLabelType','footerTemplate','groupTemplate','headerTemplate','hideSelectedItem','htmlAttributes','ignoreAccent','ignoreCase','itemTemplate','locale','maximumSelectionLength','mode','noRecordsTemplate','openOnClick','placeholder','popupHeight','popupWidth','query','readonly','selectAllText','showClearButton','showDropDownIcon','showSelectAll','sortOrder','text','unSelectAllText','value','valueTemplate','width','zIndex'];
export const outputs: string[] = ['actionBegin','actionComplete','actionFailure','beforeOpen','blur','change','chipSelection','close','created','customValueSelection','dataBound','destroyed','filtering','focus','open','removed','removing','select','selectedAll','tagging','valueChange'];
export const twoWays: string[] = ['value'];

/**
* The MultiSelect allows the user to pick a values from the predefined list of values.
*```html
*<ejs-multiselect></ejs-multiselect>
*```
*/
@Component({
    selector: 'ejs-multiselect',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => MultiSelectComponent),
            multi: true
        }
    ],
    queries: {

    }
})
@ComponentMixins([ComponentBase, FormBase])
export class MultiSelectComponent extends MultiSelect implements IComponentBase {
    public formCompContext : any;
    public formContext : any;
    public tagObjects: any;


    public valueChange: any;
    /** 
     * Accepts the template design and assigns it to the footer container of the popup list. 
     * > For more details about the available template options refer to [`Template`](../../multi-select/templates) documentation.
     * @default null
     */
    @ContentChild('footerTemplate')
    @Template()
    public footerTemplate: any;
    /** 
     * Accepts the template design and assigns it to the header container of the popup list. 
     * > For more details about the available template options refer to [`Template`](../../multi-select/templates) documentation.
     * @default null
     */
    @ContentChild('headerTemplate')
    @Template()
    public headerTemplate: any;
    /** 
     * Accepts the template design and assigns it to the selected list item in the input element of the component. 
     * For more details about the available template options refer to 
     * [`Template`](../../multi-select/templates) documentation.
     * 
     * We have built-in `template engine`
     *which provides options to compile template string into a executable function.
     *For EX: We have expression evolution as like ES6 expression string literals.
     *     
     * @default null
     */
    @ContentChild('valueTemplate')
    @Template()
    public valueTemplate: any;
    /** 
     * Accepts the template design and assigns it to each list item present in the popup. 
     * > For more details about the available template options refer to [`Template`](../../multi-select/templates) documentation.
     * 
     * We have built-in `template engine`
     *which provides options to compile template string into a executable function.
     *For EX: We have expression evolution as like ES6 expression string literals.
     *     
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
        try {
                let mod = this.injector.get('DropDownsCheckBoxSelection');
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

