import { Component, computed, signal } from '@angular/core';
import { TicketItem } from "../ticket-item/ticket-item";

@Component({
  selector: 'app-checkout',
  imports: [TicketItem],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout {
 ticketsQtd = signal(1);
 statusMessage = signal("Aguardando finalizacao...");
 
 checkoutTotal = computed(()=> this.ticketsQtd() * 150);


 finishCheckout(){
  alert("Foi encerrado o evento");
  this.statusMessage.set("O usuário solicitou o cancelamento da compra!");
 }

}
