import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListComponent } from './components/companies/companies-list/company-list.component';
import { AddCompanyComponent } from './components/companies/add-companies/add-company.component';
import { EditCompanyComponent } from './components/companies/edit-companies/edit-company.component';
import { ClientListComponent } from './components/client/client-list/client-list.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyListComponent
  },
  {
    path: 'company',
    component: CompanyListComponent
  },
  {
    path: 'company/add',
    component: AddCompanyComponent
  },
  {
    path: 'company/edit/:id',
    component: EditCompanyComponent
  },
  {
    path: 'cliente',
    component: ClientListComponent
  },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
