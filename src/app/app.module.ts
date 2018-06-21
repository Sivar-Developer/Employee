import { EmployeeService } from './services/employee.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeinfoComponent } from './components/employeeinfo/employeeinfo.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EmployeesComponent } from './components/employees/employees.component';

const appRoutes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'employee/add', component: AddEmployeeComponent},
  {path: 'login', component: LoginComponent}
];

const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAmuQQi_ykpNQx5Zwc0fD9ldW367zHKLMI',
    authDomain: 'management-7f8b4.firebaseapp.com',
    databaseURL: 'https://management-7f8b4.firebaseio.com',
    projectId: 'management-7f8b4',
    storageBucket: 'management-7f8b4.appspot.com',
    messagingSenderId: '929360296746'
  }
};


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmployeeinfoComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
