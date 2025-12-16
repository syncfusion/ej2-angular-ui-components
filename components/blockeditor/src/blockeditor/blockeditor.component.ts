import { Component, ElementRef, ViewContainerRef, Renderer2, Injector, ChangeDetectionStrategy, QueryList, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, ComponentMixins, IComponentBase, applyMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { BlockEditor } from '@syncfusion/ej2-blockeditor';



export const inputs: string[] = ['blockActionMenuSettings','blocks','codeBlockSettings','commandMenuSettings','contextMenuSettings','cssClass','enableDragAndDrop','enableHtmlEncode','enableHtmlSanitizer','enablePersistence','enableRtl','height','imageBlockSettings','inlineToolbarSettings','keyConfig','labelSettings','locale','pasteCleanupSettings','readOnly','undoRedoStack','users','width'];
export const outputs: string[] = ['afterPasteCleanup','beforePasteCleanup','blockChanged','blockDragStart','blockDragging','blockDropped','blur','created','focus','selectionChanged','blocksChange'];
export const twoWays: string[] = ['blocks'];

/**
 * Represents the Essential JS 2 Angular BlockEditor Component.
 * ```html
 * <ejs-blockeditor></ejs-blockeditor>
 * ```
 */
@Component({
    selector: '[ejs-blockeditor], ejs-blockeditor',
    inputs: inputs,
    outputs: outputs,
    template: `<ng-content ></ng-content>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        
    }
})
@ComponentMixins([ComponentBase])
export class BlockEditorComponent extends BlockEditor implements IComponentBase {
    public containerContext : any;
    public tagObjects: any;
	afterPasteCleanup: any;
	beforePasteCleanup: any;
	blockChanged: any;
	blockDragStart: any;
	blockDragging: any;
	blockDropped: any;
	blur: any;
	created: any;
	focus: any;
	selectionChanged: any;
	public blocksChange: any;

    public tags: string[] = [''];

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

