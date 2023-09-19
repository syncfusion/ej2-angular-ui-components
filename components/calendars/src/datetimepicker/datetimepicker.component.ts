import { Component, ElementRef, ViewContainerRef, ValueProvider, Renderer2, Injector, ChangeDetectionStrategy, ChangeDetectorRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, FormBase, setValue } from '@syncfusion/ej2-angular-base';
import { DateTimePicker } from '@syncfusion/ej2-calendars';



export const inputs: string[] = ['allowEdit','calendarMode','cssClass','dayHeaderFormat','depth','enableMask','enablePersistence','enableRtl','enabled','firstDayOfWeek','floatLabelType','format','fullScreenMode','htmlAttributes','isMultiSelection','keyConfigs','locale','maskPlaceholder','max','min','openOnFocus','placeholder','readonly','scrollTo','serverTimezoneOffset','showClearButton','showTodayButton','start','step','strictMode','timeFormat','value','values','weekNumber','weekRule','width','zIndex'];
export const outputs: string[] = ['blur','change','cleared','close','created','destroyed','focus','navigated','open','renderDayCell','valueChange'];
export const twoWays: string[] = ['value'];

/**
 * Represents the Essential JS 2 Angular DateTimePicker Component.
 * ```html
 * <ejs-datetimepicker [value]='dateTime'></ejs-datetimepicker>
 * ```
 */
@Component({
    selector: 'ejs-datetimepicker',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DateTimePickerComponent),
            multi: true
        }
    ],
    queries: {

    }
})
@ComponentMixins([ComponentBase, FormBase])
export class DateTimePickerComponent extends DateTimePicker implements IComponentBase {
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
	public valueChange: any;



    private skipFromEvent:boolean = true;
    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector, private cdr: ChangeDetectorRef) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
                let mod = this.injector.get('CalendarsIslamic');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('CalendarsMaskedDateTime');
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

