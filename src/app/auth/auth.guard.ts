import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
// CanActivate ha il suo metodo, che va a prendere lo snapshot
// della route attiva
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // Dove c'è il return vogliamo ritornare isAuthenticated,
    // va a prendere il login e ci farà sapere se è effettivamente
    // connesso.
    return this.authService.isAuthenticated();
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.authService.isRoleAdmin();
  }
}
