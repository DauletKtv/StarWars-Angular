import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filmInerface, starshipsInterFace } from './interfaces';
import { forkJoin } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  token: string = '3fa40c21';
  constructor(private http: HttpClient) {}

  getFilms() {
    return this.http.get(`https://swapi.dev/api/films/`);
  }
  getFilm(id: any) {
    return this.http.get<filmInerface>(
      `https://swapi.dev/api/films` + '/' + id
    );
  }
  getFullInform(arr: string[]) {
    let array;
    let Observable = arr.map((url) => this.http.get(url));
    return forkJoin<any>(Observable);
  }
}
