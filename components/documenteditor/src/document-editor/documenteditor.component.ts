import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, QueryList, Renderer2, Injector, ValueProvider } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { DocumentEditor } from '@syncfusion/ej2-documenteditor';



export const inputs: string[] = ['acceptTab','currentUser','defaultPasteOption','documentEditorSettings','documentName','documentSettings','enableBookmarkDialog','enableBordersAndShadingDialog','enableComment','enableContextMenu','enableCursorOnReadOnly','enableEditor','enableEditorHistory','enableFontDialog','enableFootnoteAndEndnoteDialog','enableFormField','enableHyperlinkDialog','enableImageResizer','enableListDialog','enableLocalPaste','enableLockAndEdit','enableOptionsPane','enablePageSetupDialog','enableParagraphDialog','enablePersistence','enablePrint','enableRtl','enableSearch','enableSelection','enableSfdtExport','enableSpellCheck','enableStyleDialog','enableTableDialog','enableTableOfContentsDialog','enableTableOptionsDialog','enableTablePropertiesDialog','enableTextExport','enableTrackChanges','enableWordExport','headers','height','isReadOnly','layoutType','locale','pageGap','pageOutline','serverActionSettings','serviceUrl','showComments','showRevisions','useCtrlClickToFollowHyperlink','userColor','width','zIndex','zoomFactor'];
export const outputs: string[] = ['actionComplete','afterFormFieldFill','beforeCommentAction','beforeFileOpen','beforeFormFieldFill','beforePaneSwitch','commentBegin','commentDelete','commentEnd','contentChange','contentControl','created','customContextMenuBeforeOpen','customContextMenuSelect','destroyed','documentChange','keyDown','requestNavigate','searchResultsChange','selectionChange','serviceFailure','trackChange','viewChange','zoomFactorChange','beforeXmlHttpRequestSend'];
export const twoWays: string[] = [];

/**
 * `ejs-documenteditor` represents the Angular Document Editor Component.
 * ```html
 * <ejs-documenteditor isReadOnly='true' enableSelection='true'></ejs-documenteditor>
 * ```
 */
@Component({
    selector: 'ejs-documenteditor',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {

    }
})
@ComponentMixins([ComponentBase])
export class DocumentEditorComponent extends DocumentEditor implements IComponentBase {
    public context : any;
    public tagObjects: any;
	actionComplete: any;
	afterFormFieldFill: any;
	beforeCommentAction: any;
	beforeFileOpen: any;
	beforeFormFieldFill: any;
	beforePaneSwitch: any;
	commentBegin: any;
	commentDelete: any;
	commentEnd: any;
	contentChange: any;
	contentControl: any;
	created: any;
	customContextMenuBeforeOpen: any;
	customContextMenuSelect: any;
	destroyed: any;
	documentChange: any;
	keyDown: any;
	requestNavigate: any;
	searchResultsChange: any;
	selectionChange: any;
	serviceFailure: any;
	trackChange: any;
	viewChange: any;
	zoomFactorChange: any;
	public beforeXmlHttpRequestSend: any;



    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
                let mod = this.injector.get('DocumentEditorPrint');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('DocumentEditorSfdtExport');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('DocumentEditorWordExport');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('DocumentEditorTextExport');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('DocumentEditorSelection');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('DocumentEditorSearch');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('DocumentEditorEditor');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('DocumentEditorEditorHistory');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('DocumentEditorOptionsPane');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('DocumentEditorContextMenu');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('DocumentEditorImageResizer');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('DocumentEditorHyperlinkDialog');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('DocumentEditorTableDialog');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('DocumentEditorBookmarkDialog');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('DocumentEditorTableOfContentsDialog');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('DocumentEditorPageSetupDialog');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('DocumentEditorParagraphDialog');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('DocumentEditorListDialog');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('DocumentEditorStyleDialog');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('DocumentEditorStylesDialog');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('DocumentEditorBulletsAndNumberingDialog');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('DocumentEditorFontDialog');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('DocumentEditorTablePropertiesDialog');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('DocumentEditorBordersAndShadingDialog');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('DocumentEditorTableOptionsDialog');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('DocumentEditorCellOptionsDialog');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('DocumentEditorSpellChecker');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('DocumentEditorSpellCheckDialog');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('DocumentEditorCollaborativeEditing');
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

