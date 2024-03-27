import { CompaniesService } from '../../../services/company.service';
import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company.model';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
companies: Company[] = [

]
  constructor(private CompaniesService: CompaniesService) { }

  ngOnInit(): void {
    this.CompaniesService.getAll()
    .subscribe({
      next: (companies)=>{
this.companies = companies;   
 },
      error: (response)=>{
        console.log(response);
      },
    })
    
  }

}
