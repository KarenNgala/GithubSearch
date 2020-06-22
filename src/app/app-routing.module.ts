import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './Error/not-found/not-found.component'
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: 'home', component:UsersComponent},
  {path:'**',component:NotFoundComponent},
  {path: '', redirectTo:"/home", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
