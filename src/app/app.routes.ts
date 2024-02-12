import { Routes } from '@angular/router';
import { PersonInputComponent } from './persons/person-input.component';
import { PersonsComponent } from './persons/persons.component';

export const routes: Routes = [
  { path: '', component: PersonsComponent },
  { path: 'input', component: PersonInputComponent },
];
