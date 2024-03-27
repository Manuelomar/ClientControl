import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyListComponent } from './components/companies/companies-list/company-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddCompanyComponent } from './components/companies/add-companies/add-company.component';
import { FormsModule } from '@angular/forms';
import { EditCompanyComponent } from './components/companies/edit-companies/edit-company.component';
import { ClientListComponent } from './components/client/client-list/client-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    AddCompanyComponent,
    EditCompanyComponent,
    ClientListComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
