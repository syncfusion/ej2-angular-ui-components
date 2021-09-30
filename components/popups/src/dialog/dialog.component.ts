import { Component, ElementRef, ViewContainerRef, Renderer2, Injector, ChangeDetectionStrategy, QueryList, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, ComponentMixins, IComponentBase, applyMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { Dialog } from '@syncfusion/ej2-popups';
import { Template } from '@syncfusion/ej2-angular-base';
import { ButtonsDirective } from './buttons.directive';

export const inputs: string[] = ['allowDragging','animationSettings','buttons','closeOnEscape','content','cssClass','enableHtmlSanitizer','enablePersistence','enableResize','enableRtl','footerTemplate','header','height','isModal','locale','minHeight','position','resizeHandles','showCloseIcon','target','visible','width','zIndex'];
export const outputs: string[] = ['beforeClose','beforeOpen','beforeSanitizeHtml','close','created','destroyed','drag','dragStart','dragStop','open','overlayClick','resizeStart','resizeStop','resizing','visibleChange'];
export const twoWays: string[] = ['visible'];

/**
 * Represents the Angular Dialog Component
 * ```html
 * <ejs-dialog></ejs-dialog>
 * ```
 */
@Component({
    selector: 'ejs-dialog',
    inputs: inputs,
    outputs: outputs,
    template: `<ng-content ></ng-content>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childButtons: new ContentChild(ButtonsDirective)
    }
})
@ComponentMixins([ComponentBase])
export class DialogComponent extends Dialog implements IComponentBase {
    public containerContext : any;
    public tagObjects: any;
	beforeClose: any;
	beforeOpen: any;
	beforeSanitizeHtml: any;
	close: any;
	created: any;
	destroyed: any;
	drag: any;
	dragStart: any;
	dragStop: any;
	open: any;
	overlayClick: any;
	resizeStart: any;
	resizeStop: any;
	resizing: any;
	public visibleChange: any;
    public childButtons: QueryList<ButtonsDirective>;
    public tags: string[] = ['buttons'];
    /** 
     * Specifies the template value that can be displayed with dialog's footer area. 
     * This is optional property and can be used only when the footer is occupied with information or custom components. 
     * By default, the footer is configured with action [buttons](#buttons). 
     * If footer template is configured to dialog, the action buttons property will be disabled.
     * 
     * > More information on the footer template configuration can be found on this [documentation](../../dialog/template/#footer) section.
     *     
     * @default ''
     * @blazortype string
     */
    @ContentChild('footerTemplate')
    @Template()
    public footerTemplate: any;
    /** 
     * Specifies the value that can be displayed in the dialog's title area that can be configured with plain text or HTML elements. 
     * This is optional property and the dialog can be displayed without header, if the header property is null.
     * @default ''
     * @blazortype string
     */
    @ContentChild('header')
    @Template()
    public header: any;
    /** 
     * Specifies the value that can be displayed in dialog's content area. 
     * It can be information, list, or other HTML elements. 
     * The content of dialog can be loaded with dynamic data such as database, AJAX content, and more.
     * 
     * {% codeBlock src="dialog/content-api/index.ts" %}{% endcodeBlock %}
     *
     *{% codeBlock src="dialog/content-api/index.html" %}{% endcodeBlock %}
     *     
     * @default ''
     * @blazortype string
     */
    @ContentChild('content')
    @Template()
    public content: any;

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

