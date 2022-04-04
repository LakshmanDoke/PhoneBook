import { Component, OnInit } from '@angular/core';
import { PhoneNumber } from '../models/PhoneNumber';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  name: string="";
  email:string = "";
  phoneNumber: number | undefined;
   phoneNo : PhoneNumber | undefined;
  constructor(private phoneService: PhoneService) { }

  ngOnInit(): void {
  }

  savePhoneNumber(){
   this.phoneNo = new PhoneNumber(this.name, this.email,Number(this.phoneNumber));
    this.phoneService.savePhoneNumber(this.phoneNo).subscribe(data=>{
      if(data){
        alert("success");
      }
    })
  }
}
