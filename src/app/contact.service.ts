import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http : HttpClient) { }

  baseUrl = 'http://localhost/contact.php';

  addContacts(data: any):Observable<any> {
    return this.http.post(this.baseUrl, data);
  }
}
