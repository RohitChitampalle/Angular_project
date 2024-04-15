import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  // Replace this method with your actual authentication logic
  isLoggedIn(): Observable<boolean> {
    // Example: Check if the user is logged in based on some condition
    const isLoggedIn = !!localStorage.getItem('token'); // Example: Check if token exists in local storage
    return of(isLoggedIn);
  } 

}
