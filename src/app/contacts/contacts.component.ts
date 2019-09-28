import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../shared/contacts.service';
import { IContact } from '../shared/contact';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  firstName: FormControl;
  lastName: FormControl;
  title: FormControl;
  contactForm: FormGroup;

  constructor(private contactService: ContactsService, private route: Router) { }
  public contacts: IContact[];

  ngOnInit() {
    this.contactService.getContacts().subscribe(d => this.contacts = d);
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.title = new FormControl('', Validators.required);
    this.contactForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      title: this.title
    });
  }

  addContact(formValues)
  {
    this.contactService.saveContact(formValues.firstName, formValues.lastName, formValues.title);
    this.route.navigate(['/about']);
  }

}
