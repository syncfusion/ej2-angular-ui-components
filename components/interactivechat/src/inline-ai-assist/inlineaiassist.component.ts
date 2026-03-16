import { Component, ElementRef, ViewContainerRef, Renderer2, Injector, ChangeDetectionStrategy, QueryList, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, ComponentMixins, IComponentBase, applyMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { InlineAIAssist } from '@syncfusion/ej2-interactive-chat';
import { Template } from '@syncfusion/ej2-angular-base';


export const inputs: string[] = ['commandSettings','cssClass','editorTemplate','enablePersistence','enableRtl','enableStreaming','inlineToolbarSettings','locale','placeholder','popupHeight','popupWidth','prompt','prompts','relateTo','responseMode','responseSettings','responseTemplate','target','zIndex'];
export const outputs: string[] = ['close','created','open','promptRequest'];
export const twoWays: string[] = [''];

/**
 * Represents the Essential JS 2 Angular InlineAIAssist Component.
 * ```html
 * <ejs-inlineaiassist></ejs-inlineaiassist>
 * ```
 */
@Component({
    selector: 'ejs-inlineaiassist',
    inputs: inputs,
    outputs: outputs,
    template: `<ng-content ></ng-content>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        
    }
})
@ComponentMixins([ComponentBase])
export class InlineAIAssistComponent extends InlineAIAssist implements IComponentBase {
    public containerContext : any;
    public tagObjects: any;
	close: any;
	created: any;
	open: any;
	public promptRequest: any;

    public tags: string[] = [''];
    /** 
     * Specifies a custom template (string or function) for rendering the prompt input area. 
     * Specifies a string template or a function that returns the editor UI markup.
     * @default ''
     * @angulartype string | object
     * @reacttype string | function | JSX.Element
     * @vuetype string | function
     * @asptype string
     */
    @ContentChild('editorTemplate')
    @Template()
    public editorTemplate: any;
    /** 
     * Specifies a custom template (string or function) for rendering AI-generated response content. 
     * Specifies that a function receives a ResponseTemplateContext and returns markup or text.
     * @default ''
     * @angulartype string | object
     * @reacttype string | function | JSX.Element
     * @vuetype string | function
     * @asptype string
     */
    @ContentChild('responseTemplate')
    @Template()
    public responseTemplate: any;

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

