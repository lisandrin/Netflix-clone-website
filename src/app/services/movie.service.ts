import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movies} from '../models/movies';
import {environment} from '../../environments/environment';

const enum endpoint{
  latest = '/movie/550?',
  nowPlaying = '/movie/now_playing',
  topRated = '/movie/top_rated',
  trending = '/trending/all/week',
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url = 'https://api.themoviedb.org/3';
  private apiKey = environment.api;
  constructor(private http: HttpClient) {
  }

  getLatestMovie(): Observable<Movies> {
    return this.http.get<Movies>(`${this.url}/movie/550?api_key=${this.apiKey}`);
  }

  getNowPlaying(): Observable<Movies> {
    return this.http.get<Movies>(`${this.url}${endpoint.nowPlaying}`, {
      params: {
        apiKey: this.apiKey
      }
    });
  }

  getTopRated(): Observable<Movies> {
    return this.http.get<Movies>(`${this.url}${endpoint.topRated}`, {
      params: {
        apiKey: this.apiKey
      }
    });
  }

  getTrending(): Observable<Movies> {
    return this.http.get<Movies>(`${this.url}${endpoint.trending}`, {
      params: {
        apiKey: this.apiKey
      }
    });
  }
}
