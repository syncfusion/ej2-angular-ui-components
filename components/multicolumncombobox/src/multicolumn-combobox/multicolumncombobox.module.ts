import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnDirective, ColumnsDirective } from './columns.directive';
import { MultiColumnComboBoxComponent } from './multicolumncombobox.component';

/**
 * NgModule definition for the MultiColumnComboBox component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        MultiColumnComboBoxComponent,
        ColumnDirective,
        ColumnsDirective
    ],
    exports: [
        MultiColumnComboBoxComponent,
        ColumnDirective,
        ColumnsDirective
    ]
})
export class MultiColumnComboBoxModule { }