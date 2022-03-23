import { NgModule } from '@angular/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';

const ngZorro_components = [
    NzMenuModule
];

@NgModule({
  imports: [ngZorro_components],
  exports: [ngZorro_components]
})
export class NgZorroModule { }