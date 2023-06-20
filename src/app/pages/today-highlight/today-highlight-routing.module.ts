import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodayHighlightPage } from './today-highlight.page';

const routes: Routes = [
  {
    path: '',
    component: TodayHighlightPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodayHighlightPageRoutingModule {}
