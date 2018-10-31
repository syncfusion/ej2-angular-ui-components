import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaletteDirective, PalettesDirective } from './palettes.directive';
import { SymbolPaletteComponent } from './symbolpalette.component';

/**
 * NgModule definition for the SymbolPalette component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        SymbolPaletteComponent,
        PaletteDirective,
        PalettesDirective
    ],
    exports: [
        SymbolPaletteComponent,
        PaletteDirective,
        PalettesDirective
    ]
})
export class SymbolPaletteModule { }