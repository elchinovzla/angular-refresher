import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-person-input',
  standalone: true,
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css'],
  imports: [FormsModule],
})
export class PersonInputComponent {
  enteredPersonName = '';

  constructor(private service: PersonsService) {}

  onCreatePerson() {
    this.service.addPerson(this.enteredPersonName);
    this.enteredPersonName = '';
  }
}
