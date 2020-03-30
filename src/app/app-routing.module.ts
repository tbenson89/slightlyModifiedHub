/**===================================|
 Application built by A. Tyler Benson
    Slightly Modified Technologies
       Started: Late 2019
       Updated: Feb  2020
 ===================================**/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UserProfileComponent} from './associate/user-profile/user-profile.component';
import {DiscoveryZoneComponent} from './discovery/discovery-zone/discovery-zone.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'discover', component: DiscoveryZoneComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
