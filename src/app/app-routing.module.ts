/**===================================|
 Application built by A. Tyler Benson
    Slightly Modified Technologies
       Started: Late 2019
       Updated: Feb  2020
 ===================================**/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';


const routes: Routes = [
  // { path: '', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
