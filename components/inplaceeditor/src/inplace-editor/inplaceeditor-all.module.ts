import { NgModule, ValueProvider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InPlaceEditorComponent } from './inplaceeditor.component';
import { InPlaceEditorModule } from './inplaceeditor.module';
import {AutoComplete, ColorPicker, ComboBox, DateRangePicker, MultiSelect, Rte, Slider, TimePicker} from '@syncfusion/ej2-inplace-editor'


export const AutoCompleteService: ValueProvider = { provide: 'InPlaceEditorAutoComplete', useValue: AutoComplete};
export const ColorPickerService: ValueProvider = { provide: 'InPlaceEditorColorPicker', useValue: ColorPicker};
export const ComboBoxService: ValueProvider = { provide: 'InPlaceEditorComboBox', useValue: ComboBox};
export const DateRangePickerService: ValueProvider = { provide: 'InPlaceEditorDateRangePicker', useValue: DateRangePicker};
export const MultiSelectService: ValueProvider = { provide: 'InPlaceEditorMultiSelect', useValue: MultiSelect};
export const RteService: ValueProvider = { provide: 'InPlaceEditorRte', useValue: Rte};
export const SliderService: ValueProvider = { provide: 'InPlaceEditorSlider', useValue: Slider};
export const TimePickerService: ValueProvider = { provide: 'InPlaceEditorTimePicker', useValue: TimePicker};

/**
 * NgModule definition for the InPlaceEditor component with providers.
 */
@NgModule({
    imports: [CommonModule, InPlaceEditorModule],
    exports: [
        InPlaceEditorModule
    ],
    providers:[
        AutoCompleteService,
        ColorPickerService,
        ComboBoxService,
        DateRangePickerService,
        MultiSelectService,
        RteService,
        SliderService,
        TimePickerService
    ]
})
export class InPlaceEditorAllModule { }