import { Component, ElementRef, ViewContainerRef, ValueProvider, Renderer2, Injector, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ComponentBase, IComponentBase, applyMixins, PropertyCollectionInfo, FormBase, setValue } from '@syncfusion/ej2-angular-base';
import { ColorPicker } from '@syncfusion/ej2-inputs';



export const inputs: string[] = ['columns','cssClass','disabled','enableOpacity','enablePersistence','enableRtl','inline','locale','mode','modeSwitcher','noColor','presetColors','showButtons','value'];
export const outputs: string[] = ['focus', 'blur', 'beforeClose','beforeModeSwitch','beforeOpen','beforeTileRender','change','created','open','select','valueChange'];
export const twoWays: string[] = ['value'];

/**
 * Represents the EJ2 Angular ColorPicker Component.
 * ```html
 * <input ejs-colorpicker type='color'/>
 * ```
 */
@Component({
    selector: '[ejs-colorpicker]',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ColorPickerComponent),
            multi: true
        }
    ],
    queries: {

    }
})
export class ColorPickerComponent extends ColorPicker implements IComponentBase {


    public valueChange: any;

    public focus: any;
    public blur: any;
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

applyMixins(ColorPickerComponent, [ComponentBase, FormBase]);
