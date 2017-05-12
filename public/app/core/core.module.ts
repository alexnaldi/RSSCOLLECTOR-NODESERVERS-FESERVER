import { NgModule } from '@angular/core';
import { ClickOutsideDirective } from './event-handler/clickoutside.directive'
@NgModule({
  declarations: [ ClickOutsideDirective ],
  exports:      [ ClickOutsideDirective ]
})
export class CoreModule { }