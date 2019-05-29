import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { Menu } from '@syncfusion/ej2-navigations';
import { Template } from '@syncfusion/ej2-angular-base';
import { MenuItemsDirective } from './items.directive';

export const inputs: string[] = ['animationSettings','cssClass','enablePersistence','enableRtl','enableScrolling','fields','filter','hamburgerMode','items','locale','orientation','showItemOnClick','target','template','title'];
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
    public childItems: any;
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

