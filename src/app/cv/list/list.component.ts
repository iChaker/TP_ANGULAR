import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Person} from '../../_model/Person';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() persons: Person[];
  @Output() selectedPerson = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  selectPerson(selectedPerson) {
    this.selectedPerson.emit(selectedPerson);
  }

}
