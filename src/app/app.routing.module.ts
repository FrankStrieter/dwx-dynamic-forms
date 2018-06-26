import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { RegisterComponent } from './authentication/register/register.component';

const routes: Route[] = [
  { path: '', component: RegisterComponent, pathMatch: 'full' },
  {
    path: 'administration',
    loadChildren: './administration/administration.module#AdministrationModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
