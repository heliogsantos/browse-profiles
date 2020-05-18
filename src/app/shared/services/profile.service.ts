import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  readonly API = 'http://localhost:3000/Profiles';
  
  constructor(private http: HttpClient) { }

  read(): Observable<any> {
    return this.http.get<any[]>(this.API);
  }

}
