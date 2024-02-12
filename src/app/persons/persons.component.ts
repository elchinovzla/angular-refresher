import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-persons',
  standalone: true,
  templateUrl: './persons.component.html',
  imports: [CommonModule],
})
export class PersonsComponent implements OnInit, OnDestroy {
  personList: string[];
  isFetching = false;
  private personListSubs: Subscription;

  constructor(private service: PersonsService) {}

  ngOnInit(): void {
    this.personListSubs = this.service.personsChanged.subscribe((persons) => {
      this.personList = persons;
      this.isFetching = false;
    });
    this.isFetching = true;
    this.service.fetchPersons();
  }

  ngOnDestroy(): void {
    this.personListSubs.unsubscribe();
  }

  onRemovePerson(personName: string) {
    this.service.removePerson(personName);
  }
}
