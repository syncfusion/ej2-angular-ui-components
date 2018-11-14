import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { ListView } from '@syncfusion/ej2-lists';
import { Template } from '@syncfusion/ej2-angular-base';


export const inputs: string[] = ['animation','checkBoxPosition','cssClass','dataSource','enable','enablePersistence','enableRtl','enableVirtualization','fields','groupTemplate','headerTemplate','headerTitle','height','htmlAttributes','locale','query','showCheckBox','showHeader','showIcon','sortOrder','template','width'];
export const outputs: string[] = ['actionBegin','actionComplete','actionFailure','select'];
export const twoWays: string[] = [''];

/**
 * Represents Angular ListView Component
 * ```
 * <ejs-listview [dataSource]='data'></ejs-listview>
 * ```
 */
@Component({
    selector: 'ejs-listview',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {

    }
})
export class ListViewComponent extends ListView implements IComponentBase {



    /** 
     * The ListView supports to customize the content of each list items with the help of template property. 
     * Refer the documentation [here](./customizing-templates.html) 
     *  to know more about this property with demo.
     * 
     * {% codeBlock src="list-view/template-api/index.ts" %}{% endcodeBlock %}     
     * @default null
     */
    @ContentChild('template')
    @Template()
    public template: any;
    /** 
     * The ListView has an option to custom design the group header title with the help of groupTemplate property. 
     * Refer the documentation [here] 
     * (./customizing-templates.html#group-template) 
     *  to know more about this property with demo.
     * 
     * {% codeBlock src="list-view/grouptemplate-api/index.ts" %}{% endcodeBlock %}     
     * @default null
     */
    @ContentChild('groupTemplate')
    @Template()
    public groupTemplate: any;
    /** 
     * The ListView has an option to custom design the ListView header title with the help of headerTemplate property. 
     * Refer the documentation [here] 
     * (./customizing-templates.html#header-template) 
     *  to know more about this property with demo.
     * 
     * {% codeBlock src="list-view/headertemplate-api/index.ts" %}{% endcodeBlock %}     
     * @default null
     */
    @ContentChild('headerTemplate')
    @Template()
    public headerTemplate: any;

    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try{ this.injectedModules.push(this.injector.get('ListsVirtualization')); }catch {} 

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

applyMixins(ListViewComponent, [ComponentBase]);
