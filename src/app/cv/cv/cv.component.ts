import {Component, OnInit, Output} from '@angular/core';
import {Person} from '../../_model/Person';
import {CvService} from '../../_services/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
   persons: Person[];
   selectedPerson: Person;
  constructor(private cvService: CvService) { }

  ngOnInit() {

    this.persons = this.cvService.getAllCV();
  }
  selectPerson(selectedPerson) {
    this.selectedPerson = selectedPerson;
  }

}
