import { Component, OnInit } from '@angular/core';
import {Person} from '../../_model/Person';
import {CvService} from '../../_services/cv.service';
import {EmbaucheeService} from '../../_services/embauchee.service';

@Component({
  selector: 'app-embauchee',
  templateUrl: './embauchee.component.html',
  styleUrls: ['./embauchee.component.css']
})
export class EmbaucheeComponent implements OnInit {

  persons: Person[];
  selectedPerson: Person;
  constructor(private embaucheeService: EmbaucheeService) { }

  ngOnInit() {

    this.persons = this.embaucheeService.getEmauchee();
  }
  selectPerson(selectedPerson) {
    this.selectedPerson = selectedPerson;
  }


}
