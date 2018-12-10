import { Component, ElementRef, ViewContainerRef, ValueProvider, Renderer2, Injector, ChangeDetectionStrategy, forwardRef, ContentChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, FormBase, setValue } from '@syncfusion/ej2-angular-base';
import { RichTextEditor } from '@syncfusion/ej2-richtexteditor';
import { Template } from '@syncfusion/ej2-angular-base';


export const inputs: string[] = ['backgroundColor','cssClass','editorMode','enableHtmlEncode','enablePersistence','enableRtl','enableTabKey','enabled','floatingToolbarOffset','fontColor','fontFamily','fontSize','format','formatter','height','htmlAttributes','iframeSettings','inlineMode','insertImageSettings','keyConfig','locale','maxLength','placeholder','quickToolbarSettings','readonly','showCharCount','tableSettings','toolbarSettings','undoRedoSteps','undoRedoTimer','value','valueTemplate','width'];
export const outputs: string[] = ['actionBegin','actionComplete','blur','change','created','destroyed','focus','resizeStart','resizeStop','resizing','toolbarClick','valueChange'];
export const twoWays: string[] = ['value'];

/**
 * `ejs-richtexteditor` represents the Angular richtexteditor Component.
 * ```html
 * <ejs-richtexteditor></ejs-richtexteditor>
 * ```
 */
@Component({
    selector: 'ejs-richtexteditor',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => RichTextEditorComponent),
            multi: true
        }
    ],
    queries: {

    }
})
@ComponentMixins([ComponentBase, FormBase])
export class RichTextEditorComponent extends RichTextEditor implements IComponentBase {


    public valueChange: any;
    /** 
     * Accepts the template design and assigns it as RichTextEditor’s content. 
     * The built-in template engine which provides options to compile template string into a executable function. 
     * For EX: We have expression evolution as like ES6 expression string literals
     * @default null
     */
    @ContentChild('valueTemplate')
    @Template()
    public valueTemplate: any;

    private skipFromEvent:boolean = true;
    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try{ this.injectedModules.push(this.injector.get('RichTextEditorToolbar')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('RichTextEditorLink')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('RichTextEditorImage')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('RichTextEditorCount')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('RichTextEditorQuickToolbar')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('RichTextEditorHtmlEditor')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('RichTextEditorMarkdownEditor')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('RichTextEditorTable')); }catch {} 

        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
    }

    public registerOnChange(registerFunction: (_: any) => void): void {
    }

    public registerOnTouched(registerFunction: () => void): void {
    }

    public writeValue(value: any): void {
    }
    
    public setDisabledState(disabled: boolean): void {
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

