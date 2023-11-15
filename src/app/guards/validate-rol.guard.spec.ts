import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { validateRolGuard } from './validate-rol.guard';

describe('validateRolGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => validateRolGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
