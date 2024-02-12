import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PersonInputComponent } from './persons/person-input.component';
import { PersonsComponent } from './persons/persons.component';
import { PersonsService } from './persons/persons.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    RouterOutlet,
    FormsModule,
    RouterLink,
    PersonsComponent,
    PersonInputComponent,
  ],
  providers: [PersonsService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-refresher';
}
