/**
 * Angular Component Base Module
 */
import { getValue, isUndefined, setValue, isNullOrUndefined, attributes, createElement  } from '@syncfusion/ej2-base';
import { EventEmitter, EmbeddedViewRef, Renderer2 } from '@angular/core';
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
}

export class ComponentBase<T> {
    public element: HTMLElement;
    public tags: string[];
    private ngAttr: string;
    private srenderer: Renderer2;
    protected isProtectedOnChange: boolean = true;
    private isAngular: boolean;
    protected oldProperties: { [key: string]: Object };
    protected changedProperties: { [key: string]: Object };
    protected finalUpdate: Function;

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

    public ngOnInit(): void {
        this.registeredTemplate = {};
        this.ngBoundedEvents = {};
        this.isAngular = true;
        this.tags = this.tags || [];
        this.complexTemplate = this.complexTemplate || [];
        this.tagObjects = [];
        this.ngAttr = this.getAngularAttr(this.element);
        /* istanbul ignore next */
        this.createElement = (tagName: string, prop?:
            { id?: string, className?: string, innerHTML?: string, styles?: string, attrs?: { [key: string]: string } }) => {
            //tslint:disable-next-line
            let ele: Element = this.srenderer ? this.srenderer.createElement(tagName) : createElement(tagName);
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
            if (this.ngAttr !== undefined) {
                ele.setAttribute(this.ngAttr, '');
            }
            if (prop.attrs !== undefined) {
                attributes(ele, prop.attrs);
            }
            return <HTMLElement>ele;
        };
        for (let tag of this.tags) {
            let tagObject: { name: string, instance: Tag } = {
                instance: getValue('child' + tag.substring(0, 1).toUpperCase() + tag.substring(1), this),
                name: tag
            };
            this.tagObjects.push(tagObject);
        }

        let complexTemplates: string[] = Object.keys(this);
        complexTemplates = complexTemplates.filter((val: string): boolean => {
            return /Ref$/i.test(val) && /\_/i.test(val);
        });
        for (let tempName of complexTemplates) {
            let propName: string = tempName.replace('Ref', '');
            let val: Object = {};
            setValue(propName.replace('_', '.'), getValue(propName, this), val);
            this.setProperties(val, true);
        }
    }

    public getAngularAttr(ele: Element): string {
        let attributes: NamedNodeMap = ele.attributes;
        let length: number = attributes.length;
        let ngAr: string;
        for (let i: number = 0; i < length; i++) {
            if (/_ngcontent/g.test(attributes[i].name)) {
                ngAr = attributes[i].name;
            }
        }
        return ngAr;
    };

    public ngAfterViewInit(): void {
        // Used setTimeout for template binding
        // Refer Link: https://github.com/angular/angular/issues/6005
        setTimeout(() => {
            /* istanbul ignore else  */
            if (typeof window !== 'undefined') {
                this.appendTo(this.element);
            }
        });
    }

    public ngOnDestroy(): void {
        /* istanbul ignore else  */
        if (typeof window !== 'undefined' && this.element.classList.contains('e-control')) {
            this.destroy();
            this.clearTemplate(null);
        }
    }

    //tslint:disable-next-line
    public clearTemplate(templateNames?: string[], index?: any): void {
        clearTemplate(this, templateNames, index);
    };

    public ngAfterContentChecked(): void {
        for (let tagObject of this.tagObjects) {
            if (!isUndefined(tagObject.instance) &&
                (tagObject.instance.isInitChanges || tagObject.instance.hasChanges || tagObject.instance.hasNewChildren)) {
                if (tagObject.instance.isInitChanges) {
                    let propObj: { [key: string]: Object } = {};
                    propObj[tagObject.name] = tagObject.instance.getProperties();
                    this.setProperties(propObj, tagObject.instance.isInitChanges);
                } else {
                    for (let list of tagObject.instance.list) {
                        if (list.hasChanges) {
                            let curIndex: number = tagObject.instance.list.indexOf(list);
                            getValue(tagObject.name, this)[curIndex].setProperties(list.getProperties());
                        }
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

    public trigger(eventName: string, eventArgs: Object): void {

        let eventObj: { next: Function } = getValue(eventName, this);

        let prevDetection: boolean = this.isProtectedOnChange;
        this.isProtectedOnChange = false;

        if (eventArgs) {
            (<{ name: string }>eventArgs).name = eventName;
        }


        let localEventObj: Function = getValue('local' + eventName.charAt(0).toUpperCase() + eventName.slice(1), this);
        if (!isUndefined(localEventObj)) {
            localEventObj.call(this, eventArgs);
        }
        if (!isUndefined(eventObj)) {
            eventObj.next(eventArgs);
        }

        this.isProtectedOnChange = prevDetection;

    }


}