import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutGoldenGuineaPage } from './about-golden-guinea';

@NgModule({
  declarations: [
    AboutGoldenGuineaPage,
  ],
  imports: [
    IonicPageModule.forChild(AboutGoldenGuineaPage),
  ],
  exports: [
    AboutGoldenGuineaPage
  ]
})
export class AboutGoldenGuineaPageModule {}
