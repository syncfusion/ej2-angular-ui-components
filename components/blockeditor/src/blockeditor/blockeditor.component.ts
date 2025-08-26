import { Component, ElementRef, ViewContainerRef, Renderer2, Injector, ChangeDetectionStrategy, QueryList, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, ComponentMixins, IComponentBase, applyMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { BlockEditor } from '@syncfusion/ej2-blockeditor';

import { BlocksDirective } from './blocks.directive';

export const inputs: string[] = ['blockActionsMenu','blocks','commandMenu','contextMenu','cssClass','enableAutoHttps','enableDragAndDrop','enableHtmlEncode','enableHtmlSanitizer','enablePersistence','enableRtl','height','inlineToolbar','keyConfig','labelSettings','locale','pasteSettings','readOnly','undoRedoStack','users','width'];
export const outputs: string[] = ['afterPaste','beforePaste','blockAdded','blockDrag','blockDragStart','blockDrop','blockMoved','blockRemoved','blur','contentChanged','created','focus','keyActionExecuted','selectionChanged','undoRedoPerformed'];
export const twoWays: string[] = [];

/**
 * Represents the Essential JS 2 Angular BlockEditor Component.
 * ```html
 * <ejs-blockeditor></ejs-blockeditor>
 * ```
 */
@Component({
    selector: '[ejs-blockeditor]',
    inputs: inputs,
    outputs: outputs,
    template: `<ng-content ></ng-content>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childBlocks: new ContentChild(BlocksDirective)
    }
})
@ComponentMixins([ComponentBase])
export class BlockEditorComponent extends BlockEditor implements IComponentBase {
    public containerContext : any;
    public tagObjects: any;
	afterPaste: any;
	beforePaste: any;
	blockAdded: any;
	blockDrag: any;
	blockDragStart: any;
	blockDrop: any;
	blockMoved: any;
	blockRemoved: any;
	blur: any;
	contentChanged: any;
	created: any;
	focus: any;
	keyActionExecuted: any;
	selectionChanged: any;
	public undoRedoPerformed: any;
    public childBlocks: QueryList<BlocksDirective>;
    public tags: string[] = ['blocks'];

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
        this.tagObjects[0].instance = this.childBlocks;
        this.containerContext.ngAfterContentChecked(this);
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

