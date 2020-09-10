import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [
{path:'',component:WelcomeCComponent},
{path:'app-crown-c',component:CrownCComponent},{path:'app-heart-c',component:HeartCComponent},
{path:'app-info-c',component:InfoCComponent},
{path:'app-main-c',component:MainCComponent},
{path:'app-root-c',component:RootCComponent},
{path:'app-sacral-c',component:SacralCComponent},
{path:'app-solar-c',component:SolarCComponent},
{path:'app-thirdeye-c',component:ThirdeyeCComponent},
{path:'app-throat-c',component:ThroatCComponent},
{path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }14014111