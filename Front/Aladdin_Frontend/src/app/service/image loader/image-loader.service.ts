import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class ImageLoaderService {

  private apiUrl = 'http://localhost:8080/images';  
  //private apiUrl = 'https://b900-193-197-66-46.ngrok-free.app/images';
  constructor(
    private http: HttpClient,
    private authService: AuthenticationService
  ) {}



  getImage(imagePath: string): Observable<Blob> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders()
    .set('Authorization', `Bearer ${token}`)
    .set('ngrok-skip-browser-warning', 'skip-browser-warning');
    const imageUrl = `${this.apiUrl}/${imagePath}`;
    return this.http.get(imageUrl, { headers, responseType: 'blob' });
  }

  
  
  
}
