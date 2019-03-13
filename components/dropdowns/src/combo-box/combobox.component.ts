import { Component, ElementRef, ViewContainerRef, ValueProvider, Renderer2, Injector, ChangeDetectionStrategy, forwardRef, ContentChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, FormBase, setValue } from '@syncfusion/ej2-angular-base';
import { ComboBox } from '@syncfusion/ej2-dropdowns';
import { Template } from '@syncfusion/ej2-angular-base';


export const inputs: string[] = ['actionFailureTemplate','allowCustom','allowFiltering','autofill','cssClass','dataSource','enablePersistence','enableRtl','enabled','fields','filterBarPlaceholder','floatLabelType','footerTemplate','groupTemplate','headerTemplate','htmlAttributes','ignoreAccent','index','itemTemplate','locale','noRecordsTemplate','placeholder','popupHeight','popupWidth','query','readonly','showClearButton','sortOrder','text','value','valueTemplate','width','zIndex'];
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


    public valueChange: any;
    /** 
     * Accepts the template design and assigns it to the footer container of the popup list. 
     * > For more details about the available template options refer to [`Template`](../../drop-down-list/templates) documentation.
     * @default null
     */
    @ContentChild('footerTemplate')
    @Template()
    public footerTemplate: any;
    /** 
     * Accepts the template design and assigns it to the header container of the popup list. 
     * > For more details about the available template options refer to [`Template`](../../drop-down-list/templates) documentation.
     * @default null
     */
    @ContentChild('headerTemplate')
    @Template()
    public headerTemplate: any;
    /** 
     * Accepts the template design and assigns it to the group headers present in the popup list.
     * @default null
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

