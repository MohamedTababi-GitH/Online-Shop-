import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthenticationService } from '../../service/authentication/authentication.service';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthenticationService);  // Inject AuthenticationService
  const router = inject(Router);  // Inject Router
  const token = authService.getToken();

  // Check if the user is logged in
  if (token && authService.isLoggedIn() && !authService.isTokenExpired(token)) {
   
    return true;
  } else {
    // Redirect to login page if not logged in
    authService.logout();
    router.navigate(['/login']);
    
    return false;
  }
};
