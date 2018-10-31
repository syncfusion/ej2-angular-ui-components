import { Component, ElementRef, ViewContainerRef, Renderer2, Injector, ChangeDetectionStrategy, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, ComponentMixins, IComponentBase, applyMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { Dialog } from '@syncfusion/ej2-popups';
import { Template } from '@syncfusion/ej2-angular-base';
import { ButtonsDirective } from './buttons.directive';

export const inputs: string[] = ['allowDragging','animationSettings','buttons','closeOnEscape','content','cssClass','enablePersistence','enableRtl','footerTemplate','header','height','isModal','locale','position','showCloseIcon','target','visible','width','zIndex'];
export const outputs: string[] = ['beforeClose','beforeOpen','close','created','drag','dragStart','dragStop','open','overlayClick','visibleChange'];
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
    template: '<ng-content></ng-content>',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childButtons: new ContentChild(ButtonsDirective)
    }
})
@ComponentMixins([ComponentBase])
export class DialogComponent extends Dialog implements IComponentBase {
    public childButtons: any;
    public tags: string[] = ['buttons'];
    public visibleChange: any;
    /** 
     * Specifies the template value that can be displayed with dialog's footer area. 
     * This is optional property and can be used only when the footer is occupied with information or custom components. 
     * By default, the footer is configured with action [buttons](#buttons). 
     * If footer template is configured to dialog, the action buttons property will be disabled.
     * 
     * > More information on the footer template configuration can be found on this [documentation](./template.html#footer) section.
     *     
     * @default ''
     */
    @ContentChild('footerTemplate')
    @Template()
    public footerTemplate: any;
    /** 
     * Specifies the value that can be displayed in the dialog's title area that can be configured with plain text or HTML elements. 
     * This is optional property and the dialog can be displayed without header, if the header property is null.
     * @default ''
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
     * @default ''
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
    }

    public ngOnInit() {
    }

    public ngAfterViewInit(): void {
    }

    public ngOnDestroy(): void {
    }

    public ngAfterContentChecked(): void {
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

