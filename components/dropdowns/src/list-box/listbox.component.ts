import { Component, ElementRef, ViewContainerRef, ValueProvider, Renderer2, Injector, ChangeDetectionStrategy, forwardRef, ContentChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, FormBase, setValue } from '@syncfusion/ej2-angular-base';
import { ListBox } from '@syncfusion/ej2-dropdowns';
import { Template } from '@syncfusion/ej2-angular-base';


export const inputs: string[] = ['actionFailureTemplate','allowDragAndDrop','allowFiltering','cssClass','dataSource','enablePersistence','enableRtl','enabled','fields','filterBarPlaceholder','filterType','groupTemplate','height','ignoreAccent','ignoreCase','itemTemplate','locale','maximumSelectionLength','noRecordsTemplate','query','scope','selectionSettings','sortOrder','toolbarSettings','value','zIndex'];
export const outputs: string[] = ['focus', 'blur', 'actionBegin','actionComplete','actionFailure','beforeDrop','beforeItemRender','change','created','dataBound','destroyed','drag','dragStart','drop','filtering','select','valueChange'];
export const twoWays: string[] = ['value'];

/**
* The ListBox allows the user to select values from the predefined list of values.
*```html
*<ejs-listbox [dataSource]='data'></ejs-listbox>
*```
*/
@Component({
    selector: 'ejs-listbox',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ListBoxComponent),
            multi: true
        }
    ],
    queries: {

    }
})
@ComponentMixins([ComponentBase, FormBase])
export class ListBoxComponent extends ListBox implements IComponentBase {
    public formCompContext : any;
    public formContext : any;
    public tagObjects: any;


    public valueChange: any;
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

    public focus: any;
    public blur: any;
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

