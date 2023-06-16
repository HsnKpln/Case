import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrewCardPageComponent } from './home/home-page/crew-card-page/crew-card-page.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { LayoutsComponent } from './home/layouts/layouts.component';
// import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
        loadChildren: () =>
          import('./home/home-page/home-page.module').then(
            (m) => m.HomePageModule
          ),
      },
      {
        path: ':id',
        component: CrewCardPageComponent,
        loadChildren: () =>
          import('./home/home-page/crew-card-page/crew-card-page.module').then(
            (m) => m.CrewCardPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
