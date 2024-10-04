import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddDreamPageRoutingModule } from './add-dream-routing.module';
import { AddDreamPage } from './add-dream.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddDreamPageRoutingModule
  ],
  declarations: [AddDreamPage]
})
export class AddDreamPageModule { }
