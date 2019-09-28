import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IContact } from './contact';
import { Observable, of } from 'rxjs';
import { IDrawing } from './drawing';
import { catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ContactsService
{
  contacts: IContact[] = [];
  constructor(private http: HttpClient){

  }
  contactsAPI = 'http://localhost:5000/api/contacts';


  //
  // Get list of contacts from api

   getContacts(): Observable<IContact[]> {
    return this.http.get<IContact[]>(this.contactsAPI)
        .pipe(catchError(this.handleError<IContact[]>('getContacts', [])));
  }

  getContact(id: number): Observable<IContact> {
    return this.http.get<IContact>(this.contactsAPI + id)
      .pipe(catchError(this.handleError<IContact>('getContacts')));
  }
  getMaxID()
  {

  }

  saveContact(firstName, lastName, title) {
    this.getContacts().subscribe(d => this.contacts = d);
    let options = { headers: new HttpHeaders ({'Content-Type': 'application/json'})};
    return this.http.post<IContact>(this.contactsAPI, options)
    .pipe(catchError(this.handleError<IContact>('saveContact')));
    }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

}
