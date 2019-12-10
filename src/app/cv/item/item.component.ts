import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Person} from '../../_model/Person';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() person: Person;
  @Output() selectedPerson = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  sendPerson(){
    this.selectedPerson.emit(
      this.person
    )
  }

}
