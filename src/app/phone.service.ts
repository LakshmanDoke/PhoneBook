import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PhoneNumber } from './models/PhoneNumber';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  private baseUrl: String = "http://localhost:8080"
  constructor(private httpClient: HttpClient) {
  }

  savePhoneNumber(phoneNumber: PhoneNumber): Observable<any> {
    return this.httpClient.post(this.baseUrl + "/save", phoneNumber);
  }

  getAllPhoneNumbers(): Observable<any> {
    return this.httpClient.get(this.baseUrl + "/get-contact");
  }

}
