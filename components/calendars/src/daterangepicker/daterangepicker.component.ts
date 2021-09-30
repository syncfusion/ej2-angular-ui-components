import { Component, ElementRef, ViewContainerRef, ValueProvider, Renderer2, Injector, ChangeDetectionStrategy, forwardRef, ContentChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, FormBase, setValue } from '@syncfusion/ej2-angular-base';
import { DateRangePicker } from '@syncfusion/ej2-calendars';
import { Template } from '@syncfusion/ej2-angular-base';
import { PresetsDirective } from './presets.directive';

export const inputs: string[] = ['allowEdit','calendarMode','cssClass','dayHeaderFormat','depth','enablePersistence','enableRtl','enabled','endDate','firstDayOfWeek','floatLabelType','format','htmlAttributes','keyConfigs','locale','max','maxDays','min','minDays','openOnFocus','placeholder','presets','readonly','separator','serverTimezoneOffset','showClearButton','start','startDate','strictMode','value','weekNumber','weekRule','width','zIndex'];
export const outputs: string[] = ['blur','change','cleared','close','created','destroyed','focus','navigated','open','renderDayCell','select','startDateChange','endDateChange','valueChange'];
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
    public formCompContext : any;
    public formContext : any;
    public tagObjects: any;
	blur: any;
	change: any;
	cleared: any;
	close: any;
	created: any;
	destroyed: any;
	focus: any;
	navigated: any;
	open: any;
	renderDayCell: any;
	select: any;
	startDateChange: any;
	endDateChange: any;
	public valueChange: any;
    public childPresets: any;
    public tags: string[] = ['presets'];
    /** 
     * Specifies the initial view of the Calendar when it is opened. 
     * With the help of this property, initial view can be changed to year or decade view.
     * @default Month
     */
    @ContentChild('start')
    @Template()
    public start: any;
    @ContentChild('end')
    @Template()
    public end: any;

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
        this.tagObjects[0].instance = this.childPresets;
        this.formCompContext.ngAfterContentChecked(this);
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

