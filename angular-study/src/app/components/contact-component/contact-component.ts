import { Component } from '@angular/core';
import { FormsModule, NgForm } from "@angular/forms";

@Component({
  selector: 'app-contact-component',
  imports: [FormsModule],
  templateUrl: './contact-component.html',
  styleUrl: './contact-component.css',
})
export class ContactComponent {
  contact = {
    "name":"",
    "email":"",
    "subject":"",
    "message": ""
  }

  onSubmit(form: NgForm){
    if (form.valid){
      console.log(form.value)
    }
  }
}
