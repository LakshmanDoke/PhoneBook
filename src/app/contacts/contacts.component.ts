import { Component, OnInit } from '@angular/core';
import { PhoneNumber } from '../models/PhoneNumber';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: PhoneNumber[] | undefined;
  constructor(private phoneNoService: PhoneService) { }

  ngOnInit(): void {
  }

  getContacts() {
    this.phoneNoService.getAllPhoneNumbers().subscribe(data => {
      this.contacts = data;
    })
  }
}
