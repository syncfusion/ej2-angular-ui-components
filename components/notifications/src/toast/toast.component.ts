import { Component, ElementRef, ViewContainerRef, Renderer2, Injector, ChangeDetectionStrategy, QueryList, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, ComponentMixins, IComponentBase, applyMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { Toast } from '@syncfusion/ej2-notifications';
import { Template } from '@syncfusion/ej2-angular-base';
import { ButtonModelPropsDirective } from './buttons.directive';

export const inputs: string[] = ['animation','buttons','content','cssClass','enableHtmlSanitizer','enablePersistence','enableRtl','extendedTimeout','height','icon','locale','newestOnTop','position','progressDirection','showCloseButton','showProgressBar','target','template','timeOut','title','width'];
export const outputs: string[] = ['beforeClose','beforeOpen','beforeSanitizeHtml','click','close','created','destroyed','open'];
export const twoWays: string[] = [''];

/**
 * Represents the Angular Toast Component
 * ```html
 * <ejs-toast></ejs-toast>
 * ```
 */
@Component({
    selector: 'ejs-toast',
    inputs: inputs,
    outputs: outputs,
    template: `<ng-content ></ng-content>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childButtons: new ContentChild(ButtonModelPropsDirective)
    }
})
@ComponentMixins([ComponentBase])
export class ToastComponent extends Toast implements IComponentBase {
    public containerContext : any;
    public tagObjects: any;
	beforeClose: any;
	beforeOpen: any;
	beforeSanitizeHtml: any;
	click: any;
	close: any;
	created: any;
	destroyed: any;
	public open: any;
    public childButtons: QueryList<ButtonModelPropsDirective>;
    public tags: string[] = ['buttons'];
    /** 
     * Specifies the title to be displayed on the Toast. 
     * Accepts selectors, string values and HTML elements.
     * @default null
     */
    @ContentChild('title')
    @Template()
    public title: any;
    /** 
     * Specifies the content to be displayed on the Toast. 
     * Accepts selectors, string values and HTML elements.
     * @default null
     * @blazortype string
     */
    @ContentChild('content')
    @Template()
    public content: any;
    /** 
     * Specifies the HTML element/element ID as a string that can be displayed as a Toast. 
     * The given template is taken as preference to render the Toast, even if the built-in properties such as title and content are defined.
     * 
     * {% codeBlock src='toast/template/index.md' %}{% endcodeBlock %}
     *     
     * @default null
     */
    @ContentChild('template')
    @Template()
    public template: any;

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
        this.tagObjects[0].instance = this.childButtons;
        this.containerContext.ngAfterContentChecked(this);
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

