import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, QueryList, Renderer2, Injector, ValueProvider } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { DocumentEditorContainer } from '@syncfusion/ej2-documenteditor';



export const inputs: string[] = ['autoResizeOnVisibilityChange','backstageMenu','currentUser','documentEditorSettings','documentSettings','enableAutoFocus','enableComment','enableCsp','enableLocalPaste','enableLockAndEdit','enablePersistence','enableRtl','enableSpellCheck','enableToolbar','enableTrackChanges','fileMenuItems','headers','height','layoutType','locale','restrictEditing','ribbonLayout','serverActionSettings','serviceUrl','showPropertiesPane','toolbarItems','toolbarMode','userColor','width','zIndex'];
export const outputs: string[] = ['beforeAcceptRejectChanges','beforeCommentAction','beforePaneSwitch','beforePaste','commentDelete','contentChange','contentControl','created','customContextMenuBeforeOpen','customContextMenuSelect','destroyed','documentChange','fileMenuItemClick','selectionChange','serviceFailure','toolbarClick','trackChange','unsupportedBorderStyleClick','beforeXmlHttpRequestSend'];
export const twoWays: string[] = [];

/**
 * `ejs-documenteditor-container` represents the Angular Document Editor Container.
 * ```html
 * <ejs-documenteditor-container></ejs-documenteditor-container>
 * ```
 */
@Component({
    selector: 'ejs-documenteditorcontainer',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {

    }
})
@ComponentMixins([ComponentBase])
export class DocumentEditorContainerComponent extends DocumentEditorContainer implements IComponentBase {
    public context : any;
    public tagObjects: any;
	beforeAcceptRejectChanges: any;
	beforeCommentAction: any;
	beforePaneSwitch: any;
	beforePaste: any;
	commentDelete: any;
	contentChange: any;
	contentControl: any;
	created: any;
	customContextMenuBeforeOpen: any;
	customContextMenuSelect: any;
	destroyed: any;
	documentChange: any;
	fileMenuItemClick: any;
	selectionChange: any;
	serviceFailure: any;
	toolbarClick: any;
	trackChange: any;
	unsupportedBorderStyleClick: any;
	public beforeXmlHttpRequestSend: any;



    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
                let mod = this.injector.get('DocumentEditorToolbar');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('DocumentEditorRibbon');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

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
        
        this.context.ngAfterContentChecked(this);
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

