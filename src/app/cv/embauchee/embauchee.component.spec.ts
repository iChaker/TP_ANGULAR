import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbaucheeComponent } from './embauchee.component';

describe('EmbaucheeComponent', () => {
  let component: EmbaucheeComponent;
  let fixture: ComponentFixture<EmbaucheeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmbaucheeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbaucheeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
