import { EventEmitter, ElementRef } from '@angular/core';
import { getValue, setValue, isNullOrUndefined, isObject } from '@syncfusion/ej2-base';
import { ControlValueAccessor } from '@angular/forms';
/**
 * Angular Form Base Module
 */
export class FormBase<T> implements ControlValueAccessor {
    public value: T;
    public checked: boolean;
    private skipFromEvent: boolean;
    static readonly isFormBase = true;

    public propagateChange(_: T): void { return; }
    public propagateTouch(): void { return; }
    public enabled: Object;
    public disabled: Object;
    public angularValue: T;
    private isFormInit: Boolean;
    public objCheck: Boolean;
    public duplicateValue: string;
    public duplicateAngularValue: string;

    public element: HTMLElement;
    public inputElement: HTMLInputElement;
    private ngEle: ElementRef;
    public appendTo: (ele: string | HTMLElement) => void;

    public focus: EventEmitter<Object>;
    public blur: EventEmitter<Object>;
    public preventChange: boolean;
    public isUpdated: boolean;
    public oldValue: any;

    public localChange(e: { value?: T, checked?: T }): void {
        //tslint:disable-next-line
        let value: T | any = (e.checked === undefined ? e.value : e.checked);
        this.objCheck = isObject(value);
        if (this.isUpdated === true) {
            this.angularValue = this.oldValue;
        }
        if (this.objCheck === true) {
            this.duplicateValue = JSON.stringify(value);
            this.duplicateAngularValue = JSON.stringify(this.angularValue);
            if (this.duplicateValue !== this.duplicateAngularValue && this.propagateChange !== undefined && value !== undefined) {
                // Update angular from our control
                this.propagateChange(value);
                this.angularValue = value;
            }
        } else {
            if (value !== this.angularValue && this.propagateChange !== undefined && value !== undefined) {
                // While reset form using reset() method ng-dirty not get updated, so while value is empty just update angularValue only
                if (value !== '' && value !== null) {
                    // Update angular from our control
                    this.propagateChange(value);
                    this.angularValue = value;
                } else {
                    //tslint:disable-next-line
                    let optionalValue: any = value;
                    this.propagateChange(optionalValue);
                    this.angularValue = value;
                }
            }
        }
    }

    public properties: Object;
    public saveChanges: Function;


    public registerOnChange(registerFunction: (_: T) => void): void {
        this.propagateChange = registerFunction;
    }

    public registerOnTouched(registerFunction: () => void): void {
        this.propagateTouch = registerFunction;
    }
    public twoWaySetter(newVal: Object, prop: string): void {
        let oldVal: Object = this.oldValue || getValue(prop, this.properties);
        let ele: HTMLElement = this.inputElement || this.element;
        if (ele && oldVal === newVal &&
            ((<HTMLInputElement>ele).value === undefined || (<HTMLInputElement>ele).value === '')) {
            return;
        }
        this.saveChanges(prop, newVal, oldVal);
        setValue(prop, (isNullOrUndefined(newVal) ? null : newVal), this.properties);
        getValue(prop + 'Change', this).emit(newVal);
    }
    // tslint:disable-next-line:no-any
    public ngAfterViewInit(isTempRef?: any): void {
        // tslint:disable-next-line:no-any
        let tempFormAfterViewThis: any = isTempRef || this;
        // Used setTimeout for template binding
        // Refer Link: https://github.com/angular/angular/issues/6005
        // Removed setTimeout, Because we have called markForCheck() method in Angular Template Compiler
        // setTimeout(() => {
        /* istanbul ignore else */
        if (typeof window !== 'undefined') {
            tempFormAfterViewThis.appendTo(tempFormAfterViewThis.element);
            let ele: HTMLElement = tempFormAfterViewThis.inputElement || tempFormAfterViewThis.element;
            ele.addEventListener('focus', tempFormAfterViewThis.ngOnFocus.bind(tempFormAfterViewThis));
            ele.addEventListener('blur', tempFormAfterViewThis.ngOnBlur.bind(tempFormAfterViewThis));
        }
        this.isFormInit = false;
        // });
    }
    public setDisabledState(disabled: boolean): void {
        this.enabled = !disabled;
        this.disabled = disabled;
    }

    public writeValue(value: T): void {
        let regExp: RegExp = /ejs-radiobutton/g;
        //update control value from angular
        if (this.checked === undefined) {
            this.value = value;
        } else {
            // To resolve boolean type formControl value is not working for radio button control.
            /* istanbul ignore next */
            if (this.ngEle) {
                if (typeof value === 'boolean') {
                    if (regExp.test(this.ngEle.nativeElement.outerHTML)) {
                        this.checked = value === this.value;
                    } else {
                        this.checked = value;
                    }
                } else {
                    this.checked = value === this.value;
                }
            }
        }
        this.angularValue = value;
        this.isUpdated = true;
        // When binding Html textbox value to syncfusion textbox, change event triggered dynamically.
        // To prevent change event, trigger change in component side based on `preventChange` value
        this.preventChange = this.isFormInit ? false : true;
        if (value === null) {
            return;
        }

    }

    public ngOnFocus(e: Event): void {
        /* istanbul ignore else */
        if (this.skipFromEvent !== true) {
            this.focus.emit(e);
        }
    }

    public ngOnBlur(e: Event): void {
        this.propagateTouch();
        /* istanbul ignore else */
        if (this.skipFromEvent !== true) {
            this.blur.emit(e);
        }
    }
}