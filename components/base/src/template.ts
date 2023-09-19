import { ViewContainerRef, EmbeddedViewRef, ElementRef, TemplateRef } from '@angular/core';
import { setTemplateEngine, getTemplateEngine } from '@syncfusion/ej2-base';
import { setValue, getValue } from '@syncfusion/ej2-base';

let stringCompiler: (template: string | Function, helper?: object) => (data: Object | JSON) => string = getTemplateEngine();

/**
 * Angular Template Compiler
 */
export function compile(templateEle: AngularElementType, helper?: Object):
//tslint:disable-next-line
    (data: Object | JSON, component?: any, propName?: any) => Object {
    if (typeof templateEle === 'string' || (typeof templateEle === 'function' && (templateEle as Function).prototype && (templateEle as Function).prototype.CSPTemplate)) {
        return stringCompiler(templateEle, helper);
    } else {
        let contRef: ViewContainerRef = templateEle.elementRef.nativeElement._viewContainerRef;
        let pName: string = templateEle.elementRef.nativeElement.propName;
        //tslint:disable-next-line        
        return (data: Object, component?: any, propName?: any): Object => {
            let context: Object = { $implicit: data };
            /* istanbul ignore next */
            let conRef: ViewContainerRef = contRef ? contRef : component.viewContainerRef;
            let viewRef: EmbeddedViewRef<Object> = conRef.createEmbeddedView(templateEle as TemplateRef<Object>, context);
            viewRef.markForCheck();
            /* istanbul ignore next */
            let viewCollection: { [key: string]: EmbeddedViewRef<Object>[] } = (component && component.registeredTemplate) ?
                component.registeredTemplate : getValue('currentInstance.registeredTemplate', conRef);
            propName = (propName && component.registeredTemplate) ? propName : pName;
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
export function Template<T>(defaultValue?: Object): PropertyDecorator {
    return (target: Object, key: string) => {
        let propertyDescriptor: Object = {
            set: setter(key),
            get: getter(key, defaultValue),
            enumerable: true,
            configurable: true
        };
        Object.defineProperty(target, key, propertyDescriptor);
    };
}

function setter(key: string): Function {
    return function (val: AngularElementType): void {
        if (val === undefined) { return; }
        setValue(key + 'Ref', val, this);
        if (typeof val !== 'string') {
            val.elementRef.nativeElement._viewContainerRef = this.viewContainerRef;
            val.elementRef.nativeElement.propName = key;
        } else {
            if (this.saveChanges) {
                this.saveChanges(key, val, undefined);
                this.dataBind();
            }
        }
    };
}

function getter(key: string, defaultValue: Object): Function {
    return function (): Object {
        /* istanbul ignore next */
        return getValue(key + 'Ref', this) || defaultValue;
    };
}

export interface AngularElementType {
    elementRef: ElementRef;
}

//tslint:disable-next-line
setTemplateEngine({ compile: (compile as any) });
