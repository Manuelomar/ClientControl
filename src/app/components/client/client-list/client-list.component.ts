import { ClientService } from './../../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements  OnInit {
  clients: Client[] = [
  
  ]
    constructor(private ClientsService: ClientService) { }
  
    ngOnInit(): void {
      this.ClientsService.getAll()
      .subscribe({
        next: (clients)=>{
  this.clients = clients;   
   },
        error: (response)=>{
          console.log(response);
        },
      })
      
    }
  
  }
  