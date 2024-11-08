import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../environments/environment';
import { map } from 'rxjs/internal/operators/map';
import { Movie } from '../models/movie.model';
import { MovieApiResponse } from '../models/movie.api.response.model';


@Injectable({
  providedIn: 'root'
})
export class ThemoviedbService {
  private configUrl!: string;
  constructor(private http: HttpClient) { }
  getMovie(): Observable<Movie[]> {
    this.configUrl = `${environment.apiUrl}/3/movie/now_playing?api_key=${environment.apikey}&language=${environment.language}`;
    return this.http.get<MovieApiResponse>(this.configUrl).pipe(
      map(response => response.results)
    );
  }
}
