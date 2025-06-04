import { CanActivateFn } from '@angular/router';
import { AuthenticationService } from '../../service/authentication/authentication.service';
import { inject } from '@angular/core';

export const adminGuardGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthenticationService);

  if (!authService.isAdmin()) {
   
    return false; 
  }

  return true; 
};
