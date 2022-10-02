import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.comnponent';

@NgModule({
  declarations: [ContadorComponent],
  exports: [ContadorComponent]
})
export class ContadorModule {}
