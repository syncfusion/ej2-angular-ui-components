import { EventEmitter } from '@angular/core';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
/**
 * Angular Utility Module
 */

/* tslint:disable */
export function applyMixins(derivedClass: any, baseClass: any[]): void {
    baseClass.forEach(baseClass => {
        Object.getOwnPropertyNames(baseClass.prototype).forEach(name => {
             if (!derivedClass.prototype.hasOwnProperty(name) || baseClass.isFormBase) {
                derivedClass.prototype[name] = baseClass.prototype[name];
              }
        });
    });
}

/* tslint:disable */
export function ComponentMixins(baseClass: Function[]): ClassDecorator {
    return function (derivedClass: Function) {
        applyMixins(derivedClass, baseClass);
    };
}

/**
 * @private 
 */
export function registerEvents(eventList: string[], obj: any, direct?: boolean): void {
    let ngEventsEmitter: { [key: string]: Object } = {};
    if (eventList && eventList.length) {
        for (let event of eventList) {
            if (direct === true) {
                obj.propCollection[event] = new EventEmitter(false);
                obj[event] = obj.propCollection[event];
            } else {
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
export function clearTemplate(_this: any, templateNames?: string[], index?: any): void {
    let regTemplates: string[] = Object.keys(_this.registeredTemplate);
    if (regTemplates.length) {
        /* istanbul ignore next */
        let regProperties: string[] = templateNames && templateNames.filter(
            (val: string) => {
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
            } else {
                if (_this.registeredTemplate[registeredTemplate]) {
                    for (let rt of _this.registeredTemplate[registeredTemplate]) {
                        if (!rt.destroyed) {
                            if (rt._view) {
                                let pNode: any = rt._view.renderer.parentNode(rt.rootNodes[0]);
                                if (!isNullOrUndefined(pNode)) {
                                    for (let m: number = 0; m < rt.rootNodes.length; m++) {
                                        pNode.appendChild(rt.rootNodes[m]);
                                    }
                                }
                            }
                            rt.destroy();
                        }
                    }
                }
            }
            delete _this.registeredTemplate[registeredTemplate];
        }
    }
    for (let tagObject of _this.tagObjects) {
        if (tagObject.instance) {
            /* istanbul ignore next */
            tagObject.instance.clearTemplate((templateNames && templateNames.filter(
                (val: string) => {
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
export function setValue(nameSpace: string, value: any, object: any): any {
    let keys: string[] = nameSpace.replace(/\[/g, '.').replace(/\]/g, '').split('.');
    /* istanbul ignore next */
    let fromObj: any = object || {};
    for (let i: number = 0; i < keys.length; i++) {
        let key: string = keys[i];
        if (i + 1 === keys.length) {
            fromObj[key] = value === undefined ? {} : value;
        } else if (fromObj[key] === undefined) {
            fromObj[key] = {};
        }
        fromObj = fromObj[key];
    }
    return fromObj;
}

/* tslint:enable */




export interface PropertyCollectionInfo {
    props: PropertyDetails[];
    complexProps: PropertyDetails[];
    colProps: PropertyDetails[];
    events: PropertyDetails[];
    propNames: string[];
    complexPropNames: string[];
    colPropNames: string[];
    eventNames: string[];
}

export interface PropertyDetails {
    propertyName: string;
    type: FunctionConstructor | Object;
    defaultValue: Object;
}