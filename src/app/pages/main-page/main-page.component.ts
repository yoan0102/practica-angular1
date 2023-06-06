import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { tap } from 'rxjs';
import { Character, CharacterApi } from '../../interface/chacracter.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  public characters: Character[] = [];
  public charactersFilter: Character[] = [];
  constructor(private readonly http: HttpClient) {
    this.getData();
  }

  getData() {
    this.http
      .get<CharacterApi>(`${environment.apiUrl}/character`)
      .pipe(
        tap((data) => {
          console.table(data);
          this.characters = data.results;
          this.charactersFilter = this.characters;
        })
      )
      .subscribe();
  }

  filter(arg: any) {
    const search: string = arg.target.value;
    this.characters = this.charactersFilter?.filter(({ name }: Character) =>
      name.toLowerCase().includes(search.toLowerCase())
    );
  }
}
