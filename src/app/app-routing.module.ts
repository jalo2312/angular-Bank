import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ClientDashboardComponent } from './pages/client-dashboard/client-dashboard.component';
import { EmployeeDashboardComponent } from './pages/employee-dashboard/employee-dashboard.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { SolicitudesProductoComponent } from './pages/solicitudes-producto/solicitudes-producto.component';
import { CreacionProductoComponent } from './pages/creacion-producto/creacion-producto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'client-dashboard', component: ClientDashboardComponent },
  { path: 'employee-dashboard', component: EmployeeDashboardComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'solicitud', component: SolicitudesProductoComponent },
  { path: 'crear', component: CreacionProductoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
