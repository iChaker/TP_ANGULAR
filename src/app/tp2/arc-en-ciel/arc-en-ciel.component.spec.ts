import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcEnCielComponent } from './arc-en-ciel.component';

describe('ArcEnCielComponent', () => {
  let component: ArcEnCielComponent;
  let fixture: ComponentFixture<ArcEnCielComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArcEnCielComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcEnCielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
