import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TicketItem } from './components/ticket-item/ticket-item';
import { Checkout } from './components/checkout/checkout';
import { Card } from "./components/card/card";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Checkout],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('smart-ticket');
}
