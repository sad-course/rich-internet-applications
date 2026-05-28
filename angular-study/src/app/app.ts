import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from './components/contact-component/contact-component';
import { UserRegisterComponent } from './components/user-register-component/user-register-component';
import { ExperienceComponent } from './components/experience-component/experience-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContactComponent, UserRegisterComponent, ExperienceComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-study');
}
