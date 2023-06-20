import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodayHighlightPageRoutingModule } from './today-highlight-routing.module';

import { TodayHighlightPage } from './today-highlight.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodayHighlightPageRoutingModule
  ],
  declarations: [TodayHighlightPage]
})
export class TodayHighlightPageModule {}
