import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CvService} from '../../_services/cv.service';
import {Person} from '../../_model/Person';

@Component({
  selector: 'app-updatz',
  templateUrl: './updatz.component.html',
  styleUrls: ['./updatz.component.css']
})
export class UpdatzComponent implements OnInit {
  setProfileForm: FormGroup;
  person: Person;
  userId: string;
  constructor( private formBuilder: FormBuilder,
               private route: ActivatedRoute,
               private router: Router,
               private cvService: CvService) { }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.person = this.cvService.getDetailsById(Number(this.userId));
    this.setProfileForm = this.formBuilder.group({
      firstName: this.person.firstName,
      lastName: this.person.lastName,
      age: this.person.age,
      cin: this.person.cin,
      job: this.person.job
    });

  }

  onUpdate() {
    const formValue = this.setProfileForm.value;
    this.person.firstName = formValue.firstName;
    this.person.lastName = formValue.lastName;
    this.person.cin = formValue.cin;
    this.person.age = Number(formValue.age);
    this.cvService.updatePerson(this.person);
    console.log(formValue)
    this.router.navigate(['details', this.person.id]);

  }
  }


