import { Component, ElementRef, ViewContainerRef, ValueProvider, Renderer2, Injector, ChangeDetectionStrategy, forwardRef, ContentChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, FormBase, setValue } from '@syncfusion/ej2-angular-base';
import { RichTextEditor } from '@syncfusion/ej2-richtexteditor';
import { Template } from '@syncfusion/ej2-angular-base';


export const inputs: string[] = ['autoSaveOnIdle','backgroundColor','bulletFormatList','cssClass','editorMode','enableAutoUrl','enableHtmlEncode','enableHtmlSanitizer','enablePersistence','enableResize','enableRtl','enableTabKey','enableXhtml','enabled','enterKey','fileManagerSettings','floatingToolbarOffset','fontColor','fontFamily','fontSize','format','formatter','height','htmlAttributes','iframeSettings','inlineMode','insertImageSettings','keyConfig','locale','maxLength','numberFormatList','pasteCleanupSettings','placeholder','quickToolbarSettings','readonly','saveInterval','shiftEnterKey','showCharCount','tableSettings','toolbarSettings','undoRedoSteps','undoRedoTimer','value','valueTemplate','width'];
export const outputs: string[] = ['actionBegin','actionComplete','afterImageDelete','afterPasteCleanup','beforeDialogClose','beforeDialogOpen','beforeImageDrop','beforeImageUpload','beforePasteCleanup','beforeQuickToolbarOpen','beforeSanitizeHtml','blur','change','created','destroyed','dialogClose','dialogOpen','focus','imageRemoving','imageSelected','imageUploadFailed','imageUploadSuccess','imageUploading','quickToolbarClose','quickToolbarOpen','resizeStart','resizeStop','resizing','toolbarClick','toolbarStatusUpdate','updatedToolbarStatus','valueChange'];
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
    public formCompContext : any;
    public formContext : any;
    public tagObjects: any;
	actionBegin: any;
	actionComplete: any;
	afterImageDelete: any;
	afterPasteCleanup: any;
	beforeDialogClose: any;
	beforeDialogOpen: any;
	beforeImageDrop: any;
	beforeImageUpload: any;
	beforePasteCleanup: any;
	beforeQuickToolbarOpen: any;
	beforeSanitizeHtml: any;
	blur: any;
	change: any;
	created: any;
	destroyed: any;
	dialogClose: any;
	dialogOpen: any;
	focus: any;
	imageRemoving: any;
	imageSelected: any;
	imageUploadFailed: any;
	imageUploadSuccess: any;
	imageUploading: any;
	quickToolbarClose: any;
	quickToolbarOpen: any;
	resizeStart: any;
	resizeStop: any;
	resizing: any;
	toolbarClick: any;
	toolbarStatusUpdate: any;
	updatedToolbarStatus: any;
	public valueChange: any;


    /** 
     * Accepts the template design and assigns it as RichTextEditor’s content. 
     * The built-in template engine which provides options to compile template string into a executable function. 
     * For EX: We have expression evolution as like ES6 expression string literals
     * 
     * {% codeBlock src='rich-text-editor/value-template/index.md' %}{% endcodeBlock %}
     *     
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
        try {
                let mod = this.injector.get('RichTextEditorToolbar');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('RichTextEditorLink');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('RichTextEditorImage');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('RichTextEditorCount');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('RichTextEditorQuickToolbar');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('RichTextEditorHtmlEditor');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('RichTextEditorMarkdownEditor');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('RichTextEditorTable');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('RichTextEditorPasteCleanup');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('RichTextEditorResize');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('RichTextEditorFileManager');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
        this.formContext  = new FormBase();
        this.formCompContext  = new ComponentBase();
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
        this.formCompContext.ngOnInit(this);
    }

    public ngAfterViewInit(): void {
        this.formContext.ngAfterViewInit(this);
    }

    public ngOnDestroy(): void {
        this.formCompContext.ngOnDestroy(this);
    }

    public ngAfterContentChecked(): void {
        
        this.formCompContext.ngAfterContentChecked(this);
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

