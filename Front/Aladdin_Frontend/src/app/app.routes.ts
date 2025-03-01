import { Routes } from '@angular/router';
import { MainComponent } from './component/main/main.component';
import { ContactComponent } from './component/contact/contact.component';
import { LoginComponent } from './component/login/login.component';
import { authGuard } from './guards/authentication guard/auth.guard';
import { HomeComponent } from './component/home/home.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { AdminPanelComponent } from './component/admin-panel/admin-panel.component';
import { adminGuardGuard } from './guards/admin guard/admin-guard.guard';
import { ProductManagementComponent } from './component/product-management/product-management.component';
import { AdminOverviewComponent } from './component/admin-overview/admin-overview.component';
import { OrderManagementComponent } from './component/order-management/order-management.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default route to redirect to login if not authenticated
  { path: 'products', component: MainComponent, canActivate: [authGuard] },
  { path: 'contact', component: ContactComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: 'products/:id', component: ProductDetailsComponent, canActivate: [authGuard] },

  // Admin

  { path: 'admin-panel', component: AdminPanelComponent, canActivate:[adminGuardGuard, authGuard],
    children: [
      { path: '', component: AdminOverviewComponent , canActivate:[adminGuardGuard, authGuard]}, 
      { path: 'product-management', component: ProductManagementComponent, canActivate:[adminGuardGuard, authGuard] },
      { path: 'orders', component: OrderManagementComponent , canActivate:[adminGuardGuard, authGuard]}
    ]
  }
];
