import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: Http) { }

  loginApi(form) {
    return this.http.post('http://localhost:3000/auth/login', form);
  }
}
