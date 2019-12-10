import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatzComponent } from './updatz.component';

describe('UpdatzComponent', () => {
  let component: UpdatzComponent;
  let fixture: ComponentFixture<UpdatzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
