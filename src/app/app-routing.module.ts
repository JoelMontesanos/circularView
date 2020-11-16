import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ClouthesFormComponent} from './components/clouthes-form/clouthes-form.component';
import {ClouthesListComponent} from './components/clouthes-list/clouthes-list.component';
import { ConsComponent } from './cons/cons.component';


const routes: Routes = [
  {//Route to get the list of all items in db
    path:'',
    redirectTo: '/clouthes',
    pathMatch:'full'
  },
  {
    path: 'clouthes',
    component: ClouthesListComponent
  },
  {// Add a new product
    path:'clouthes/add',
    component: ClouthesFormComponent
  },
  {// Edit a Product
    path:'clouthes/edit/:id',
    component:ClouthesFormComponent
  },
  {// Path to make consultans
    path:'clouthes/queries',
    component: ConsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
