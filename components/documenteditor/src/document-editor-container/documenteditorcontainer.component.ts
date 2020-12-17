import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, QueryList, Renderer2, Injector, ValueProvider } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { DocumentEditorContainer } from '@syncfusion/ej2-documenteditor';



export const inputs: string[] = ['currentUser','documentEditorSettings','enableComment','enableCsp','enableLocalPaste','enableLockAndEdit','enablePersistence','enableRtl','enableSpellCheck','enableToolbar','enableTrackChanges','headers','height','layoutType','locale','restrictEditing','serverActionSettings','serviceUrl','showPropertiesPane','toolbarItems','userColor','width','zIndex'];
export const outputs: string[] = ['beforeCommentAction','beforePaneSwitch','commentDelete','contentChange','contentControl','created','customContextMenuBeforeOpen','customContextMenuSelect','destroyed','documentChange','selectionChange','serviceFailure','toolbarClick','trackChange'];
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

