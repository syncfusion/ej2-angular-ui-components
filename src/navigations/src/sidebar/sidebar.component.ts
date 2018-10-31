import { Component, ElementRef, ViewContainerRef, Renderer2, Injector, ChangeDetectionStrategy, ValueProvider } from '@angular/core';
import { ComponentBase, ComponentMixins, IComponentBase, applyMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { Sidebar } from '@syncfusion/ej2-navigations';



export const inputs: string[] = ['animate','closeOnDocumentClick','dockSize','enableDock','enableGestures','enablePersistence','enableRtl','height','isOpen','locale','mediaQuery','position','showBackdrop','target','type','width','zIndex'];
export const outputs: string[] = ['change','close','created','destroyed','open','isOpenChange'];
export const twoWays: string[] = ['isOpen'];

/**
 * Represents the Essential JS 2 Angular Sidebar Component.
 * ```html
 * <ejs-sidebar></ejs-sidebar>
 * ```
 */
@Component({
    selector: 'ejs-sidebar',
    inputs: inputs,
    outputs: outputs,
    template: '<ng-content></ng-content>',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {

    }
})
@ComponentMixins([ComponentBase])
export class SidebarComponent extends Sidebar implements IComponentBase {


    public isOpenChange: any;

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

