import { Component, ElementRef, ViewContainerRef, ValueProvider, Renderer2, Injector, ChangeDetectionStrategy, forwardRef, ContentChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, FormBase, setValue } from '@syncfusion/ej2-angular-base';
import { MultiSelect } from '@syncfusion/ej2-dropdowns';
import { Template } from '@syncfusion/ej2-angular-base';


export const inputs: string[] = ['actionFailureTemplate','allowCustomValue','allowFiltering','closePopupOnSelect','cssClass','dataSource','delimiterChar','enablePersistence','enableRtl','enableSelectionOrder','enabled','fields','filterBarPlaceholder','floatLabelType','footerTemplate','groupTemplate','headerTemplate','hideSelectedItem','htmlAttributes','ignoreAccent','ignoreCase','itemTemplate','locale','maximumSelectionLength','mode','noRecordsTemplate','openOnClick','placeholder','popupHeight','popupWidth','query','readonly','selectAllText','showClearButton','showDropDownIcon','showSelectAll','sortOrder','text','unSelectAllText','value','valueTemplate','width','zIndex'];
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


    public valueChange: any;
    /** 
     * Accepts the template design and assigns it to the footer container of the popup list. 
     * > For more details about the available template options refer to [`Template`](./templates.html) documentation.
     * @default null
     */
    @ContentChild('footerTemplate')
    @Template()
    public footerTemplate: any;
    /** 
     * Accepts the template design and assigns it to the header container of the popup list. 
     * > For more details about the available template options refer to [`Template`](./templates.html) documentation.
     * @default null
     */
    @ContentChild('headerTemplate')
    @Template()
    public headerTemplate: any;
    /** 
     * Accepts the template design and assigns it to the selected list item in the input element of the component. 
     * For more details about the available template options refer to 
     * [`Template`](./templates.html) documentation.
     * 
     * We have built-in [`template engine`](./template-engine.html)
     *which provides options to compile template string into a executable function.
     *For EX: We have expression evolution as like ES6 expression string literals.     
     * @default null
     */
    @ContentChild('valueTemplate')
    @Template()
    public valueTemplate: any;
    /** 
     * Accepts the template design and assigns it to each list item present in the popup. 
     * > For more details about the available template options refer to [`Template`](./templates.html) documentation.
     * 
     * We have built-in [`template engine`](./template-engine.html)
     *which provides options to compile template string into a executable function.
     *For EX: We have expression evolution as like ES6 expression string literals.     
     * @default null
     */
    @ContentChild('itemTemplate')
    @Template()
    public itemTemplate: any;
    @ContentChild('noRecordsTemplate')
    @Template('No Records Found')
    public noRecordsTemplate: any;
    @ContentChild('actionFailureTemplate')
    @Template('The Request Failed')
    public actionFailureTemplate: any;

    private skipFromEvent:boolean = true;
    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try{ this.injectedModules.push(this.injector.get('DropDownsCheckBoxSelection')); }catch {} 

        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
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

