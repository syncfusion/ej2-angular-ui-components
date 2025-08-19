import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialShapeSelectionDirective, InitialShapeSelectionsDirective } from './initialshapeselection.directive';
import { MarkerDirective, MarkersDirective } from './markersettings.directive';
import { ColorMappingDirective, ColorMappingsDirective } from './colormapping.directive';
import { BubbleDirective, BubblesDirective } from './bubblesettings.directive';
import { NavigationLineDirective, NavigationLinesDirective } from './navigationlinesettings.directive';
import { LayerDirective, LayersDirective } from './layers.directive';
import { AnnotationDirective, AnnotationsDirective } from './annotations.directive';
import { MapsComponent } from './maps.component';

/**
 * NgModule definition for the Maps component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        MapsComponent,
        InitialShapeSelectionDirective,
        InitialShapeSelectionsDirective,
        MarkerDirective,
        MarkersDirective,
        ColorMappingDirective,
        ColorMappingsDirective,
        BubbleDirective,
        BubblesDirective,
        NavigationLineDirective,
        NavigationLinesDirective,
        LayerDirective,
        LayersDirective,
        AnnotationDirective,
        AnnotationsDirective
    ],
    exports: [
        MapsComponent,
        InitialShapeSelectionDirective,
        InitialShapeSelectionsDirective,
        MarkerDirective,
        MarkersDirective,
        ColorMappingDirective,
        ColorMappingsDirective,
        BubbleDirective,
        BubblesDirective,
        NavigationLineDirective,
        NavigationLinesDirective,
        LayerDirective,
        LayersDirective,
        AnnotationDirective,
        AnnotationsDirective
    ]
})
export class MapsModule { }