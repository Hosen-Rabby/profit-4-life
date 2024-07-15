import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { Cripto4lifeComponent } from './pages/cripto4life/cripto4life.component';
import { Profit4lifeComponent } from './pages/profit4life/profit4life.component';
import { ProfitfriendsComponent } from './pages/profitfriends/profitfriends.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'crypto4life', component: Cripto4lifeComponent },
  { path: 'profit4life', component: Profit4lifeComponent },
  { path: 'profitfriends', component: ProfitfriendsComponent },
];
