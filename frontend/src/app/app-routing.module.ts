import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'' , redirectTo : 'home',pathMatch:'full'},
  {path:'' ,loadChildren:() =>import('./pages/client/client.module').then(m => m.ClientModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
