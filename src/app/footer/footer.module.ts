import { FooterRoutingModule } from './footer.routing.module';
import { FooterComponent } from './footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    FooterRoutingModule
  ]
})
export class FooterModule { }
