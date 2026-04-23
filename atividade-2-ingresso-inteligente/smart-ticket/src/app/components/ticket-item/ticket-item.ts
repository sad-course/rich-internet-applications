import { Component , computed, input, model, output} from '@angular/core';

@Component({
  selector: 'app-ticket-item',
  imports: [],
  templateUrl: './ticket-item.html',
  styleUrl: './ticket-item.css',
})
export class TicketItem {

  eventName = input.required<string>();
  tickets = model(1);
  coupon = input<string>();
  onEventCancel = output<void>();

  increaseTicketCount() {
    this.tickets.update((value)=> value + 1);
  }

  decreaseTicketCount() {
    this.tickets.update((value)=> value - 1);
  }

  onCouponInput(event: Event){
    const texto = (event.target as HTMLInputElement).value;
    alert("Buscando CUPOM "+ texto);
  }

  cancelTicket(){
    console.log("Chamou o output");
    this.onEventCancel.emit();
  }
}
