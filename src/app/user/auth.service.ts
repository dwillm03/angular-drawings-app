import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { rootRenderNodes } from '@angular/core/src/view';



@Injectable({
    providedIn: 'root'
})

export class AuthService {
    currentUser: IUser;

    loginUser(userName: string, password: string){
        this.currentUser = {
            id: 1,
            userName: userName,
            firstName: 'John',
            lastName: 'Jones'
        }
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    updateCurrentUser(firstName: string, lastName: string){
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }
}