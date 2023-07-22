import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from './models/character.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Proyecto Apis';
  http = inject(HttpClient);
  characters: Character[] = [];
  pagina = '1';
  panelOpenState = false;

  ngOnInit() {
    this.http
      .get<Character[]>(
        `https://rickandmortyapi.com/api/character?page=${this.pagina}`
      )
      .subscribe((data) => {
        //@ts-ignore
        this.characters = data.results;
      });
  }

  clickMe() {
    this.pagina = (<HTMLInputElement>document.getElementById('pagina')).value;
    this.ngOnInit();
  }
}
