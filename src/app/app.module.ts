import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { MenuComponent } from './home/menu/menu.component';
import { CattleComponent } from './home/menu/cattle/cattle.component';
import { WeightComponent } from './home/menu/weight/weight.component';
import { ReportsComponent } from './home/menu/reports/reports.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes =[
  { path: ' ', component: LoginComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'cattle', component: CattleComponent },
  { path: 'weight', component: WeightComponent },
  { path: 'reports', component: ReportsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    CattleComponent,
    WeightComponent,
    ReportsComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
