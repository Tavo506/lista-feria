import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {EditItemComponent} from './pages/edit-item/edit-item.component';

const routes: Routes = [
  {path: '', title: 'Home', component: HomeComponent},
  {path: 'item/:id', title: 'Editar producto', component: EditItemComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
