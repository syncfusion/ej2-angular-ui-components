import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, QueryList, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';
import { Template } from '@syncfusion/ej2-angular-base';
import { SheetsDirective } from './sheets.directive';
import { DefinedNamesDirective } from './definednames.directive';

export const inputs: string[] = ['activeSheetIndex','allowAutoFill','allowCellFormatting','allowChart','allowConditionalFormat','allowDataValidation','allowDelete','allowEditing','allowFiltering','allowFindAndReplace','allowFreezePane','allowHyperlink','allowImage','allowInsert','allowMerge','allowNumberFormatting','allowOpen','allowResizing','allowSave','allowScrolling','allowSorting','allowUndoRedo','allowWrap','autoFillSettings','cellStyle','cssClass','definedNames','enableClipboard','enableContextMenu','enableKeyboardNavigation','enableKeyboardShortcut','enablePersistence','enableRtl','height','isProtected','locale','openUrl','password','saveUrl','scrollSettings','selectionSettings','sheets','showAggregate','showFormulaBar','showRibbon','showSheetTabs','width'];
export const outputs: string[] = ['actionBegin','actionComplete','afterHyperlinkClick','afterHyperlinkCreate','beforeCellFormat','beforeCellRender','beforeCellSave','beforeCellUpdate','beforeConditionalFormat','beforeDataBound','beforeHyperlinkClick','beforeHyperlinkCreate','beforeOpen','beforeSave','beforeSelect','beforeSort','cellEdit','cellEditing','cellSave','contextMenuBeforeClose','contextMenuBeforeOpen','contextMenuItemSelect','created','dataBound','dataSourceChanged','dialogBeforeOpen','fileMenuBeforeClose','fileMenuBeforeOpen','fileMenuItemSelect','openComplete','openFailure','queryCellInfo','saveComplete','select','sortComplete'];
export const twoWays: string[] = [''];

/**
 * `ejs-spreadsheet` represents the Angular Spreadsheet Component.
 * ```html
 * <ejs-spreadsheet></ejs-spreadsheet>
 * ```
 */
@Component({
    selector: 'ejs-spreadsheet',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childSheets: new ContentChild(SheetsDirective), 
        childDefinedNames: new ContentChild(DefinedNamesDirective)
    }
})
@ComponentMixins([ComponentBase])
export class SpreadsheetComponent extends Spreadsheet implements IComponentBase {
    public context : any;
    public tagObjects: any;
	actionBegin: any;
	actionComplete: any;
	afterHyperlinkClick: any;
	afterHyperlinkCreate: any;
	beforeCellFormat: any;
	beforeCellRender: any;
	beforeCellSave: any;
	beforeCellUpdate: any;
	beforeConditionalFormat: any;
	beforeDataBound: any;
	beforeHyperlinkClick: any;
	beforeHyperlinkCreate: any;
	beforeOpen: any;
	beforeSave: any;
	beforeSelect: any;
	beforeSort: any;
	cellEdit: any;
	cellEditing: any;
	cellSave: any;
	contextMenuBeforeClose: any;
	contextMenuBeforeOpen: any;
	contextMenuItemSelect: any;
	created: any;
	dataBound: any;
	dataSourceChanged: any;
	dialogBeforeOpen: any;
	fileMenuBeforeClose: any;
	fileMenuBeforeOpen: any;
	fileMenuItemSelect: any;
	openComplete: any;
	openFailure: any;
	queryCellInfo: any;
	saveComplete: any;
	select: any;
	public sortComplete: any;
    public childSheets: QueryList<SheetsDirective>;
    public childDefinedNames: QueryList<DefinedNamesDirective>;
    public tags: string[] = ['sheets', 'definedNames'];
    @ContentChild('template')
    @Template()
    public template: any;

    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
                let mod = this.injector.get('SpreadsheetClipboard');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('SpreadsheetEdit');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('SpreadsheetKeyboardNavigation');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('SpreadsheetKeyboardShortcut');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('SpreadsheetCollaborativeEditing');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('SpreadsheetSelection');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('SpreadsheetContextMenu');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('SpreadsheetFormulaBar');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('SpreadsheetRibbon');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('SpreadsheetSave');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('SpreadsheetOpen');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('SpreadsheetSheetTabs');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('SpreadsheetDataBind');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('SpreadsheetAllModule');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('SpreadsheetBasicModule');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('SpreadsheetCellFormat');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('SpreadsheetNumberFormat');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('SpreadsheetFormula');
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
        this.tagObjects[0].instance = this.childSheets;
        if (this.childDefinedNames) {
                    this.tagObjects[1].instance = this.childDefinedNames as any;
                }
        this.context.ngAfterContentChecked(this);
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

