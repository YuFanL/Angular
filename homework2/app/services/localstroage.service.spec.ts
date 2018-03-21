import { TestBed, inject } from '@angular/core/testing';

import { LocalstroageService } from './localstroage.service';

describe('LocalstroageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalstroageService]
    });
  });

  it('should be created', inject([LocalstroageService], (service: LocalstroageService) => {
    expect(service).toBeTruthy();
  }));
});
