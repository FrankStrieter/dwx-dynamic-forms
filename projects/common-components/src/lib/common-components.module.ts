import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [MatToolbarModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class CommonComponentsModule {}
