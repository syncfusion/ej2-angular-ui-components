import { Component, ElementRef, ViewContainerRef, ValueProvider, Renderer2, Injector, ChangeDetectionStrategy, forwardRef, ContentChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, FormBase, setValue } from '@syncfusion/ej2-angular-base';
import { DateRangePicker } from '@syncfusion/ej2-calendars';

import { PresetsDirective } from './presets.directive';

export const inputs: string[] = ['allowEdit','cssClass','enablePersistence','enableRtl','enabled','endDate','firstDayOfWeek','floatLabelType','format','locale','max','maxDays','min','minDays','placeholder','presets','readonly','separator','showClearButton','startDate','strictMode','value','weekNumber','width','zIndex'];
export const outputs: string[] = ['blur','change','close','created','destroyed','focus','navigated','open','renderDayCell','select','startDateChange','endDateChange','valueChange'];
export const twoWays: string[] = ['startDate', 'endDate', 'value'];

/**
 * Represents the Essential JS 2 Angular DateRangePicker Component.
 * ```html
 * <ejs-daterangepicker [startDate]='date' [endDate]='date'></ejs-daterangepicker>
 * ```
 */
@Component({
    selector: 'ejs-daterangepicker',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DateRangePickerComponent),
            multi: true
        }
    ],
    queries: {
        childPresets: new ContentChild(PresetsDirective)
    }
})
@ComponentMixins([ComponentBase, FormBase])
export class DateRangePickerComponent extends DateRangePicker implements IComponentBase {
    public childPresets: any;
    public tags: string[] = ['presets'];
    public startDateChange: any;
    public endDateChange: any;
    public valueChange: any;

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

