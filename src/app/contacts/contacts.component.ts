import { Component, OnInit } from '@angular/core';
import { PhoneNumber } from '../models/PhoneNumber';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts!: PhoneNumber[];
  constructor(private phoneNoService: PhoneService) { }

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts() {
    this.phoneNoService.getAllPhoneNumbers().subscribe(data => {
      this.contacts = data;
      this.contacts?.map(x => x.id ? x.id = x.id + 1 : x.id = 0);
    })
  }

  deletePhoneumber(phoneNo: PhoneNumber) {
    if (phoneNo.phoneNumber)
      this.phoneNoService.deletePhoneNumber(phoneNo.phoneNumber).subscribe(data=>{
        if(data){
          alert("record deleted successfully.")
          for(let index = 0; index < this.contacts?.length; index++) {
            if(this.contacts[index] === phoneNo){
              this.contacts.splice(index , 1)  ;
            }
          }
        }else{
          alert("Unable to delete record.")
        }
      })
    else{
      alert("Phone is not valid!")
    }
  }
}
