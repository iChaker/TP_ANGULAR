import {Injectable} from '@angular/core';
import {Person} from '../_model/Person';
import {embaucheeStatus} from '../_model/embaucheeStatus';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheeService {
  embaucheePersone: Person[] = [];
  constructor() {
  }
  embaucheePerson(person: Person): void {
    person.isEmbauchee = embaucheeStatus.ACCEPTED;
    this.embaucheePersone.push(person);
  }
  getEmauchee(): Person[] {
    return this.embaucheePersone;
  }
}
