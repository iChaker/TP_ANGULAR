import { Injectable } from '@angular/core';
import {Person} from '../_model/Person';

@Injectable({
  providedIn: 'root'
})
export class CvService {
persons: Person[];
  constructor() {
    this.persons = [
      new Person(1, 'user1', 'user lastName', 21, '07225126', 'student', '/rotating_card_profile.png'),
      new Person(2, 'foulen', 'ben foulen', 21, '0722555', 'engineer', '/rotating_card_profile2.png')
    ];
  }
   getAllCV(): Person[] {
    return this.persons;
  }
  getDetailsById(id: number) {
    const index = this.persons.findIndex(person => person.id === id);
    if (index === -1) {
      return null;
    }
    return this.persons[index];
  }
  deletePerson(person: Person) {
    this.persons = this.persons.filter(obj => obj !== person);
  }
  updatePerson(person: Person) {
    const index = this.persons.findIndex(fperson => fperson.id === person.id);
    if (index !== -1) {
      this.persons[index] = person;
    }
  }
}
