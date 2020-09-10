import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';  /* slide over menu */
import { MatIconModule } from '@angular/material/icon';  /* slide over menu */
import { MatSidenavModule } from '@angular/material/sidenav';  /* slide over menu */
import { MatToolbarModule } from '@angular/material/toolbar';



///////////////////
import { CrownCComponent } from './crown/crown-c/crown-c.component';
import { HeartCComponent } from './heart/heart-c/heart-c.component';
import { InfoCComponent } from './info/info-c/info-c.component';
import { MainCComponent } from './main/main-c/main-c.component';
import { RootCComponent } from './root/root-c/root-c.component';
import { SacralCComponent } from './sacral/sacral-c/sacral-c.component';
import { SolarCComponent } from './solar/solar-c/solar-c.component';
import { ThirdeyeCComponent } from './thirdeye/thirdeye-c/thirdeye-c.component';
import { ThroatCComponent } from './throat/throat-c/throat-c.component';
import { WelcomeCComponent } from './welcome/welcome-c/welcome-c.component';
//////////////////


@NgModule({
  declarations: [
    AppComponent,
    CrownCComponent,
    HeartCComponent,
    InfoCComponent,
    MainCComponent,
    RootCComponent,
    SacralCComponent,
    SolarCComponent,
    ThirdeyeCComponent,
    ThroatCComponent,
    WelcomeCComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule, /* slide over menu button */
    MatIconModule,  /* slide over menu icon */
    MatSidenavModule,  /* slide over menu sidenave */
    MatToolbarModule,
    ////////////////
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
