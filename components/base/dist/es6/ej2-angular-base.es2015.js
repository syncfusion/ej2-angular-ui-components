import { attributes, createElement, getTemplateEngine, getValue, isNullOrUndefined, isObject, isUndefined, setTemplateEngine, setValue } from '@syncfusion/ej2-base';
import { EventEmitter } from '@angular/core';

/**
 * Angular Utility Module
 */
/* tslint:disable */
function applyMixins(derivedClass, baseClass) {
    baseClass.forEach(baseClass => {
        Object.getOwnPropertyNames(baseClass.prototype).forEach(name => {
            derivedClass.prototype[name] = baseClass.prototype[name];
        });
    });
}
/* tslint:disable */
function ComponentMixins(baseClass) {
    return function (derivedClass) {
        applyMixins(derivedClass, baseClass);
    };
}
/**
 * @private
 */
function registerEvents(eventList, obj, direct) {
    let ngEventsEmitter = {};
    if (eventList && eventList.length) {
        for (let event of eventList) {
            if (direct === true) {
                obj.propCollection[event] = new EventEmitter(false);
                obj[event] = obj.propCollection[event];
            }
            else {
                ngEventsEmitter[event] = new EventEmitter(false);
            }
        }
        if (direct !== true) {
            obj.setProperties(ngEventsEmitter, true);
        }
    }
}
/**
 * @private
 */
function clearTemplate(_this, templateNames, index) {
    let regTemplates = Object.keys(_this.registeredTemplate);
    if (regTemplates.length) {
        let regProperties = templateNames && templateNames.filter((val) => {
            return (/\./g.test(val) ? false : true);
        });
        for (let registeredTemplate of (regProperties && regProperties || regTemplates)) {
            /* istanbul ignore next */
            if (index && index.length) {
                for (let e = 0; e < index.length; e++) {
                    for (let m = 0; m < _this.registeredTemplate.template.length; m++) {
                        let value = _this.registeredTemplate.template[m].rootNodes[0];
                        if (value === index[e]) {
                            let rt = _this.registeredTemplate[registeredTemplate];
                            rt[m].destroy();
                        }
                    }
                }
            }
            else {
                for (let rt of _this.registeredTemplate[registeredTemplate]) {
                    if (!rt.destroyed) {
                        let pNode = rt._view.renderer.parentNode(rt.rootNodes[0]);
                        for (let m = 0; m < rt.rootNodes.length; m++) {
                            pNode.appendChild(rt.rootNodes[m]);
                        }
                        rt.destroy();
                    }
                }
            }
            delete _this.registeredTemplate[registeredTemplate];
        }
    }
    for (let tagObject of _this.tagObjects) {
        if (tagObject.instance) {
            tagObject.instance.clearTemplate((templateNames && templateNames.filter((val) => {
                return (new RegExp(tagObject.name).test(val) ? true : false);
            })));
        }
    }
}
/**
 * To set value for the nameSpace in desired object.
 * @param {string} nameSpace - String value to the get the inner object
 * @param {any} value - Value that you need to set.
 * @param {any} obj - Object to get the inner object value.
 * @return {void}
 * @private
 */
function setValue$1(nameSpace, value, object) {
    let keys = nameSpace.replace(/\[/g, '.').replace(/\]/g, '').split('.');
    let fromObj = object || {};
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        if (i + 1 === keys.length) {
            fromObj[key] = value === undefined ? {} : value;
        }
        else if (fromObj[key] === undefined) {
            fromObj[key] = {};
        }
        fromObj = fromObj[key];
    }
    return fromObj;
}

class ComplexBase {
    constructor() {
        this.hasChanges = false;
        this.propCollection = {};
        this.tags = [];
        this.tagObjects = [];
    }
    ngOnInit() {
        this.registeredTemplate = {};
        for (let tag of this.tags) {
            let objInstance = getValue('child' + tag.substring(0, 1).toUpperCase() + tag.substring(1), this);
            if (objInstance) {
                this.tagObjects.push({ instance: objInstance, name: tag });
            }
        }
        let templateProperties = Object.keys(this);
        templateProperties = templateProperties.filter((val) => {
            return /Ref$/i.test(val);
        });
        for (let tempName of templateProperties) {
            let propName = tempName.replace('Ref', '');
            setValue(propName.replace('_', '.'), getValue(propName, this), this.propCollection);
        }
    }
    registerEvents(eventList) {
        registerEvents(eventList, this, true);
    }
    ngOnChanges(changes) {
        for (let propName of Object.keys(changes)) {
            let changedVal = changes[propName];
            this.propCollection[propName] = changedVal.currentValue;
        }
        this.isUpdated = false;
        this.hasChanges = true;
    }
    clearTemplate(templateNames) {
        clearTemplate(this, templateNames);
    }
    getProperties() {
        for (let tagObject of this.tagObjects) {
            this.propCollection[tagObject.name] = tagObject.instance.getProperties();
        }
        return this.propCollection;
    }
    isChanged() {
        let result = this.hasChanges;
        for (let item of this.tagObjects) {
            result = result || item.instance.hasChanges;
        }
        return result;
    }
    ngAfterContentChecked() {
        this.hasChanges = this.isChanged();
        let templateProperties = Object.keys(this);
        templateProperties = templateProperties.filter((val) => {
            return /Ref$/i.test(val);
        });
    }
    ngAfterViewChecked() {
        /* istanbul ignore next */
        if (this.isUpdated) {
            this.hasChanges = false;
        }
    }
}
class ArrayBase {
    constructor(propertyName) {
        this.list = [];
        this.hasChanges = false;
        this.propertyName = propertyName;
    }
    ngOnInit() {
        this.isInitChanges = true;
    }
    ngAfterContentInit() {
        let index = 0;
        this.list = this.children.map((child) => {
            child.index = index++;
            child.property = this.propertyName;
            return child;
        });
        this.hasChanges = true;
    }
    getProperties() {
        let onlyProp = [];
        for (let item of this.list) {
            onlyProp.push(item.getProperties());
        }
        return onlyProp;
    }
    isChanged() {
        let result = false;
        let index = 0;
        let isSourceChanged = false;
        // tslint:disable-next-line
        let childrenDataSource = this.children.map((child) => {
            return child;
        });
        /* istanbul ignore next */
        if (this.list.length === this.children.length) {
            for (let i = 0; i < this.list.length; i++) {
                isSourceChanged = (JSON.stringify(this.list[i].propCollection.dataSource) !==
                    JSON.stringify(childrenDataSource[i].propCollection.dataSource));
            }
        }
        /* istanbul ignore next */
        this.hasNewChildren = (this.list.length !== this.children.length || isSourceChanged) ? true : null;
        /* istanbul ignore next */
        if (this.hasNewChildren) {
            this.list = this.children.map((child) => {
                child.index = index++;
                child.property = this.propertyName;
                return child;
            });
        }
        for (let item of this.list) {
            result = result || item.hasChanges;
        }
        return !!this.list.length && result;
    }
    clearTemplate(templateNames) {
        for (let item of this.list) {
            item.clearTemplate(templateNames && templateNames.map((val) => {
                return new RegExp(this.propertyName).test(val) ? val.replace(this.propertyName + '.', '') : val;
            }));
        }
    }
    ngAfterContentChecked() {
        this.hasChanges = this.isChanged();
        for (let i = 0; i < this.list.length; i++) {
            this.list[i].isUpdated = true;
        }
    }
    ngAfterViewInit() {
        this.isInitChanges = false;
    }
}

/**
 * Angular Component Base Module
 */
class ComponentBase {
    constructor() {
        this.isProtectedOnChange = true;
    }
    saveChanges(key, newValue, oldValue) {
        if (this.isProtectedOnChange) {
            return;
        }
        this.oldProperties[key] = oldValue;
        this.changedProperties[key] = newValue;
        this.finalUpdate();
        // tslint:disable-next-line:no-any
        let changeTime = setTimeout(this.dataBind.bind(this));
        let clearUpdate = () => {
            clearTimeout(changeTime);
        };
        this.finalUpdate = clearUpdate;
    }
    ;
    ngOnInit() {
        this.registeredTemplate = {};
        this.ngBoundedEvents = {};
        this.isAngular = true;
        this.tags = this.tags || [];
        this.complexTemplate = this.complexTemplate || [];
        this.tagObjects = [];
        this.ngAttr = this.getAngularAttr(this.element);
        /* istanbul ignore next */
        this.createElement = (tagName, prop) => {
            //tslint:disable-next-line
            let ele = this.srenderer ? this.srenderer.createElement(tagName) : createElement(tagName);
            if (typeof (prop) === 'undefined') {
                return ele;
            }
            ele.innerHTML = (prop.innerHTML ? prop.innerHTML : '');
            if (prop.className !== undefined) {
                ele.className = prop.className;
            }
            if (prop.id !== undefined) {
                ele.id = prop.id;
            }
            if (prop.styles !== undefined) {
                ele.setAttribute('style', prop.styles);
            }
            if (this.ngAttr !== undefined) {
                ele.setAttribute(this.ngAttr, '');
            }
            if (prop.attrs !== undefined) {
                attributes(ele, prop.attrs);
            }
            return ele;
        };
        for (let tag of this.tags) {
            let tagObject = {
                instance: getValue('child' + tag.substring(0, 1).toUpperCase() + tag.substring(1), this),
                name: tag
            };
            this.tagObjects.push(tagObject);
        }
        let complexTemplates = Object.keys(this);
        complexTemplates = complexTemplates.filter((val) => {
            return /Ref$/i.test(val) && /\_/i.test(val);
        });
        for (let tempName of complexTemplates) {
            let propName = tempName.replace('Ref', '');
            let val = {};
            setValue(propName.replace('_', '.'), getValue(propName, this), val);
            this.setProperties(val, true);
        }
    }
    getAngularAttr(ele) {
        let attributes$$1 = ele.attributes;
        let length = attributes$$1.length;
        let ngAr;
        for (let i = 0; i < length; i++) {
            if (/_ngcontent/g.test(attributes$$1[i].name)) {
                ngAr = attributes$$1[i].name;
            }
        }
        return ngAr;
    }
    ;
    ngAfterViewInit() {
        // Used setTimeout for template binding
        // Refer Link: https://github.com/angular/angular/issues/6005
        setTimeout(() => {
            /* istanbul ignore else  */
            if (typeof window !== 'undefined') {
                this.appendTo(this.element);
            }
        });
    }
    ngOnDestroy() {
        /* istanbul ignore else  */
        if (typeof window !== 'undefined' && this.element.classList.contains('e-control')) {
            this.destroy();
            this.clearTemplate(null);
        }
    }
    //tslint:disable-next-line
    clearTemplate(templateNames, index) {
        clearTemplate(this, templateNames, index);
    }
    ;
    ngAfterContentChecked() {
        for (let tagObject of this.tagObjects) {
            if (!isUndefined(tagObject.instance) &&
                (tagObject.instance.isInitChanges || tagObject.instance.hasChanges || tagObject.instance.hasNewChildren)) {
                if (tagObject.instance.isInitChanges) {
                    let propObj = {};
                    propObj[tagObject.name] = tagObject.instance.getProperties();
                    this.setProperties(propObj, tagObject.instance.isInitChanges);
                }
                else {
                    for (let list of tagObject.instance.list) {
                        if (list.hasChanges) {
                            let curIndex = tagObject.instance.list.indexOf(list);
                            let curChild = getValue(tagObject.name, this)[curIndex];
                            if (curChild !== undefined && curChild.setProperties !== undefined) {
                                curChild.setProperties(list.getProperties());
                            }
                            list.isUpdated = true;
                        }
                    }
                }
            }
        }
    }
    registerEvents(eventList) {
        registerEvents(eventList, this);
    }
    twoWaySetter(newVal, prop) {
        let oldVal = getValue(prop, this.properties);
        if (oldVal === newVal) {
            return;
        }
        this.saveChanges(prop, newVal, oldVal);
        setValue(prop, (isNullOrUndefined(newVal) ? null : newVal), this.properties);
        getValue(prop + 'Change', this).emit(newVal);
    }
    addTwoWay(propList) {
        for (let prop of propList) {
            getValue(prop, this);
            Object.defineProperty(this, prop, {
                get: () => {
                    return getValue(prop, this.properties);
                },
                set: (newVal) => this.twoWaySetter(newVal, prop)
            });
            setValue(prop + 'Change', new EventEmitter(), this);
        }
    }
    addEventListener(eventName, handler) {
        let eventObj = getValue(eventName, this);
        if (!isUndefined(eventObj)) {
            if (!this.ngBoundedEvents[eventName]) {
                this.ngBoundedEvents[eventName] = new Map();
            }
            this.ngBoundedEvents[eventName].set(handler, eventObj.subscribe(handler));
        }
    }
    removeEventListener(eventName, handler) {
        let eventObj = getValue(eventName, this);
        if (!isUndefined(eventObj)) {
            this.ngBoundedEvents[eventName].get(handler).unsubscribe();
        }
    }
    trigger(eventName, eventArgs, success) {
        let eventObj = getValue(eventName, this);
        let prevDetection = this.isProtectedOnChange;
        this.isProtectedOnChange = false;
        if (eventArgs) {
            eventArgs.name = eventName;
        }
        if (!isUndefined(eventObj)) {
            eventObj.next(eventArgs);
        }
        let localEventObj = getValue('local' + eventName.charAt(0).toUpperCase() + eventName.slice(1), this);
        if (!isUndefined(localEventObj)) {
            localEventObj.call(this, eventArgs);
        }
        this.isProtectedOnChange = prevDetection;
        /* istanbul ignore else  */
        if (success) {
            success.call(this, eventArgs);
        }
    }
}

/**
 * Angular Form Base Module
 */
class FormBase {
    propagateChange(_) { return; }
    propagateTouch() { return; }
    localChange(e) {
        //tslint:disable-next-line
        let value = (e.checked === undefined ? e.value : e.checked);
        this.objCheck = isObject(value);
        if (this.objCheck === true) {
            this.duplicateValue = JSON.stringify(value);
            this.duplicateAngularValue = JSON.stringify(this.angularValue);
            if (this.duplicateValue !== this.duplicateAngularValue && this.propagateChange !== undefined && value !== undefined) {
                // Update angular from our control
                this.propagateChange(value);
                this.angularValue = value;
            }
        }
        else {
            if (value !== this.angularValue && this.propagateChange !== undefined && value !== undefined) {
                // While reset form using reset() method ng-dirty not get updated, so while value is empty just update angularValue only
                if (value !== '' && value !== null) {
                    // Update angular from our control
                    this.propagateChange(value);
                    this.angularValue = value;
                }
                else {
                    //tslint:disable-next-line
                    let optionalValue = value;
                    this.propagateChange(optionalValue);
                    this.angularValue = value;
                }
            }
        }
    }
    registerOnChange(registerFunction) {
        this.propagateChange = registerFunction;
    }
    registerOnTouched(registerFunction) {
        this.propagateTouch = registerFunction;
    }
    twoWaySetter(newVal, prop) {
        let oldVal = getValue(prop, this.properties);
        let ele = this.inputElement || this.element;
        if (oldVal === newVal &&
            (ele.value === undefined || ele.value === '')) {
            return;
        }
        this.saveChanges(prop, newVal, oldVal);
        setValue(prop, (isNullOrUndefined(newVal) ? null : newVal), this.properties);
        getValue(prop + 'Change', this).emit(newVal);
    }
    ngAfterViewInit() {
        // Used setTimeout for template binding
        // Refer Link: https://github.com/angular/angular/issues/6005
        // Removed setTimeout, Because we have called markForCheck() method in Angular Template Compiler
        // setTimeout(() => {
        /* istanbul ignore else */
        if (typeof window !== 'undefined') {
            this.appendTo(this.element);
            let ele = this.inputElement || this.element;
            ele.addEventListener('focus', this.ngOnFocus.bind(this));
            ele.addEventListener('blur', this.ngOnBlur.bind(this));
        }
        // });
    }
    setDisabledState(disabled) {
        this.enabled = !disabled;
        this.disabled = disabled;
    }
    writeValue(value) {
        //update control value from angular
        if (this.checked === undefined) {
            this.value = value;
        }
        else {
            if (typeof value === 'boolean') {
                this.checked = value;
            }
            else {
                this.checked = value === this.value;
            }
        }
        if (value === null) {
            return;
        }
        this.angularValue = value;
        // When binding Html textbox value to syncfusion textbox, change event triggered dynamically.
        // To prevent change event, trigger change in component side based on `preventChange` value
        this.preventChange = true;
    }
    ngOnFocus(e) {
        /* istanbul ignore else */
        if (this.skipFromEvent !== true) {
            this.focus.emit(e);
        }
    }
    ngOnBlur(e) {
        this.propagateTouch();
        /* istanbul ignore else */
        if (this.skipFromEvent !== true) {
            this.blur.emit(e);
        }
    }
}

let stringCompiler = getTemplateEngine();
/**
 * Angular Template Compiler
 */
function compile(templateEle, helper) {
    if (typeof templateEle === 'string') {
        return stringCompiler(templateEle, helper);
    }
    else {
        let contRef = templateEle.elementRef.nativeElement._viewContainerRef;
        let pName = templateEle.elementRef.nativeElement.propName;
        //tslint:disable-next-line        
        return (data, component, propName) => {
            let context = { $implicit: data };
            let conRef = contRef ? contRef : component.viewContainerRef;
            let viewRef = conRef.createEmbeddedView(templateEle, context);
            viewRef.markForCheck();
            let viewCollection = component ?
                component.registeredTemplate : getValue('currentInstance.registeredTemplate', conRef);
            propName = propName ? propName : pName;
            if (typeof viewCollection[propName] === 'undefined') {
                viewCollection[propName] = [];
            }
            viewCollection[propName].push(viewRef);
            return viewRef.rootNodes;
        };
    }
}
/**
 * Property decorator for angular.
 */
function Template(defaultValue) {
    return (target, key) => {
        let propertyDescriptor = {
            set: setter(key),
            get: getter(key, defaultValue),
            enumerable: true,
            configurable: true
        };
        Object.defineProperty(target, key, propertyDescriptor);
    };
}
function setter(key) {
    return function (val) {
        if (val === undefined) {
            return;
        }
        setValue(key + 'Ref', val, this);
        if (typeof val !== 'string') {
            val.elementRef.nativeElement._viewContainerRef = this.viewContainerRef;
            val.elementRef.nativeElement.propName = key;
        }
        else {
            if (this.saveChanges) {
                this.saveChanges(key, val, undefined);
                this.dataBind();
            }
        }
    };
}
function getter(key, defaultValue) {
    return function () {
        return getValue(key + 'Ref', this) || defaultValue;
    };
}
//tslint:disable-next-line
setTemplateEngine({ compile: compile });

/**
 * Index
 */

export { ComplexBase, ArrayBase, ComponentBase, FormBase, applyMixins, ComponentMixins, registerEvents, clearTemplate, setValue$1 as setValue, compile, Template };
//# sourceMappingURL=ej2-angular-base.es2015.js.map
