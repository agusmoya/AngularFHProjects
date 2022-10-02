import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.inteface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  nuevo: Personaje = { nombre: 'pers..', poder: 123 };

  constructor() {}

  // get personajes(): Personaje[] {
  //   return this.dbzService.personajes;
  // }

  cambiarNombre(event: any): void {
    console.log(event.target.value);
  }
}
