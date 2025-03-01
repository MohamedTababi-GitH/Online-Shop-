import { Component } from '@angular/core';
import { AuthenticationService } from '../../service/authentication/authentication.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthenticationService, private router: Router) {}

  onSubmit(): void {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        this.authService.saveToken(response.token); 
        this.router.navigate(['/']); 
      },
      (error) => {
        this.errorMessage = 'Login failed. Please check your credentials.';
      }
    );
  }
}
