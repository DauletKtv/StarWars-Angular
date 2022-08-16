import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpServiceService } from '../http-service.service';

interface Film {
  title: any;
  episode_id: number;
  opening_crawl: string;
  producer: string;
  release_date: string;
  url: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private httpService: HttpServiceService) {}
  images = [
    'https://upload.wikimedia.org/wikipedia/en/3/32/Star_Wars_-_Episode_II_Attack_of_the_Clones_%28movie_poster%29.jpg',
    'https://upload.wikimedia.org/wikipedia/en/3/32/Star_Wars_-_Episode_II_Attack_of_the_Clones_%28movie_poster%29.jpg',
    'https://upload.wikimedia.org/wikipedia/en/9/93/Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/81aA7hEEykL.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/91eOgodm4nL.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/81g8vEs4ixL.jpg',
  ];

  res: Film[] = [];

  ngOnInit(): void {
    this.getFilm();
  }
  getFilm() {
    this.httpService.getFilms().subscribe((results: any) => {
      this.res = results.results.sort(
        (a: any, b: any) => a.episode_id - b.episode_id
      );
    });
  }
}
