import { CompaniesService } from '../../../services/company.service';
import { Company } from '../../../models/company.model';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent implements OnInit {
addCompanyRequest:Company = {
  id:0,
  name:'',
  email:'',
  phone:'',
  description:'',
}
  constructor( private companiesService:CompaniesService, private router:Router ) { }

  ngOnInit(): void {
  }
  addECompany(){
    this.companiesService.addCompany(this.addCompanyRequest)
      .subscribe({
        next: (company) => {
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.error('There was an error adding the company', error);
        }
      });
  }
  

}
