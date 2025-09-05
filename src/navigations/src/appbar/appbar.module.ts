import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppBarComponent } from './appbar.component';

/**
 * NgModule definition for the AppBar component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        AppBarComponent
    ],
    exports: [
        AppBarComponent
    ]
})
export class AppBarModule { }