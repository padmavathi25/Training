import { TestBed } from '@angular/core/testing';

import { SimpleExampleService } from './simple-example.service';

describe('SimpleExampleService', () => {
  let service: SimpleExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
