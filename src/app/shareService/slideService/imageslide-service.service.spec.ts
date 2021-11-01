import { TestBed } from '@angular/core/testing';

import { ImageslideService } from './imageslide-service.service';

describe('ImageslideService', () => {
  let service: ImageslideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageslideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
