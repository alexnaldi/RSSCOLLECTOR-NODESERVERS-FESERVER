import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: 'profile', loadChildren: './components/profile/profile.module#ProfileModule' },
  { path: 'dashboard', loadChildren: './components/dashboard/dashboard.module#DashboardModule' },
   { path: 'articles', loadChildren: './components/articles/articles.module#ArticlesModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}