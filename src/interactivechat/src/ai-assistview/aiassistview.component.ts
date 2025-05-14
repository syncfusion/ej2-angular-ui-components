import { Component, ElementRef, ViewContainerRef, Renderer2, Injector, ChangeDetectionStrategy, QueryList, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, ComponentMixins, IComponentBase, applyMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { AIAssistView } from '@syncfusion/ej2-interactive-chat';
import { Template } from '@syncfusion/ej2-angular-base';
import { ViewsDirective } from './views.directive';

export const inputs: string[] = ['activeView','bannerTemplate','cssClass','enablePersistence','enableRtl','footerTemplate','height','locale','prompt','promptIconCss','promptItemTemplate','promptPlaceholder','promptSuggestionItemTemplate','promptSuggestions','promptSuggestionsHeader','promptToolbarSettings','prompts','responseIconCss','responseItemTemplate','responseToolbarSettings','showClearButton','showHeader','toolbarSettings','views','width'];
export const outputs: string[] = ['created','promptChanged','promptRequest','stopRespondingClick','promptChange'];
export const twoWays: string[] = ['prompt'];

/**
 * Represents the Essential JS 2 Angular AIAssistView Component.
 * ```html
 * <ejs-aiassistview></ejs-aiassistview>
 * ```
 */
@Component({
    selector: '[ejs-aiassistview]',
    inputs: inputs,
    outputs: outputs,
    template: `<ng-content ></ng-content>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childViews: new ContentChild(ViewsDirective)
    }
})
@ComponentMixins([ComponentBase])
export class AIAssistViewComponent extends AIAssistView implements IComponentBase {
    public containerContext : any;
    public tagObjects: any;
	created: any;
	promptChanged: any;
	promptRequest: any;
	stopRespondingClick: any;
	public promptChange: any;
    public childViews: QueryList<ViewsDirective>;
    public tags: string[] = ['views'];
    /** 
     * Specifies the template for the footer in the AIAssistView component. 
     * Defines the content or layout used to render the footer. Can be a string or a function.
     * 
     * {% codeBlock src='ai-assistview/footerTemplate/index.md' %}{% endcodeBlock %}
     *     
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
     * Specifies the template for rendering prompt items in the AIAssistView component. 
     * Defines the content or layout used to render prompt items, and can be either a string or a function. 
     * The template context includes prompt text and toolbar items.
     * 
     * {% codeBlock src='ai-assistview/promptItemTemplate/index.md' %}{% endcodeBlock %}
     *     
     * @default ''
     * @angulartype string | object
     * @reacttype string | function | JSX.Element
     * @vuetype string | function
     * @asptype string
     */
    @ContentChild('promptItemTemplate')
    @Template()
    public promptItemTemplate: any;
    /** 
     * Specifies the template for rendering response items in the AIAssistView component. 
     * Defines the content or layout used to render response items, and can be either a string or a function. 
     * The template context includes the prompt text, response text, and toolbar items.
     * 
     * {% codeBlock src='ai-assistview/responseItemTemplate/index.md' %}{% endcodeBlock %}
     *     
     * @default ''
     * @angulartype string | object
     * @reacttype string | function | JSX.Element
     * @vuetype string | function
     * @asptype string
     */
    @ContentChild('responseItemTemplate')
    @Template()
    public responseItemTemplate: any;
    /** 
     * Specifies the template for rendering prompt suggestion items in the AIAssistView component. 
     * Defines the content or layout used to render prompt suggestion items, and can be either a string or a function. 
     * The template context includes the index and suggestion text.
     * 
     * {% codeBlock src='ai-assistview/suggestionItemTemplate/index.md' %}{% endcodeBlock %}
     *     
     * @default ''
     * @angulartype string | object
     * @reacttype string | function | JSX.Element
     * @vuetype string | function
     * @asptype string
     */
    @ContentChild('promptSuggestionItemTemplate')
    @Template()
    public promptSuggestionItemTemplate: any;
    /** 
     * Specifies the template for the banner in the AIAssistView component. 
     * Represents the content or layout used to render the banner. Can be a string or a function.
     * 
     * {% codeBlock src='ai-assistview/bannerTemplate/index.md' %}{% endcodeBlock %}
     *     
     * @default ''
     * @angulartype string | object
     * @reacttype string | function | JSX.Element
     * @vuetype string | function
     * @asptype string
     */
    @ContentChild('bannerTemplate')
    @Template()
    public bannerTemplate: any;

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
        this.tagObjects[0].instance = this.childViews;
        this.containerContext.ngAfterContentChecked(this);
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

