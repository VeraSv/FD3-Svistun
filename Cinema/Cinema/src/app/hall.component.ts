import { Component} from '@angular/core';
import {Tickets} from './tickets.service'

@Component({
  selector: 'app-root',
  templateUrl: './hall.component.html',
  
})
export class HallComponent {
  private tickets:Tickets;
  

  constructor (_tickets:Tickets) {
    this.tickets=_tickets
  }

  getAllSit():number {
   return this.tickets.getAllSit().length
  }

  getFreeSit():number {
   return  this.tickets.getFreeSit().length
  }

  getBusySit():number {
   return this.tickets.getBusySit().length
  }
  
}
