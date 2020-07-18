import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AlreadyLoggedInGuard implements CanActivate {
  
  constructor(private _authservice:AuthService,
    private _router: Router){}
  
  canActivate() :boolean{
    if (this._authservice.loggedIn()){
      this._router.navigate(['/dashboard'])
      return false
    }
    else{
      //this._router.navigate(['login'])
      return true
    }
  }
}
