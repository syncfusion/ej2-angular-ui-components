import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, Renderer2, Injector, ValueProvider } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { DocumentEditorContainer } from '@syncfusion/ej2-documenteditor';



export const inputs: string[] = ['enableLocalPaste','enablePersistence','enableRtl','enableSpellCheck','enableToolbar','locale','restrictEditing','serverActionSettings','serviceUrl','showPropertiesPane'];
export const outputs: string[] = ['contentChange','created','customContextMenuBeforeOpen','customContextMenuSelect','destroyed','documentChange','selectionChange'];
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

