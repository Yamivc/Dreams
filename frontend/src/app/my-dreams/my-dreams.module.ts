import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MyDreamsPageRoutingModule } from './my-dreams-routing.module';
import { MyDreamsPage } from './my-dreams.page';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyDreamsPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [MyDreamsPage]
})
export class MyDreamsPageModule {}
