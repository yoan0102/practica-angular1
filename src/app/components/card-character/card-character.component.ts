import { Component, Input } from '@angular/core';
import { Character } from 'src/app/interface/chacracter.interface';

@Component({
  selector: 'app-card-character',
  templateUrl: './card-character.component.html',
  styleUrls: ['./card-character.component.css'],
})
export class CardCharacterComponent {
  @Input() character!: Character;
}
