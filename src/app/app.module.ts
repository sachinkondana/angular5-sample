import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms'

import { AppComponent } from './app.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { EmpListComponent } from './emp-list/emp-list.component';

const appRoutes: Routes = [
  { path: '', component: EmpListComponent },
  { path: 'view/:id', component: ViewEmployeeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ViewEmployeeComponent,
    EmpListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
