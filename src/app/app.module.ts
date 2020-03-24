/**===================================|
 Application built by A. Tyler Benson
    Slightly Modified Technologies
         Started: Late 2019
         Updated: Feb  2020
 ===================================**/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatCardModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatListModule, MatSelectModule} from '@angular/material';
import { MainNavComponent } from './main-nav/main-nav.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';
import { MatJumbotronModule } from '@angular-material-extensions/jumbotron';
import { DashboardDesktopHeaderComponent } from './dashboard/dashboard-desktop-header/dashboard-desktop-header.component';
import { DashboardLaptopHeaderComponent } from './dashboard/dashboard-laptop-header/dashboard-laptop-header.component';
import { DashboardMobileHeaderComponent } from './dashboard/dashboard-mobile-header/dashboard-mobile-header.component';
import { CatCardsComponent } from './partials/cat-cards/cat-cards.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MainNavComponent,
    DashboardDesktopHeaderComponent,
    DashboardLaptopHeaderComponent,
    DashboardMobileHeaderComponent,
    CatCardsComponent,
    FooterComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFontAwesomeModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatMenuModule,
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatDividerModule,
        MatFormFieldModule,
        MatInputModule,
        MatListModule,
        FormsModule,
        MatJumbotronModule,
        MatCardModule,
        MatSelectModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }