import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { SymbolPalette } from '@syncfusion/ej2-diagrams';

import { PalettesDirective } from './palettes.directive';

export const inputs: string[] = ['accessKey','allowDrag','enableAnimation','enablePersistence','enableRtl','enableSearch','expandMode','filterSymbols','getConnectorDefaults','getNodeDefaults','getSymbolInfo','getSymbolTemplate','height','locale','palettes','symbolHeight','symbolMargin','symbolPreview','symbolWidth','width'];
export const outputs: string[] = ['paletteSelectionChange'];
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
    public childPalettes: any;
    public tags: string[] = ['palettes'];


    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try{ this.injectedModules.push(this.injector.get('DiagramsBpmnDiagrams')); }catch {} 

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

