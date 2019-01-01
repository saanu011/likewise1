import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArithematicComponent } from './arithematic/arithematic.component'

const routes: Routes = [
  {path:'', component:ArithematicComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
