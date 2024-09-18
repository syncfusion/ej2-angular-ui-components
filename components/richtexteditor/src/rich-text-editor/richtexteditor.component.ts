import { Component, ElementRef, ViewContainerRef, ValueProvider, Renderer2, Injector, ChangeDetectionStrategy, ChangeDetectorRef, forwardRef, ContentChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, FormBase, setValue } from '@syncfusion/ej2-angular-base';
import { RichTextEditor } from '@syncfusion/ej2-richtexteditor';
import { Template } from '@syncfusion/ej2-angular-base';


export const inputs: string[] = ['autoSaveOnIdle','backgroundColor','bulletFormatList','cssClass','editorMode','emojiPickerSettings','enableAutoUrl','enableHtmlEncode','enableHtmlSanitizer','enablePersistence','enableResize','enableRtl','enableTabKey','enableXhtml','enabled','enterKey','exportPdf','exportWord','fileManagerSettings','floatingToolbarOffset','fontColor','fontFamily','fontSize','format','formatPainterSettings','formatter','height','htmlAttributes','iframeSettings','importWord','inlineMode','insertAudioSettings','insertImageSettings','insertVideoSettings','keyConfig','locale','maxLength','numberFormatList','pasteCleanupSettings','placeholder','quickToolbarSettings','readonly','saveInterval','shiftEnterKey','showCharCount','showTooltip','slashMenuSettings','tableSettings','toolbarSettings','undoRedoSteps','undoRedoTimer','value','valueTemplate','width'];
export const outputs: string[] = ['actionBegin','actionComplete','afterImageDelete','afterMediaDelete','afterPasteCleanup','beforeDialogClose','beforeDialogOpen','beforeFileUpload','beforeImageDrop','beforeImageUpload','beforePasteCleanup','beforeQuickToolbarOpen','beforeSanitizeHtml','blur','change','created','destroyed','dialogClose','dialogOpen','fileRemoving','fileSelected','fileUploadFailed','fileUploadSuccess','fileUploading','focus','imageRemoving','imageSelected','imageUploadFailed','imageUploadSuccess','imageUploading','quickToolbarClose','quickToolbarOpen','resizeStart','resizeStop','resizing','slashMenuItemSelect','toolbarClick','toolbarStatusUpdate','updatedToolbarStatus','valueChange'];
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
	afterMediaDelete: any;
	afterPasteCleanup: any;
	beforeDialogClose: any;
	beforeDialogOpen: any;
	beforeFileUpload: any;
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
	fileRemoving: any;
	fileSelected: any;
	fileUploadFailed: any;
	fileUploadSuccess: any;
	fileUploading: any;
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
	slashMenuItemSelect: any;
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
     * @asptype string
     */
    @ContentChild('valueTemplate')
    @Template()
    public valueTemplate: any;

    private skipFromEvent:boolean = true;
    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector, private cdr: ChangeDetectorRef) {
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
                let mod = this.injector.get('RichTextEditorImportExport');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('RichTextEditorAudio');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('RichTextEditorVideo');
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
        try {
                let mod = this.injector.get('RichTextEditorFormatPainter');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('RichTextEditorEmojiPicker');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('RichTextEditorSlashMenu');
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

