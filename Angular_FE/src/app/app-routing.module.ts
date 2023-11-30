import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './Concepts/data-binding/data-binding.component';
import { RoutingComponent } from './Concepts/routing/routing.component';

const routes: Routes = [
   {path :'', redirectTo: 'databind', pathMatch :'full'},
   {path :'binding', component : DataBindingComponent},
   {path :'routing', component :  RoutingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents =[ RoutingComponent, DataBindingComponent ]
