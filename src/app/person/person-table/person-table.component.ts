import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from '../../domain/person';
import { PersonService } from '../../service/person.service';

@Component({
  selector: 'app-person-table',
  imports: [CommonModule],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent implements OnInit {
  @Input() persons: Person[] = [];

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
      this.personService.getAllPersons().subscribe((persons) => {
        this.persons = JSON.parse(JSON.stringify(persons));
      })
  }

}
