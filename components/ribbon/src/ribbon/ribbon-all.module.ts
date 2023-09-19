import { NgModule, ValueProvider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RibbonItemDirective, RibbonItemsDirective } from './items.directive';
import { RibbonCollectionDirective, RibbonCollectionsDirective } from './collections.directive';
import { RibbonGroupDirective, RibbonGroupsDirective } from './groups.directive';
import { RibbonTabDirective, RibbonTabsDirective } from './tabs.directive';
import { RibbonComponent } from './ribbon.component';
import { RibbonModule } from './ribbon.module';
import {RibbonButton, RibbonDropDown, RibbonSplitButton, RibbonCheckBox, RibbonColorPicker, RibbonComboBox, RibbonGroupButton, RibbonFileMenu, RibbonBackstage} from '@syncfusion/ej2-ribbon'


export const RibbonButtonService: ValueProvider = { provide: 'RibbonRibbonButton', useValue: RibbonButton};
export const RibbonDropDownService: ValueProvider = { provide: 'RibbonRibbonDropDown', useValue: RibbonDropDown};
export const RibbonSplitButtonService: ValueProvider = { provide: 'RibbonRibbonSplitButton', useValue: RibbonSplitButton};
export const RibbonCheckBoxService: ValueProvider = { provide: 'RibbonRibbonCheckBox', useValue: RibbonCheckBox};
export const RibbonColorPickerService: ValueProvider = { provide: 'RibbonRibbonColorPicker', useValue: RibbonColorPicker};
export const RibbonComboBoxService: ValueProvider = { provide: 'RibbonRibbonComboBox', useValue: RibbonComboBox};
export const RibbonGroupButtonService: ValueProvider = { provide: 'RibbonRibbonGroupButton', useValue: RibbonGroupButton};
export const RibbonFileMenuService: ValueProvider = { provide: 'RibbonRibbonFileMenu', useValue: RibbonFileMenu};
export const RibbonBackstageService: ValueProvider = { provide: 'RibbonRibbonBackstage', useValue: RibbonBackstage};

/**
 * NgModule definition for the Ribbon component with providers.
 */
@NgModule({
    imports: [CommonModule, RibbonModule],
    exports: [
        RibbonModule
    ],
    providers:[
        RibbonButtonService,
        RibbonDropDownService,
        RibbonSplitButtonService,
        RibbonCheckBoxService,
        RibbonColorPickerService,
        RibbonComboBoxService,
        RibbonGroupButtonService,
        RibbonFileMenuService,
        RibbonBackstageService
    ]
})
export class RibbonAllModule { }