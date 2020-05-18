import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Profile } from './../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  readonly API = 'http://localhost:3000/Profiles';
  
  constructor(private http: HttpClient) { }

  read(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.API);
  }

}
