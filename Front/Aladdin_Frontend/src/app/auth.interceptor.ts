import { HttpRequest, HttpHandlerFn, HttpEvent, HttpInterceptorFn } from '@angular/common/http';
import { AuthenticationService } from './service/authentication/authentication.service';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

export const AuthInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
  const authService = inject(AuthenticationService);  
  const token = authService.getToken();
  console.log('Intercepting request:', req.url);

   if (token && !authService.isTokenExpired(token)) {
    console.log(token);
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(clonedRequest);
  } else {
    // If the token is expired, clear it and log the user out
    authService.logout();
    // Optionally, redirect to login page
    // router.navigate(['/login']);
  }

  return next(req); 
};

