import { TestBed } from '@angular/core/testing';

import { EmbaucheeService } from './embauchee.service';

describe('EmbaucheeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmbaucheeService = TestBed.get(EmbaucheeService);
    expect(service).toBeTruthy();
  });
});
