import { Component, computed, model, signal } from '@angular/core';
import { TicketItem } from "../ticket-item/ticket-item";
import { CurrencyPipe, DatePipe } from '@angular/common';
import { ResumPipe } from '../../resum-pipe';
import { Card } from '../card/card';

@Component({
  selector: 'app-checkout',
  imports: [TicketItem, Card, DatePipe, CurrencyPipe, ResumPipe],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout {
 ticketsList = signal([
  {"id": 1, "name": "Evento topZERA", "type": "VIP", "date": Date.UTC(2026,10,12), "price": 400.90, "description": "Aqui é a top das top, melhor view do evento", "percentLot": 50},
  {"id": 2, "name": "Evento top", "type": "MEIA", "date": Date.UTC(2026,10,13), "price": 100, "description": "Aqui é a top pro estudante, paga pouquissimoo", "percentLot": 80},
  {"id": 3, "name": "Evento topZIN", "type": "STANDARD", "date": Date.UTC(2026,10,14), "price": 200, "description": "Aqui é a topzinho, dá pra aproveitar um pouco", "percentLot": 15}
 ]);

 ticketsQtd = signal(3);
 
 statusMessage = signal("Aguardando finalizacao...");
 
 checkoutTotal = computed(()=> this.ticketsQtd() * 150);

 finishCheckout(){
  alert("Foi encerrado o evento");
  this.statusMessage.set("O usuário solicitou o cancelamento da compra!");
 }

 barColor(percentLot:number){
  if (percentLot < 20){
    return "red";
  }
  return "green";
 }

}
