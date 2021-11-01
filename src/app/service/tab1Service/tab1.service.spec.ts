import { TestBed } from '@angular/core/testing';

import { Tab1service } from './tab1.service';

describe('Tab1service', () => {
  let service: Tab1service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tab1service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
