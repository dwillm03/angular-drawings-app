import { Resolve, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthResolver implements Resolve<boolean> {
    constructor(private auth: AuthService, private router: Router){
    
    }
    username;
    password;
    firstname;
    resolve(): boolean {  
        this.auth.loginUser(this.username, this.password);
        let firstname = !!this.auth.currentUser.firstName;
        
        if (firstname) {
            console.log('Resolving first name');
            this.firstname = firstname;
            return firstname;
           
        }
        else {
            this.router.navigate(['/drawings']);
            return null;
        }
        

    }
}