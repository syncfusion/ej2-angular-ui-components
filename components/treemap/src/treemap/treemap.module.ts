import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorMappingDirective, ColorMappingsDirective } from './colormapping.directive';
import { LevelDirective, LevelsDirective } from './levels.directive';
import { TreeMapComponent } from './treemap.component';

/**
 * NgModule definition for the TreeMap component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        TreeMapComponent,
        ColorMappingDirective,
        ColorMappingsDirective,
        LevelDirective,
        LevelsDirective
    ],
    exports: [
        TreeMapComponent,
        ColorMappingDirective,
        ColorMappingsDirective,
        LevelDirective,
        LevelsDirective
    ]
})
export class TreeMapModule { }