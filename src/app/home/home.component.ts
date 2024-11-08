import { Component } from '@angular/core';
import { ThemoviedbService } from '../services/themoviedb.service';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  movies!: Movie[];
  imageBaseUrl: string = 'https://image.tmdb.org/t/p/w500';

  constructor(private themoviedbService: ThemoviedbService) { }

  ngOnInit() {
    this.getMovie();
  }

  getMovie() {
    this.themoviedbService.getMovie().subscribe((data) => {
      this.movies = data;
    });
    console.log(this.movies);
  }
}
