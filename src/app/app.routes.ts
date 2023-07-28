import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('../app/home/home.component').then(c => c.HomeComponent)
      },
      {
        path: "card-list",
        loadComponent: () => import("../app/card-list/card-list.component").then(c => c.CardListComponent)
      }
];
