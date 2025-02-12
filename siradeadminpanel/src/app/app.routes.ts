import { Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {DashboardComponent} from "./pages/admin/dashboard/dashboard.component";
import {DoctorsTableComponent} from "./pages/admin/doctor-table/doctor-table.component";
import { AnalysisComponent } from './pages/admin/analysis/analysis.component';

export const routes: Routes = [

  { path: '', component: LoginComponent }, 
  { path: 'login', component: LoginComponent }, 
  { path: 'admindashboard', component: DashboardComponent }, 
  { path: 'doctortable', component: DoctorsTableComponent }, 
  { path: 'analisis', component: AnalysisComponent }

];
