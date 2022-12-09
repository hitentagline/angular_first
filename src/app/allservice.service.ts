import { Injectable } from '@angular/core';
import { User } from './shared/interface/common';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllserviceService {

  private url = 'https://my-json-server.typicode.com/JSGund/XHR-Fetch-Request-JavaScript/posts';

  public users: User[] = [
    {
      firstName: "Elon",
      lastName:"Musk"
    },
    {
      firstName: "Jhon",
      lastName:"Cohen"
    }
  ];

  constructor(private http: HttpClient) { }
  showTodaysDate() {
    let ndate = new Date();
    return ndate;
  }

  showUsersList() {
    return this.users;
  }

  getPosts() {
    return this.http.get(this.url);
  }

  saveData(data: any) {
    return this.http.post(this.url, data);
  }
}
