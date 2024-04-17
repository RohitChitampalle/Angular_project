import { TestBed } from '@angular/core/testing';

import { ServiceGithubService } from './service-github.service';

describe('ServiceGithubService', () => {
  let service: ServiceGithubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceGithubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
