/**
 * Angular Component Base Module
 */
import { getValue, isUndefined, setValue, isNullOrUndefined, attributes, createElement } from '@syncfusion/ej2-base';
import { EventEmitter, EmbeddedViewRef, Renderer2, ElementRef } from '@angular/core';
import { clearTemplate, registerEvents } from './util';

const SVG_REG: RegExp = /^svg|^path|^g/;

export interface IComponentBase {
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
}

interface Tag {
    hasChanges: boolean;
    getProperties?: Function;
    isInitChanges: boolean;
    hasNewChildren: boolean;
    list: TagList[];
    clearTemplate?: (arg: string[]) => void;
}

interface TagList {
    getProperties: Function;
    hasChanges: boolean;
    isUpdated: boolean;
}

export class ComponentBase<T> {
    public element: HTMLElement;
    public tags: string[];
    private ngAttr: string;
    private srenderer: Renderer2;
    protected isProtectedOnChange: boolean = true;
    private isAngular: boolean;
    private isFormInit: boolean = true;
    public preventChange: boolean;
    public isPreventChange: boolean;
    protected oldProperties: { [key: string]: Object };
    protected changedProperties: { [key: string]: Object };
    protected finalUpdate: Function;
    protected isUpdated: boolean;
    public ngEle: ElementRef;

    private tagObjects: { name: string, instance: Tag }[];
    public onPropertyChanged: (newProp: Object, oldProp: Object) => void;
    public appendTo: (ele: string | HTMLElement) => void;
    public setProperties: (obj: Object, muteOnChange: boolean) => void;
    public properties: Object;
    public dataBind: Function;
    private createElement: Function;
    protected saveChanges(key: string, newValue: Object, oldValue: Object): void {
        if (this.isProtectedOnChange) { return; }
        this.oldProperties[key] = oldValue;
        this.changedProperties[key] = newValue;
        this.finalUpdate();
        // tslint:disable-next-line:no-any
        let changeTime: any = setTimeout(this.dataBind.bind(this));
        let clearUpdate: Function = () => {
            clearTimeout(changeTime);
        };
        this.finalUpdate = clearUpdate;
    };

    public destroy: Function;
    private registeredTemplate: { [key: string]: EmbeddedViewRef<Object>[] };
    private complexTemplate: string[];

    private ngBoundedEvents: { [key: string]: Map<object, object> };
    // tslint:disable-next-line:no-any
    public ngOnInit(isTempRef?: any): void {
        // tslint:disable-next-line:no-any
        let tempOnThis: any = isTempRef || this;
        tempOnThis.registeredTemplate = {};
        tempOnThis.ngBoundedEvents = {};
        tempOnThis.isAngular = true;
        tempOnThis.isFormInit = true;
        /* istanbul ignore next */
        if (isTempRef) {
            this.tags = isTempRef.tags;
        }
        tempOnThis.tags = this.tags || [];
        tempOnThis.complexTemplate = this.complexTemplate || [];
        tempOnThis.tagObjects = [];
        tempOnThis.ngAttr = this.getAngularAttr(tempOnThis.element);
        /* istanbul ignore next */
        tempOnThis.createElement = (tagName: string, prop?:
            { id?: string, className?: string, innerHTML?: string, styles?: string, attrs?: { [key: string]: string } }) => {
            //tslint:disable-next-line
            let ele: Element = tempOnThis.srenderer ? tempOnThis.srenderer.createElement(tagName) : createElement(tagName);
            if (typeof (prop) === 'undefined') {
                return <HTMLElement>ele;
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
            return <HTMLElement>ele;
        };
        for (let tag of tempOnThis.tags) {
            let tagObject: { name: string, instance: Tag } = {
                instance: getValue('child' + tag.substring(0, 1).toUpperCase() + tag.substring(1), tempOnThis),
                name: tag
            };
            tempOnThis.tagObjects.push(tagObject);
        }

        let complexTemplates: string[] = Object.keys(tempOnThis);
        complexTemplates = complexTemplates.filter((val: string): boolean => {
            return /Ref$/i.test(val) && /\_/i.test(val);
        });
        for (let tempName of complexTemplates) {
            let propName: string = tempName.replace('Ref', '');
            let val: Object = {};
            setValue(propName.replace('_', '.'), getValue(propName, tempOnThis), val);
            tempOnThis.setProperties(val, true);
        }
    }

    public getAngularAttr(ele: Element): string {
        let attributes: NamedNodeMap = ele.attributes;
        let length: number = attributes.length;
        let ngAr: string;
        for (let i: number = 0; i < length; i++) {
            /* istanbul ignore next */
            if (/_ngcontent/g.test(attributes[i].name)) {
                ngAr = attributes[i].name;
            }
        }
        return ngAr;
    };
    // tslint:disable-next-line:no-any
    public ngAfterViewInit(isTempRef?: any): void {
        // tslint:disable-next-line:no-any
        let tempAfterViewThis: any = isTempRef || this;
        let regExp: RegExp = /ejs-tab|ejs-accordion/g;
        /* istanbul ignore next */
        if (regExp.test(tempAfterViewThis.ngEle.nativeElement.outerHTML)) {
            tempAfterViewThis.ngEle.nativeElement.style.visibility = 'hidden';
        }

        /**
         * Root level template properties are not getting rendered,
         * Due to ngonchanges not get triggered.
         * so that we have set template value for root level template properties,
         * for example: refer below syntax
         * ```html
         * <ejs-grid> 
         * <e-column></e-column> 
         * <ng-template #editSettingsTemplate></ng-template>
         * </ejs-grid>
         * ```
         */
        let templateProperties: string[] = Object.keys(tempAfterViewThis);
        templateProperties = templateProperties.filter((val: string): boolean => {
            return /Ref$/i.test(val);
        });
        for (let tempName of templateProperties) {
            let propName: string = tempName.replace('Ref', '');
            setValue(propName.replace('_', '.'), getValue(propName + 'Ref', tempAfterViewThis), tempAfterViewThis);
        }
        // Used setTimeout for template binding
        // Refer Link: https://github.com/angular/angular/issues/6005
        setTimeout(() => {
            /* istanbul ignore else  */
            if (typeof window !== 'undefined' && document.body.contains(tempAfterViewThis.element)) {
                tempAfterViewThis.appendTo(tempAfterViewThis.element);
                tempAfterViewThis.ngEle.nativeElement.style.visibility = '';
            }
        });
    }
    // tslint:disable-next-line:no-any
    public ngOnDestroy(isTempRef?: any): void {
        // tslint:disable-next-line:no-any
        let tempOnDestroyThis: any = isTempRef || this;
        /* istanbul ignore else  */
        setTimeout(() => {
            if (typeof window !== 'undefined' && document.body.contains(tempOnDestroyThis.element) && tempOnDestroyThis.element.classList.contains('e-control')) {
                tempOnDestroyThis.destroy();
                tempOnDestroyThis.clearTemplate(null);
                // removing bounded events and tagobjects from component after destroy
                tempOnDestroyThis.ngBoundedEvents = {};
                tempOnDestroyThis.tagObjects = {};
                tempOnDestroyThis.ngEle = null;
            }
        });
    }
    //tslint:disable-next-line
    public clearTemplate(templateNames?: string[], index?: any): void {
        clearTemplate(this, templateNames, index);
    };
    // tslint:disable-next-line:no-any
    public ngAfterContentChecked(isTempRef?: any): void {

        // tslint:disable-next-line:no-any
        let tempAfterContentThis: any = isTempRef || this;
        for (let tagObject of tempAfterContentThis.tagObjects) {
            if (!isUndefined(tagObject.instance) &&
                (tagObject.instance.isInitChanges || tagObject.instance.hasChanges || tagObject.instance.hasNewChildren)) {
                if (tagObject.instance.isInitChanges) {
                    let propObj: { [key: string]: Object } = {};
                    // For angular 9 compatibility
                    // Not able to get complex directive properties reference ni Onint hook
                    // So we have constructed property here and used
                    let complexDirProps;
                    let list = getValue('instance.list', tagObject);
                    if (list && list.length) {
                        complexDirProps = list[0].directivePropList;
                    }
                    let skip: any = true;
                    if ((tempAfterContentThis as any).getModuleName && (tempAfterContentThis as any).getModuleName() === 'gantt') {
                        skip = false
                    }
                    if (complexDirProps && skip && complexDirProps.indexOf(tagObject.instance.propertyName) === -1) {
                        let compDirPropList = Object.keys(tagObject.instance.list[0].propCollection);
                        for (let h = 0; h < tagObject.instance.list.length; h++) {
                            tagObject.instance.list[h].propCollection[tagObject.instance.propertyName] = [];
                            let obj: any = {};
                            for (let k = 0; k < compDirPropList.length; k++) {
                                let complexPropName = compDirPropList[k];
                                obj[complexPropName] = tagObject.instance.list[h].propCollection[complexPropName];
                            }
                            for (let i = 0; i < tagObject.instance.list[h].tags.length; i++) {
                                let tag = tagObject.instance.list[h].tags[i];
                                let childObj = getValue('child' + tag.substring(0, 1).toUpperCase() + tag.substring(1), tagObject.instance.list[h]);
                                if (childObj) {
                                    let innerchildObj = tagObject.instance.list[h]['child' + tag.substring(0, 1).toUpperCase() + tag.substring(1)];
                                    if (innerchildObj) {
                                        for (let j = 0; j < innerchildObj.list.length; j++) {
                                            let innerTag = innerchildObj.list[0].tags[0];
                                            if (innerTag) {
                                                let innerchildTag = getValue('child' + innerTag.substring(0, 1).toUpperCase() + innerTag.substring(1), innerchildObj.list[j]);
                                                if (innerchildTag) {
                                                    innerchildObj.list[j].tagObjects.push({ instance: innerchildTag, name: innerTag });
                                                }
                                            }
                                        }
                                    }
                                    tagObject.instance.list[h].tagObjects.push({ instance: childObj, name: tag });
                                }
                            }
                            tagObject.instance.list[h].propCollection[tagObject.instance.propertyName].push(obj);
                        }
                    }
                    // End angular 9 compatibility
                    propObj[tagObject.name] = tagObject.instance.getProperties();
                    tempAfterContentThis.setProperties(propObj, tagObject.instance.isInitChanges);
                } else {
                    /* istanbul ignore next */
                    if ((tempAfterContentThis[tagObject.name].length !== tagObject.instance.list.length) || (tempAfterContentThis.getModuleName() === 'diagram')) {
                        tempAfterContentThis[tagObject.name] = tagObject.instance.list;
                    }
                    for (let list of tagObject.instance.list) {
                        let curIndex: number = tagObject.instance.list.indexOf(list);
                        let curChild: any = getValue(tagObject.name, tempAfterContentThis)[curIndex];
                        let complexTemplates: string[] = Object.keys(curChild);
                        complexTemplates = complexTemplates.filter((val: string): boolean => {
                            return /Ref$/i.test(val);
                        });
                        if (curChild.properties && Object.keys(curChild.properties).length !== 0 && /chart/.test(tempAfterContentThis.getModuleName())){
                            for (let complexPropName of complexTemplates) {
                                complexPropName = complexPropName.replace(/Ref/, '');
                                curChild.properties[complexPropName] = !curChild.properties[complexPropName] ?
                                    curChild.propCollection[complexPropName] : curChild.properties[complexPropName];
                            }
                        }
                        if (!isUndefined(curChild) && !isUndefined(curChild.setProperties)) {
                            if (/diagram|DashboardLayout/.test(tempAfterContentThis.getModuleName())) {
                                curChild.setProperties(list.getProperties(), true);
                            } else {
                                curChild.setProperties(list.getProperties());
                            }
                        }
                        list.isUpdated = true;
                    }
                }
            }
        }
    }

    protected registerEvents(eventList: string[]): void {
        registerEvents(eventList, this);
    }

    protected twoWaySetter(newVal: Object, prop: string): void {
        let oldVal: Object = getValue(prop, this.properties);
        if (oldVal === newVal) {
            return;
        }
        this.saveChanges(prop, newVal, oldVal);
        setValue(prop, (isNullOrUndefined(newVal) ? null : newVal), this.properties);
        getValue(prop + 'Change', this).emit(newVal);
    }

    protected addTwoWay(propList: string[]): void {
        for (let prop of propList) {
            getValue(prop, this);
            Object.defineProperty(this, prop, {
                get: () => {
                    return getValue(prop, this.properties);
                },
                set: (newVal: Object) => this.twoWaySetter(newVal, prop)
            });
            setValue(prop + 'Change', new EventEmitter(), this);
        }
    }

    public addEventListener(eventName: string, handler: Function): void {
        let eventObj: EventEmitter<Object> = getValue(eventName, this);
        if (!isUndefined(eventObj)) {
            if (!this.ngBoundedEvents[eventName]) {
                this.ngBoundedEvents[eventName] = new Map();
            }
            this.ngBoundedEvents[eventName].set(handler, eventObj.subscribe(handler));
        }
    }

    public removeEventListener(eventName: string, handler: Function): void {
        let eventObj: EventEmitter<Object> = getValue(eventName, this);
        if (!isUndefined(eventObj)) {
            (<EventEmitter<object>>this.ngBoundedEvents[eventName].get(handler)).unsubscribe();
        }
    }

    public trigger(eventName: string, eventArgs: Object, success?: Function): void {

        let eventObj: { next: Function } = getValue(eventName, this);

        let prevDetection: boolean = this.isProtectedOnChange;
        this.isProtectedOnChange = false;

        if (eventArgs) {
            (<{ name: string }>eventArgs).name = eventName;
        }

        if (!isUndefined(eventObj)) {
            eventObj.next(eventArgs);
        }
        let localEventObj: Function = getValue('local' + eventName.charAt(0).toUpperCase() + eventName.slice(1), this);
        if (!isUndefined(localEventObj)) {
            localEventObj.call(this, eventArgs);
        }

        this.isProtectedOnChange = prevDetection;
        /* istanbul ignore else  */
        if (success) {
            this.preventChange = this.isPreventChange;
            success.call(this, eventArgs);
        }
        this.isPreventChange = false;

    }

}