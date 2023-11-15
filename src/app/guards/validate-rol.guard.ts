import { CanActivateFn } from '@angular/router';

export const validateRolGuard: CanActivateFn = (route, state) => {
  if(sessionStorage.getItem('role') != null && sessionStorage.getItem('role')!!.toLowerCase() == 'admin'){
    return true
  }else{
    return false
  }
};
