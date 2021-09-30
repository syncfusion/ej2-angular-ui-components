import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbItemDirective, BreadcrumbItemsDirective } from './items.directive';
import { BreadcrumbComponent } from './breadcrumb.component';

/**
 * NgModule definition for the Breadcrumb component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        BreadcrumbComponent,
        BreadcrumbItemDirective,
        BreadcrumbItemsDirective
    ],
    exports: [
        BreadcrumbComponent,
        BreadcrumbItemDirective,
        BreadcrumbItemsDirective
    ]
})
export class BreadcrumbModule { }