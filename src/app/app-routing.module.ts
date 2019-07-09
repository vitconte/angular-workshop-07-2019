import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TodosComponent } from './todos/todos.component';

const appRoutes: Routes = [
  { path: '', component: TodosComponent }, // default
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,
    { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
