import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyDreamsPage } from './my-dreams.page';

const routes: Routes = [
  {
    path: '',
    component: MyDreamsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyDreamsPageRoutingModule {}
