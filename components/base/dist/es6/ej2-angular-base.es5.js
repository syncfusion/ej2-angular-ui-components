import { attributes, createElement, getTemplateEngine, getValue, isNullOrUndefined, isObject, isUndefined, setTemplateEngine, setValue } from '@syncfusion/ej2-base';
import { EventEmitter } from '@angular/core';

/**
 * Angular Utility Module
 */
/* tslint:disable */
function applyMixins(derivedClass, baseClass) {
    baseClass.forEach(function (baseClass) {
        Object.getOwnPropertyNames(baseClass.prototype).forEach(function (name) {
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
    var ngEventsEmitter = {};
    if (eventList && eventList.length) {
        for (var _i = 0, eventList_1 = eventList; _i < eventList_1.length; _i++) {
            var event_1 = eventList_1[_i];
            if (direct === true) {
                obj.propCollection[event_1] = new EventEmitter(false);
                obj[event_1] = obj.propCollection[event_1];
            }
            else {
                ngEventsEmitter[event_1] = new EventEmitter(false);
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
    var regTemplates = Object.keys(_this.registeredTemplate);
    if (regTemplates.length) {
        /* istanbul ignore next */
        var regProperties = templateNames && templateNames.filter(function (val) {
            return (/\./g.test(val) ? false : true);
        });
        for (var _i = 0, _a = (regProperties && regProperties || regTemplates); _i < _a.length; _i++) {
            var registeredTemplate = _a[_i];
            /* istanbul ignore next */
            if (index && index.length) {
                for (var e = 0; e < index.length; e++) {
                    for (var m = 0; m < _this.registeredTemplate.template.length; m++) {
                        var value = _this.registeredTemplate.template[m].rootNodes[0];
                        if (value === index[e]) {
                            var rt = _this.registeredTemplate[registeredTemplate];
                            rt[m].destroy();
                        }
                    }
                }
            }
            else {
                for (var _b = 0, _c = _this.registeredTemplate[registeredTemplate]; _b < _c.length; _b++) {
                    var rt = _c[_b];
                    if (!rt.destroyed) {
                        if (rt._view) {
                            var pNode = rt._view.renderer.parentNode(rt.rootNodes[0]);
                            for (var m = 0; m < rt.rootNodes.length; m++) {
                                pNode.appendChild(rt.rootNodes[m]);
                            }
                        }
                        rt.destroy();
                    }
                }
            }
            delete _this.registeredTemplate[registeredTemplate];
        }
    }
    var _loop_1 = function (tagObject) {
        if (tagObject.instance) {
            /* istanbul ignore next */
            tagObject.instance.clearTemplate((templateNames && templateNames.filter(function (val) {
                return (new RegExp(tagObject.name).test(val) ? true : false);
            })));
        }
    };
    for (var _d = 0, _e = _this.tagObjects; _d < _e.length; _d++) {
        var tagObject = _e[_d];
        _loop_1(tagObject);
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
    var keys = nameSpace.replace(/\[/g, '.').replace(/\]/g, '').split('.');
    /* istanbul ignore next */
    var fromObj = object || {};
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
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

var ComplexBase = /** @__PURE__ @class */ (function () {
    function ComplexBase() {
        this.hasChanges = false;
        this.propCollection = {};
        this.tags = [];
        this.tagObjects = [];
    }
    ComplexBase.prototype.ngOnInit = function () {
        this.registeredTemplate = {};
        for (var _i = 0, _a = this.tags; _i < _a.length; _i++) {
            var tag = _a[_i];
            var objInstance = getValue('child' + tag.substring(0, 1).toUpperCase() + tag.substring(1), this);
            if (objInstance) {
                this.tagObjects.push({ instance: objInstance, name: tag });
            }
        }
        var templateProperties = Object.keys(this);
        templateProperties = templateProperties.filter(function (val) {
            return /Ref$/i.test(val);
        });
        for (var _b = 0, templateProperties_1 = templateProperties; _b < templateProperties_1.length; _b++) {
            var tempName = templateProperties_1[_b];
            var propName = tempName.replace('Ref', '');
            setValue(propName.replace('_', '.'), getValue(propName, this), this.propCollection);
        }
        // Angular 9 compatibility to overcome ngOnchange not get triggered issue
        // To Update properties to "this.propCollection"
        var propList = Object.keys(this);
        /* istanbul ignore next */
        if (this.directivePropList) {
            for (var k = 0; k < this.directivePropList.length; k++) {
                var dirPropName = this.directivePropList[k];
                if (propList.indexOf(dirPropName) !== -1) {
                    setValue(dirPropName, getValue(dirPropName, this), this.propCollection);
                }
            }
            this.hasChanges = true;
        }
    };
    ComplexBase.prototype.registerEvents = function (eventList) {
        registerEvents(eventList, this, true);
    };
    ComplexBase.prototype.ngOnChanges = function (changes) {
        for (var _i = 0, _a = Object.keys(changes); _i < _a.length; _i++) {
            var propName = _a[_i];
            var changedVal = changes[propName];
            this.propCollection[propName] = changedVal.currentValue;
        }
        this.isUpdated = false;
        this.hasChanges = true;
    };
    /* istanbul ignore next */
    ComplexBase.prototype.clearTemplate = function (templateNames) {
        clearTemplate(this, templateNames);
    };
    ComplexBase.prototype.getProperties = function () {
        /* istanbul ignore next */
        for (var _i = 0, _a = this.tagObjects; _i < _a.length; _i++) {
            var tagObject = _a[_i];
            this.propCollection[tagObject.name] = tagObject.instance.getProperties();
        }
        return this.propCollection;
    };
    ComplexBase.prototype.isChanged = function () {
        var result = this.hasChanges;
        /* istanbul ignore next */
        for (var _i = 0, _a = this.tagObjects; _i < _a.length; _i++) {
            var item = _a[_i];
            result = result || item.instance.hasChanges;
        }
        return result;
    };
    ComplexBase.prototype.ngAfterContentChecked = function () {
        this.hasChanges = this.isChanged();
        var templateProperties = Object.keys(this);
        templateProperties = templateProperties.filter(function (val) {
            return /Ref$/i.test(val);
        });
        // For angular 9 compatibility
        // ngOnchange hook not get triggered for copmplex directive
        // Due to this, we have manually set template properties v alues once we get template property reference
        for (var _i = 0, templateProperties_2 = templateProperties; _i < templateProperties_2.length; _i++) {
            var tempName = templateProperties_2[_i];
            var propName = tempName.replace('Ref', '');
            setValue(propName.replace('_', '.'), getValue(propName, this), this.propCollection);
        }
    };
    ComplexBase.prototype.ngAfterViewChecked = function () {
        /* istanbul ignore next */
        if (this.isUpdated) {
            this.hasChanges = false;
        }
    };
    return ComplexBase;
}());
var ArrayBase = /** @__PURE__ @class */ (function () {
    function ArrayBase(propertyName) {
        this.list = [];
        this.hasChanges = false;
        this.propertyName = propertyName;
    }
    ArrayBase.prototype.ngOnInit = function () {
        this.isInitChanges = true;
    };
    ArrayBase.prototype.ngAfterContentInit = function () {
        var _this = this;
        var index = 0;
        /* istanbul ignore next */
        this.list = this.children.map(function (child) {
            child.index = index++;
            child.property = _this.propertyName;
            return child;
        });
        this.hasChanges = true;
    };
    ArrayBase.prototype.getProperties = function () {
        var onlyProp = [];
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var item = _a[_i];
            onlyProp.push(item.getProperties());
        }
        return onlyProp;
    };
    ArrayBase.prototype.isChanged = function () {
        var _this = this;
        var result = false;
        var index = 0;
        var isSourceChanged = false;
        // tslint:disable-next-line
        var childrenDataSource = this.children.map(function (child) {
            return child;
        });
        /* istanbul ignore next */
        if (this.list.length === this.children.length) {
            for (var i = 0; i < this.list.length; i++) {
                if (this.list[i].propCollection.dataSource) {
                    isSourceChanged = (JSON.stringify(this.list[i].propCollection.dataSource) !==
                        JSON.stringify(childrenDataSource[i].propCollection.dataSource));
                }
                else {
                    // tslint:disable-next-line
                    var keys = Object.keys(this.list[i].propCollection);
                    for (var j = 0; j < keys.length; j++) {
                        if (this.list[i].propCollection[keys[j]] &&
                            this.list[i].propCollection[keys[j]].constructor.name === 'TemplateRef_') {
                            isSourceChanged = true;
                            break;
                        }
                    }
                }
            }
        }
        this.hasNewChildren = (this.list.length !== this.children.length || isSourceChanged) ? true : null;
        if (this.hasNewChildren) {
            this.list = this.children.map(function (child) {
                child.index = index++;
                child.property = _this.propertyName;
                return child;
            });
        }
        /* istanbul ignore end */
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var item = _a[_i];
            result = result || item.hasChanges;
        }
        return !!this.list.length && result;
    };
    ArrayBase.prototype.clearTemplate = function (templateNames) {
        var _this = this;
        /* istanbul ignore next */
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var item = _a[_i];
            item.clearTemplate(templateNames && templateNames.map(function (val) {
                return new RegExp(_this.propertyName).test(val) ? val.replace(_this.propertyName + '.', '') : val;
            }));
        }
    };
    ArrayBase.prototype.ngAfterContentChecked = function () {
        this.hasChanges = this.isChanged();
        for (var i = 0; i < this.list.length; i++) {
            this.list[i].isUpdated = true;
        }
    };
    ArrayBase.prototype.ngAfterViewInit = function () {
        this.isInitChanges = false;
    };
    return ArrayBase;
}());

/**
 * Angular Component Base Module
 */
var ComponentBase = /** @__PURE__ @class */ (function () {
    function ComponentBase() {
        this.isProtectedOnChange = true;
    }
    ComponentBase.prototype.saveChanges = function (key, newValue, oldValue) {
        if (this.isProtectedOnChange) {
            return;
        }
        this.oldProperties[key] = oldValue;
        this.changedProperties[key] = newValue;
        this.finalUpdate();
        // tslint:disable-next-line:no-any
        var changeTime = setTimeout(this.dataBind.bind(this));
        var clearUpdate = function () {
            clearTimeout(changeTime);
        };
        this.finalUpdate = clearUpdate;
    };
    
    // tslint:disable-next-line:no-any
    ComponentBase.prototype.ngOnInit = function (isTempRef) {
        // tslint:disable-next-line:no-any
        var tempOnThis = isTempRef || this;
        tempOnThis.registeredTemplate = {};
        tempOnThis.ngBoundedEvents = {};
        tempOnThis.isAngular = true;
        /* istanbul ignore next */
        if (isTempRef) {
            this.tags = isTempRef.tags;
        }
        tempOnThis.tags = this.tags || [];
        tempOnThis.complexTemplate = this.complexTemplate || [];
        tempOnThis.tagObjects = [];
        tempOnThis.ngAttr = this.getAngularAttr(tempOnThis.element);
        /* istanbul ignore next */
        tempOnThis.createElement = function (tagName, prop) {
            //tslint:disable-next-line
            var ele = tempOnThis.srenderer ? tempOnThis.srenderer.createElement(tagName) : createElement(tagName);
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
            if (tempOnThis.ngAttr !== undefined) {
                ele.setAttribute(tempOnThis.ngAttr, '');
            }
            if (prop.attrs !== undefined) {
                attributes(ele, prop.attrs);
            }
            return ele;
        };
        for (var _i = 0, _a = tempOnThis.tags; _i < _a.length; _i++) {
            var tag = _a[_i];
            var tagObject = {
                instance: getValue('child' + tag.substring(0, 1).toUpperCase() + tag.substring(1), tempOnThis),
                name: tag
            };
            tempOnThis.tagObjects.push(tagObject);
        }
        var complexTemplates = Object.keys(tempOnThis);
        complexTemplates = complexTemplates.filter(function (val) {
            return /Ref$/i.test(val) && /\_/i.test(val);
        });
        for (var _b = 0, complexTemplates_1 = complexTemplates; _b < complexTemplates_1.length; _b++) {
            var tempName = complexTemplates_1[_b];
            var propName = tempName.replace('Ref', '');
            var val = {};
            setValue(propName.replace('_', '.'), getValue(propName, tempOnThis), val);
            tempOnThis.setProperties(val, true);
        }
    };
    ComponentBase.prototype.getAngularAttr = function (ele) {
        var attributes$$1 = ele.attributes;
        var length = attributes$$1.length;
        var ngAr;
        for (var i = 0; i < length; i++) {
            /* istanbul ignore next */
            if (/_ngcontent/g.test(attributes$$1[i].name)) {
                ngAr = attributes$$1[i].name;
            }
        }
        return ngAr;
    };
    
    // tslint:disable-next-line:no-any
    ComponentBase.prototype.ngAfterViewInit = function (isTempRef) {
        // tslint:disable-next-line:no-any
        var tempAfterViewThis = isTempRef || this;
        var regExp = /ejs-tab|ejs-accordion/g;
        /* istanbul ignore next */
        if (regExp.test(tempAfterViewThis.ngEle.nativeElement.outerHTML)) {
            tempAfterViewThis.ngEle.nativeElement.style.visibility = 'hidden';
        }
        // Used setTimeout for template binding
        // Refer Link: https://github.com/angular/angular/issues/6005
        setTimeout(function () {
            /* istanbul ignore else  */
            if (typeof window !== 'undefined') {
                tempAfterViewThis.appendTo(tempAfterViewThis.element);
                tempAfterViewThis.ngEle.nativeElement.style.visibility = '';
            }
        });
    };
    // tslint:disable-next-line:no-any
    ComponentBase.prototype.ngOnDestroy = function (isTempRef) {
        // tslint:disable-next-line:no-any
        var tempOnDestroyThis = isTempRef || this;
        /* istanbul ignore else  */
        if (typeof window !== 'undefined' && tempOnDestroyThis.element.classList.contains('e-control')) {
            tempOnDestroyThis.destroy();
            tempOnDestroyThis.clearTemplate(null);
        }
    };
    //tslint:disable-next-line
    ComponentBase.prototype.clearTemplate = function (templateNames, index) {
        clearTemplate(this, templateNames, index);
    };
    
    // tslint:disable-next-line:no-any
    ComponentBase.prototype.ngAfterContentChecked = function (isTempRef) {
        // tslint:disable-next-line:no-any
        var tempAfterContentThis = isTempRef || this;
        for (var _i = 0, _a = tempAfterContentThis.tagObjects; _i < _a.length; _i++) {
            var tagObject = _a[_i];
            if (!isUndefined(tagObject.instance) &&
                (tagObject.instance.isInitChanges || tagObject.instance.hasChanges || tagObject.instance.hasNewChildren)) {
                if (tagObject.instance.isInitChanges) {
                    var propObj = {};
                    // For angular 9 compatibility
                    // Not able to get complex directive properties reference ni Onint hook
                    // So we have constructed property here and used
                    var complexDirProps = void 0;
                    var list = getValue('instance.list', tagObject);
                    if (list && list.length) {
                        complexDirProps = list[0].directivePropList;
                    }
                    var skip = true;
                    if (tempAfterContentThis.getModuleName && tempAfterContentThis.getModuleName() === 'gantt') {
                        skip = false;
                    }
                    if (complexDirProps && skip && complexDirProps.indexOf(tagObject.instance.propertyName) === -1) {
                        var compDirPropList = Object.keys(tagObject.instance.list[0].propCollection);
                        for (var h = 0; h < tagObject.instance.list.length; h++) {
                            tagObject.instance.list[h].propCollection[tagObject.instance.propertyName] = [];
                            var obj = {};
                            for (var k = 0; k < compDirPropList.length; k++) {
                                var complexPropName = compDirPropList[k];
                                obj[complexPropName] = tagObject.instance.list[h].propCollection[complexPropName];
                            }
                            tagObject.instance.list[h].propCollection[tagObject.instance.propertyName].push(obj);
                        }
                    }
                    // End angular 9 compatibility
                    propObj[tagObject.name] = tagObject.instance.getProperties();
                    tempAfterContentThis.setProperties(propObj, tagObject.instance.isInitChanges);
                }
                else {
                    /* istanbul ignore next */
                    for (var _b = 0, _c = tagObject.instance.list; _b < _c.length; _b++) {
                        var list = _c[_b];
                        if (list.hasChanges) {
                            var curIndex = tagObject.instance.list.indexOf(list);
                            var curChild = getValue(tagObject.name, tempAfterContentThis)[curIndex];
                            if (curChild !== undefined && curChild.setProperties !== undefined) {
                                curChild.setProperties(list.getProperties());
                            }
                            list.isUpdated = true;
                        }
                    }
                }
            }
        }
    };
    ComponentBase.prototype.registerEvents = function (eventList) {
        registerEvents(eventList, this);
    };
    ComponentBase.prototype.twoWaySetter = function (newVal, prop) {
        var oldVal = getValue(prop, this.properties);
        if (oldVal === newVal) {
            return;
        }
        this.saveChanges(prop, newVal, oldVal);
        setValue(prop, (isNullOrUndefined(newVal) ? null : newVal), this.properties);
        getValue(prop + 'Change', this).emit(newVal);
    };
    ComponentBase.prototype.addTwoWay = function (propList) {
        var _this = this;
        var _loop_1 = function (prop) {
            getValue(prop, this_1);
            Object.defineProperty(this_1, prop, {
                get: function () {
                    return getValue(prop, _this.properties);
                },
                set: function (newVal) { return _this.twoWaySetter(newVal, prop); }
            });
            setValue(prop + 'Change', new EventEmitter(), this_1);
        };
        var this_1 = this;
        for (var _i = 0, propList_1 = propList; _i < propList_1.length; _i++) {
            var prop = propList_1[_i];
            _loop_1(prop);
        }
    };
    ComponentBase.prototype.addEventListener = function (eventName, handler) {
        var eventObj = getValue(eventName, this);
        if (!isUndefined(eventObj)) {
            if (!this.ngBoundedEvents[eventName]) {
                this.ngBoundedEvents[eventName] = new Map();
            }
            this.ngBoundedEvents[eventName].set(handler, eventObj.subscribe(handler));
        }
    };
    ComponentBase.prototype.removeEventListener = function (eventName, handler) {
        var eventObj = getValue(eventName, this);
        if (!isUndefined(eventObj)) {
            this.ngBoundedEvents[eventName].get(handler).unsubscribe();
        }
    };
    ComponentBase.prototype.trigger = function (eventName, eventArgs, success) {
        var eventObj = getValue(eventName, this);
        var prevDetection = this.isProtectedOnChange;
        this.isProtectedOnChange = false;
        if (eventArgs) {
            eventArgs.name = eventName;
        }
        if (!isUndefined(eventObj)) {
            eventObj.next(eventArgs);
        }
        var localEventObj = getValue('local' + eventName.charAt(0).toUpperCase() + eventName.slice(1), this);
        if (!isUndefined(localEventObj)) {
            localEventObj.call(this, eventArgs);
        }
        this.isProtectedOnChange = prevDetection;
        /* istanbul ignore else  */
        if (success) {
            success.call(this, eventArgs);
        }
    };
    return ComponentBase;
}());

/**
 * Angular Form Base Module
 */
var FormBase = /** @__PURE__ @class */ (function () {
    function FormBase() {
    }
    FormBase.prototype.propagateChange = function (_) { return; };
    FormBase.prototype.propagateTouch = function () { return; };
    FormBase.prototype.localChange = function (e) {
        //tslint:disable-next-line
        var value = (e.checked === undefined ? e.value : e.checked);
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
                    var optionalValue = value;
                    this.propagateChange(optionalValue);
                    this.angularValue = value;
                }
            }
        }
    };
    FormBase.prototype.registerOnChange = function (registerFunction) {
        this.propagateChange = registerFunction;
    };
    FormBase.prototype.registerOnTouched = function (registerFunction) {
        this.propagateTouch = registerFunction;
    };
    FormBase.prototype.twoWaySetter = function (newVal, prop) {
        var oldVal = getValue(prop, this.properties);
        var ele = this.inputElement || this.element;
        if (oldVal === newVal &&
            (ele.value === undefined || ele.value === '')) {
            return;
        }
        this.saveChanges(prop, newVal, oldVal);
        setValue(prop, (isNullOrUndefined(newVal) ? null : newVal), this.properties);
        getValue(prop + 'Change', this).emit(newVal);
    };
    // tslint:disable-next-line:no-any
    FormBase.prototype.ngAfterViewInit = function (isTempRef) {
        // tslint:disable-next-line:no-any
        var tempFormAfterViewThis = isTempRef || this;
        // Used setTimeout for template binding
        // Refer Link: https://github.com/angular/angular/issues/6005
        // Removed setTimeout, Because we have called markForCheck() method in Angular Template Compiler
        // setTimeout(() => {
        /* istanbul ignore else */
        if (typeof window !== 'undefined') {
            tempFormAfterViewThis.appendTo(tempFormAfterViewThis.element);
            var ele = tempFormAfterViewThis.inputElement || tempFormAfterViewThis.element;
            ele.addEventListener('focus', tempFormAfterViewThis.ngOnFocus.bind(tempFormAfterViewThis));
            ele.addEventListener('blur', tempFormAfterViewThis.ngOnBlur.bind(tempFormAfterViewThis));
        }
        // });
    };
    FormBase.prototype.setDisabledState = function (disabled) {
        this.enabled = !disabled;
        this.disabled = disabled;
    };
    FormBase.prototype.writeValue = function (value) {
        var regExp = /ejs-radiobutton/g;
        //update control value from angular
        if (this.checked === undefined) {
            this.value = value;
        }
        else {
            // To resolve boolean type formControl value is not working for radio button control.
            /* istanbul ignore next */
            if (typeof value === 'boolean') {
                if (this.ngEle && regExp.test(this.ngEle.nativeElement.outerHTML)) {
                    this.checked = value === this.value;
                }
                else {
                    this.checked = value;
                }
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
    };
    FormBase.prototype.ngOnFocus = function (e) {
        /* istanbul ignore else */
        if (this.skipFromEvent !== true) {
            this.focus.emit(e);
        }
    };
    FormBase.prototype.ngOnBlur = function (e) {
        this.propagateTouch();
        /* istanbul ignore else */
        if (this.skipFromEvent !== true) {
            this.blur.emit(e);
        }
    };
    return FormBase;
}());

var stringCompiler = getTemplateEngine();
/**
 * Angular Template Compiler
 */
function compile(templateEle, helper) {
    if (typeof templateEle === 'string') {
        return stringCompiler(templateEle, helper);
    }
    else {
        var contRef_1 = templateEle.elementRef.nativeElement._viewContainerRef;
        var pName_1 = templateEle.elementRef.nativeElement.propName;
        //tslint:disable-next-line        
        return function (data, component, propName) {
            var context = { $implicit: data };
            /* istanbul ignore next */
            var conRef = contRef_1 ? contRef_1 : component.viewContainerRef;
            var viewRef = conRef.createEmbeddedView(templateEle, context);
            viewRef.markForCheck();
            /* istanbul ignore next */
            var viewCollection = component ?
                component.registeredTemplate : getValue('currentInstance.registeredTemplate', conRef);
            propName = propName ? propName : pName_1;
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
    return function (target, key) {
        var propertyDescriptor = {
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
        /* istanbul ignore next */
        return getValue(key + 'Ref', this) || defaultValue;
    };
}
//tslint:disable-next-line
setTemplateEngine({ compile: compile });

/**
 * Index
 */

export { ComplexBase, ArrayBase, ComponentBase, FormBase, applyMixins, ComponentMixins, registerEvents, clearTemplate, setValue$1 as setValue, compile, Template };
//# sourceMappingURL=ej2-angular-base.es5.js.map
