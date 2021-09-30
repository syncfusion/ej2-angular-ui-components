import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, QueryList, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { Menu } from '@syncfusion/ej2-navigations';
import { Template } from '@syncfusion/ej2-angular-base';
import { MenuItemsDirective } from './items.directive';

export const inputs: string[] = ['animationSettings','cssClass','enableHtmlSanitizer','enablePersistence','enableRtl','enableScrolling','fields','filter','hamburgerMode','hoverDelay','items','locale','orientation','showItemOnClick','target','template','title'];
export const outputs: string[] = ['beforeClose','beforeItemRender','beforeOpen','created','onClose','onOpen','select'];
export const twoWays: string[] = [''];

/**
 * Represents the EJ2 Angular Menu Component.
 * ```html
 * <ejs-menu [items]='menuItems'></ejs-menu>
 * ```
 */
@Component({
    selector: 'ejs-menu',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childItems: new ContentChild(MenuItemsDirective)
    }
})
@ComponentMixins([ComponentBase])
export class MenuComponent extends Menu implements IComponentBase {
    public context : any;
    public tagObjects: any;
	beforeClose: any;
	beforeItemRender: any;
	beforeOpen: any;
	created: any;
	onClose: any;
	onOpen: any;
	public select: any;
    public childItems: QueryList<MenuItemsDirective>;
    public tags: string[] = ['items'];
    /** 
     * Specifies the template for Menu item.
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
        this.context  = new ComponentBase();
    }

    public ngOnInit() {
        this.context.ngOnInit(this);
    }

    public ngAfterViewInit(): void {
        this.context.ngAfterViewInit(this);
    }

    public ngOnDestroy(): void {
        this.context.ngOnDestroy(this);
    }

    public ngAfterContentChecked(): void {
        this.tagObjects[0].instance = this.childItems;
        this.context.ngAfterContentChecked(this);
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

