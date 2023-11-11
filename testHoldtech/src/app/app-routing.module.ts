import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path:'signin',
    loadChildren: () => import('./views/signin/signin.module').then(m => m.SigninModule)
  },
  {
    path:'users',
    loadChildren: () => import('./views/users/users.module').then(m => m.UsersModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
