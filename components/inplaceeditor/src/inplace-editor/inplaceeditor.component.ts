import { Component, ElementRef, ViewContainerRef, ValueProvider, Renderer2, Injector, ChangeDetectionStrategy, forwardRef, ContentChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, FormBase, setValue } from '@syncfusion/ej2-angular-base';
import { InPlaceEditor } from '@syncfusion/ej2-inplace-editor';
import { Template } from '@syncfusion/ej2-angular-base';


export const inputs: string[] = ['actionOnBlur','adaptor','cancelButton','cssClass','disabled','editableOn','emptyText','enableEditMode','enablePersistence','enableRtl','locale','mode','model','name','popupSettings','primaryKey','saveButton','showButtons','submitOnEnter','template','type','url','validationRules','value'];
export const outputs: string[] = ['focus', 'blur', 'actionBegin','actionFailure','actionSuccess','beginEdit','created','destroyed','validating'];
export const twoWays: string[] = [''];

/**
 * `ejs-inplaceeditor` represents the Angular InPlaceEditor Component.
 * ```html
 * <ejs-inplaceeditor></ejs-inplaceeditor>
 * ```
 */
@Component({
    selector: 'ejs-inplaceeditor',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InPlaceEditorComponent),
            multi: true
        }
    ],
    queries: {

    }
})
@ComponentMixins([ComponentBase, FormBase])
export class InPlaceEditorComponent extends InPlaceEditor implements IComponentBase {



    /** 
     * Specifies the HTML element ID as a string that can be added as a editable field.
     * @default ''
     * @blazortype string
     */
    @ContentChild('template')
    @Template()
    public template: any;

    public focus: any;
    public blur: any;
    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
                let mod = this.injector.get('InPlace-EditorAutoComplete');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('InPlace-EditorColorPicker');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('InPlace-EditorComboBox');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('InPlace-EditorDateRangePicker');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('InPlace-EditorMultiSelect');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('InPlace-EditorRte');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('InPlace-EditorSlider');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('InPlace-EditorTimePicker');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

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

