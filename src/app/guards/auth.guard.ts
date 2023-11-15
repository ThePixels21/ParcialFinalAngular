import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  if(sessionStorage.getItem('role') == null){
    router.navigateByUrl('/no-auth')
    return false
  } else {
    return true
  }
};
