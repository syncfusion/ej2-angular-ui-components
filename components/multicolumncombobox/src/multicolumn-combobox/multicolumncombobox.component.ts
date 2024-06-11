import { Component, ElementRef, ViewContainerRef, ValueProvider, Renderer2, Injector, ChangeDetectionStrategy, ChangeDetectorRef, forwardRef, ContentChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, FormBase, setValue } from '@syncfusion/ej2-angular-base';
import { MultiColumnComboBox } from '@syncfusion/ej2-multicolumn-combobox';
import { Template } from '@syncfusion/ej2-angular-base';
import { ColumnsDirective } from './columns.directive';

export const inputs: string[] = ['actionFailureTemplate','allowFiltering','allowSorting','columns','cssClass','dataSource','disabled','enablePersistence','enableRtl','enableVirtualization','fields','filterType','floatLabelType','footerTemplate','gridSettings','groupTemplate','htmlAttributes','index','itemTemplate','locale','noRecordsTemplate','placeholder','popupHeight','popupWidth','query','readonly','showClearButton','sortOrder','sortType','text','value','width'];
export const outputs: string[] = ['focus', 'blur', 'actionBegin','actionComplete','actionFailure','change','close','created','filtering','open','select','valueChange'];
export const twoWays: string[] = ['value'];

/**
 * Represents the Essential JS 2 Angular MultiColumnComboBox Component.
 * ```html
 * <ejs-multicolumncombobox></ejs-multicolumncombobox>
 * ```
 */
@Component({
    selector: 'ejs-multicolumncombobox',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => MultiColumnComboBoxComponent),
            multi: true
        }
    ],
    queries: {
        childColumns: new ContentChild(ColumnsDirective)
    }
})
@ComponentMixins([ComponentBase, FormBase])
export class MultiColumnComboBoxComponent extends MultiColumnComboBox implements IComponentBase {
    public formCompContext : any;
    public formContext : any;
    public tagObjects: any;
	actionBegin: any;
	actionComplete: any;
	actionFailure: any;
	change: any;
	close: any;
	created: any;
	filtering: any;
	open: any;
	select: any;
	public valueChange: any;
    public childColumns: any;
    public tags: string[] = ['columns'];
    /** 
     * Accepts the template design and assigns it to the footer container of the popup.
     * @default null
     * @angulartype string | object
     * @reacttype string | function | JSX.Element
     * @vuetype string | function
     * @asptype string
     */
    @ContentChild('footerTemplate')
    @Template()
    public footerTemplate: any;
    /** 
     * Accepts the template design and assigns it to each items present in the popup.
     * 
     * {% codeBlock src='multicolumn-combobox/itemTemplate/index.md' %}{% endcodeBlock %}
     *     
     * @default null
     * @angulartype string | object
     * @reacttype string | function | JSX.Element
     * @vuetype string | function
     * @asptype string
     */
    @ContentChild('itemTemplate')
    @Template()
    public itemTemplate: any;
    /** 
     * Accepts the template design and assigns it to the group headers present in the popup list.
     * @default null
     * @angulartype string | object
     * @reacttype string | function | JSX.Element
     * @vuetype string | function
     * @asptype string
     */
    @ContentChild('groupTemplate')
    @Template()
    public groupTemplate: any;
    @ContentChild('noRecordsTemplate')
    @Template('No records found')
    public noRecordsTemplate: any;
    @ContentChild('actionFailureTemplate')
    @Template('Request Failed')
    public actionFailureTemplate: any;

    public focus: any;
    public blur: any;
    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector, private cdr: ChangeDetectorRef) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
                let mod = this.injector.get('MultiColumn-ComboBoxVirtualScroll');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('MultiColumn-ComboBoxSort');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('MultiColumn-ComboBoxEdit');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('MultiColumn-ComboBoxGroup');
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
        this.tagObjects[0].instance = this.childColumns;
        this.formCompContext.ngAfterContentChecked(this);
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

