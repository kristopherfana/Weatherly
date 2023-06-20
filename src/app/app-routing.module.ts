import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomePageModule)
  },
  {
    path: 'today-highlight',
    loadChildren: () => import('./pages/today-highlight/today-highlight.module').then(m => m.TodayHighlightPageModule)
  },
  {
    path: 'forecast',
    loadChildren: () => import('./pages/forecast/forecast.module').then(m => m.ForecastPageModule)
  },
  {
    path: 'weather-map',
    loadChildren: () => import('./pages/weather-map/weather-map.module').then(m => m.WeatherMapPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: "/weatherly/"
  }]
})
export class AppRoutingModule { }
