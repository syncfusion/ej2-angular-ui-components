import { Component, ElementRef, ViewContainerRef, Renderer2, Injector, ChangeDetectionStrategy, QueryList, ValueProvider } from '@angular/core';
import { ComponentBase, ComponentMixins, IComponentBase, applyMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { SmartPasteButton } from '@syncfusion/ej2-buttons';



export const inputs: string[] = ['aiAssistHandler','content','cssClass','disabled','enableHtmlSanitizer','enablePersistence','enableRtl','iconCss','iconPosition','isPrimary','isToggle','locale'];
export const outputs: string[] = ['created'];
export const twoWays: string[] = [];

/**
 * Represents the Angular Smart Paste Button Component.
 * ```html
 * <button ejs-smart-paste-button content='Smart paste'></button>
 * ```
 */
@Component({
    selector: '[ejs-smart-paste-button]',
    inputs: inputs,
    outputs: outputs,
    template: `<ng-content ></ng-content>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {

    }
})
@ComponentMixins([ComponentBase])
export class SmartPasteButtonComponent extends SmartPasteButton implements IComponentBase {
    public containerContext : any;
    public tagObjects: any;
	public created: any;



    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];

        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
        this.containerContext  = new ComponentBase();
    }

    public ngOnInit() {
        this.containerContext.ngOnInit(this);
    }

    public ngAfterViewInit(): void {
        this.containerContext.ngAfterViewInit(this);
    }

    public ngOnDestroy(): void {
        this.containerContext.ngOnDestroy(this);
    }

    public ngAfterContentChecked(): void {
        
        this.containerContext.ngAfterContentChecked(this);
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

