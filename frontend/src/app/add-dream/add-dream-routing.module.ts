import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDreamPage } from './add-dream.page';

const routes: Routes = [
  {
    path: '',
    component: AddDreamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddDreamPageRoutingModule {}
