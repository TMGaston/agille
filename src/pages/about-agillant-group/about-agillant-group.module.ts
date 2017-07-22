import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutAgillantGroupPage } from './about-agillant-group';

@NgModule({
  declarations: [
    AboutAgillantGroupPage,
  ],
  imports: [
    IonicPageModule.forChild(AboutAgillantGroupPage),
  ],
  exports: [
    AboutAgillantGroupPage
  ]
})
export class AboutAgillantGroupPageModule {}
