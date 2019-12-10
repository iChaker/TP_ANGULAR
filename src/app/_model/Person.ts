import {embaucheeStatus} from './embaucheeStatus';

export class Person {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  cin: string;
  job: string;
  path: string;
  isEmbauchee: embaucheeStatus;

  constructor(id: number = 0, firstName: string = '', lastName: string = '', age: number = 0, cin: string = '',
              job: string = '', path: string = '', isEmbauchee: embaucheeStatus = embaucheeStatus.PENDING) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.cin = cin;
    this.job = job;
    this.path = path;
    this.isEmbauchee = isEmbauchee;
  }
}
