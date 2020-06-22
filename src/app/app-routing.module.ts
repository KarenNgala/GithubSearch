import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './Error/not-found/not-found.component'
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: "", pathMatch:"full", redirectTo:"/home"},
  {path: "home", component:UsersComponent},
  {path: "404", component:NotFoundComponent},
  {path: "**", redirectTo:"/404"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
