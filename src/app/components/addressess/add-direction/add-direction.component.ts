import { Address } from './../../../models/address.model';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-add-direction',
  templateUrl: './add-direction.component.html',
  styleUrls: ['./add-direction.component.scss']
})
export class AddCompanyComponent implements OnInit {
addAddressRequest:Address = {
  id:0,
  client_id: 0,
  street_number: '',
  city: '',
  additional_information: ''

 
}
  constructor( private addressService:AddressService, private router:Router ) { }

  ngOnInit(): void {
  }
  addAddress(){
    this.addressService.addAddress(this.addAddressRequest)
      .subscribe({
        next: (Address) => {
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.error('There was an error adding the Address', error);
        }
      });
  }
  

}
