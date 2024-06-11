import { NgModule, ValueProvider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnDirective, ColumnsDirective } from './columns.directive';
import { MultiColumnComboBoxComponent } from './multicolumncombobox.component';
import { MultiColumnComboBoxModule } from './multicolumncombobox.module';
import {VirtualScroll, Sort, Edit, Group} from '@syncfusion/ej2-multicolumn-combobox'


export const VirtualScrollService: ValueProvider = { provide: 'MultiColumn-ComboBoxVirtualScroll', useValue: VirtualScroll};
export const SortService: ValueProvider = { provide: 'MultiColumn-ComboBoxSort', useValue: Sort};
export const EditService: ValueProvider = { provide: 'MultiColumn-ComboBoxEdit', useValue: Edit};
export const GroupService: ValueProvider = { provide: 'MultiColumn-ComboBoxGroup', useValue: Group};

/**
 * NgModule definition for the MultiColumnComboBox component with providers.
 */
@NgModule({
    imports: [CommonModule, MultiColumnComboBoxModule],
    exports: [
        MultiColumnComboBoxModule
    ],
    providers:[
        VirtualScrollService,
        SortService,
        EditService,
        GroupService
    ]
})
export class MultiColumnComboBoxAllModule { }