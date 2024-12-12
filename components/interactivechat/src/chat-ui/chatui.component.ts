import { Component, ElementRef, ViewContainerRef, Renderer2, Injector, ChangeDetectionStrategy, QueryList, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, ComponentMixins, IComponentBase, applyMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { ChatUI } from '@syncfusion/ej2-interactive-chat';
import { Template } from '@syncfusion/ej2-angular-base';
import { MessagesDirective } from './messages.directive';

export const inputs: string[] = ['autoScrollToBottom','cssClass','emptyChatTemplate','enablePersistence','enableRtl','footerTemplate','headerIconCss','headerText','headerToolbar','height','loadOnDemand','locale','messageTemplate','messages','placeholder','showFooter','showHeader','showTimeBreak','showTimeStamp','suggestionTemplate','suggestions','timeBreakTemplate','timeStampFormat','typingUsers','typingUsersTemplate','user','width'];
export const outputs: string[] = ['created','messageSend','userTyping'];
export const twoWays: string[] = [''];

/**
 * Represents the Essential JS 2 Angular ChatUI Component.
 * ```html
 * <ejs-chatui></ejs-chatui>
 * ```
 */
@Component({
    selector: '[ejs-chatui]',
    inputs: inputs,
    outputs: outputs,
    template: `<ng-content ></ng-content>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childMessages: new ContentChild(MessagesDirective)
    }
})
@ComponentMixins([ComponentBase])
export class ChatUIComponent extends ChatUI implements IComponentBase {
    public containerContext : any;
    public tagObjects: any;
	created: any;
	messageSend: any;
	public userTyping: any;
    public childMessages: QueryList<MessagesDirective>;
    public tags: string[] = ['messages'];
    /** 
     * Specifies the template for rendering suggestion items in the Chat UI component. 
     * Defines the content or layout used to render suggestion items, and can be either a string or a function. 
     * The template context includes the index and suggestion text.
     * @default ''
     * @angulartype string | object
     * @reacttype string | function | JSX.Element
     * @vuetype string | function
     * @asptype string
     */
    @ContentChild('suggestionTemplate')
    @Template()
    public suggestionTemplate: any;
    /** 
     * Specifies the template for the footer area in the Chat UI component. 
     * Defines the content or layout used to render the footer, which can be provided as a string or a function.
     * @default ''
     * @angulartype string | object
     * @reacttype string | function | JSX.Element
     * @vuetype string | function
     * @asptype string
     */
    @ContentChild('footerTemplate')
    @Template()
    public footerTemplate: any;
    /** 
     * Specifies the template for rendering the empty state of the Chat UI component. 
     * This property can accept either a string or a function to customize the appearance when there are no messages to display in the chat.
     * @default ''
     * @angulartype string | object
     * @reacttype string | function | JSX.Element
     * @vuetype string | function
     * @asptype string
     */
    @ContentChild('emptyChatTemplate')
    @Template()
    public emptyChatTemplate: any;
    /** 
     * Specifies the template for rendering individual messages in the Chat UI component. 
     * This property can accept either a string or a function to customize the appearance of messages. The template context includes message and index.
     * @default ''
     * @angulartype string | object
     * @reacttype string | function | JSX.Element
     * @vuetype string | function
     * @asptype string
     */
    @ContentChild('messageTemplate')
    @Template()
    public messageTemplate: any;
    /** 
     * Template for displaying users currently typing in the chat interface. 
     * Accepts a string or function to customize the display format.
     * @default ''
     * @angulartype string | object
     * @reacttype string | function | JSX.Element
     * @vuetype string | function
     * @asptype string
     */
    @ContentChild('typingUsersTemplate')
    @Template()
    public typingUsersTemplate: any;
    /** 
     * Defines a custom template for rendering time breaks in the Chat UI component. 
     * Accepts a string or function that formats the appearance of date-based separators, allowing customization of how messages are visually grouped by date.
     * @default ''
     * @angulartype string | object
     * @reacttype string | function | JSX.Element
     * @vuetype string | function
     * @asptype string
     */
    @ContentChild('timeBreakTemplate')
    @Template()
    public timeBreakTemplate: any;

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
        this.tagObjects[0].instance = this.childMessages;
        this.containerContext.ngAfterContentChecked(this);
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

