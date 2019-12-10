import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../../_model/Person';
import {EmbaucheeService} from '../../_services/embauchee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() person: Person;
  constructor(private embauchService: EmbaucheeService, private router: Router) { }

  ngOnInit() {
  }
  accept() {
    this.embauchService.embaucheePerson(this.person);
    this.router.navigate(['/embauchee']);
  }
  details() {
    this.router.navigate(['/details', this.person.id]);
  }

}
