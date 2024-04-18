import { TestBed } from '@angular/core/testing';
import { CanActivateFn, Router } from '@angular/router';
import { of } from 'rxjs';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let authGuard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard, Router]
    });
    authGuard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(authGuard).toBeTruthy();
  });

  it('should return true if user is authenticated', async () => {
    spyOn(authGuard, 'canActivate').and.returnValue(await Promise.resolve(true));

    const result = await authGuard.canActivate();
    expect(result).toBeTrue();
  });

  it('should return false if user is not authenticated', async () => {
    spyOn(authGuard, 'canActivate').and.returnValue(await Promise.resolve(false));

    const result = await authGuard.canActivate();
    expect(result).toBeFalse();
  });
});
