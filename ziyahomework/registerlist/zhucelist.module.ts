import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZhucelistPage } from './zhucelist';

@NgModule({
  declarations: [
    ZhucelistPage,
  ],
  imports: [
    IonicPageModule.forChild(ZhucelistPage),
  ],
})
export class ZhucelistPageModule {}
