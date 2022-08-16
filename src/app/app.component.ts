import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpServiceService } from './http-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  router: any;
  constructor(private httpService: HttpServiceService) {}
  login = false;
  res = [];
  name: string = '';
  public loged: any = false;
  loginName = localStorage.getItem('loggedUser');
  ngOnInit(): void {
    if (localStorage.getItem('loggedUser') == undefined) {
      this.loged = false;
    } else {
      this.loged = true;
    }
    this.res = [];
    this.getFilms();
  }
  getFilms() {
    this.httpService.getFilms().subscribe((results: any) => {
      this.res = results.results;
    });
  }
  log() {
    console.log(this.name);
    this.login = true;
    localStorage.setItem('login', `${this.name}`);
  }
  logOut() {
    localStorage.clear();
    this.login = false;
    location.href = location.href;
  }
}
