import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../../../services/company.service';
import { Company } from 'src/app/models/company.model';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.scss']
})
export class EditCompanyComponent implements OnInit {
  companyDetails:Company = {
    id: 0,
    name:'',
    email:'',
    phone:'',
    description:'',
  
  }

  constructor(private route: ActivatedRoute,  private companiesService:CompaniesService, private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next : (params) => {
      const id = Number(params.get('id'));
      if(id){
      this.companiesService.getCompany(id)
      .subscribe({
        next:(response) =>{
          this.companyDetails = response
          this.companyDetails.id = id;
        }
      })
      }
      }
      })
  }
  updateEmployee(){
    this.companiesService.updateCompany(this.companyDetails.id, this.companyDetails)
      .subscribe({
        next: (response) => {
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.error('Error updating company:', error);
        }
      });
  }
  
  deleteEmployee(id:number){
    this.companiesService.deleteCompany(id)
      .subscribe({
        next: (response) => {
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.error('Error deleting company:', error);
        }
      });
  }
  

}
