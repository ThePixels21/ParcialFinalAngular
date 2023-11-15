import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const guestGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  if(sessionStorage.getItem('role') != null && sessionStorage.getItem('role')!!.toLowerCase() == 'guest'){
    router.navigateByUrl('/no-auth')
    return false
  }else{
    return true
  }
};
