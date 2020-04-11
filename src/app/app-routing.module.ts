/**===================================|
 Application built by A. Tyler Benson
    Slightly Modified Technologies
       Started: Late 2019
       Updated: Feb  2020
 ===================================**/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './associate/user-profile/user-profile.component';
import { DiscoveryComponent } from './pages/discovery/discovery.component';
import { ShopComponent } from './pages/shop/shop.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'discover', component: DiscoveryComponent },
  { path: 'shop', component: ShopComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
