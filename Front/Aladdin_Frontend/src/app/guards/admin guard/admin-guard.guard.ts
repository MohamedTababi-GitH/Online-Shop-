import { CanActivateFn } from '@angular/router';
import { AuthenticationService } from '../../service/authentication/authentication.service';
import { inject } from '@angular/core';

export const adminGuardGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthenticationService);

  if (!authService.isAdmin()) {
    console.log("You are not an admin, access denied.");
    return false; 
  }

  return true; 
};
