import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsIdComponent } from './details-id.component';

describe('DetailsIdComponent', () => {
  let component: DetailsIdComponent;
  let fixture: ComponentFixture<DetailsIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
