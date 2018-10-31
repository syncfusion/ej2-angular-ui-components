import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LevelDirective, LevelsDirective } from './levels.directive';
import { TreeMapComponent } from './treemap.component';

/**
 * NgModule definition for the TreeMap component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        TreeMapComponent,
        LevelDirective,
        LevelsDirective
    ],
    exports: [
        TreeMapComponent,
        LevelDirective,
        LevelsDirective
    ]
})
export class TreeMapModule { }