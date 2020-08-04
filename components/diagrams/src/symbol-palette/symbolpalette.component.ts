import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, QueryList, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { SymbolPalette } from '@syncfusion/ej2-diagrams';

import { PalettesDirective } from './palettes.directive';

export const inputs: string[] = ['accessKey','allowDrag','connectorDefaults','enableAnimation','enablePersistence','enableRtl','enableSearch','expandMode','filterSymbols','getConnectorDefaults','getNodeDefaults','getSymbolInfo','getSymbolTemplate','height','ignoreSymbolsOnSearch','locale','nodeDefaults','palettes','symbolDragSize','symbolHeight','symbolInfo','symbolMargin','symbolPreview','symbolWidth','width'];
export const outputs: string[] = ['paletteExpanding','paletteSelectionChange'];
export const twoWays: string[] = [''];

/**
 * SymbolPalette Component
 * ```html
 * <ej-symbol-palette></ej-symbol-palette>
 * ```
 */
@Component({
    selector: 'ejs-symbolpalette',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childPalettes: new ContentChild(PalettesDirective)
    }
})
@ComponentMixins([ComponentBase])
export class SymbolPaletteComponent extends SymbolPalette implements IComponentBase {
    public context : any;
    public tagObjects: any;
    public childPalettes: QueryList<PalettesDirective>;
    public tags: string[] = ['palettes'];


    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
                let mod = this.injector.get('DiagramsBpmnDiagrams');
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
        this.tagObjects[0].instance = this.childPalettes;
        this.context.ngAfterContentChecked(this);
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

