import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { AuthenticationService } from './service/authentication/authentication.service';
import { CartService } from './service/cart/cart.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, FormsModule, CommonModule, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  itemsCount: number;
 
  constructor(private authService: AuthenticationService, private router: Router, private cart_service : CartService) {
      this.itemsCount = this.cart_service.getCurrentCount();
  }

  title = 'Aladdin_Frontend';

  
  
  isAuthenticated(): boolean {
    return this.authService.isLoggedIn();  
  }

  isAuthorized(): boolean {
    return this.authService.isAdmin();  
  }

  logout(): void{
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
