import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CvService} from '../../_services/cv.service';
import {Person} from '../../_model/Person';

@Component({
  selector: 'app-details-id',
  templateUrl: './details-id.component.html',
  styleUrls: ['./details-id.component.css']
})
export class DetailsIdComponent implements OnInit {
  userId: any;
  person: Person;
  constructor(private route: ActivatedRoute, private cvService: CvService, private router: Router) { }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    console.log(this.userId);
    this.person = this.cvService.getDetailsById(Number(this.userId));
    console.log(this.person);
  }
  delete() {
    this.cvService.deletePerson(this.person);
    this.router.navigate(['cvs']);
  }
  update() {
    this.router.navigate(['update', this.person.id]);
  }

}
