import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.inteface';

@Injectable()
export class DbzService {
  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 9000,
    },
    {
      nombre: 'Vegueta',
      poder: 7000,
    },
    {
      nombre: 'Gohan',
      poder: 10000,
    },
  ];

  constructor() {}

  get personajes(): Personaje[] {
    // evitamos manipulacion de array por referencia.
    // return this._personajes;
    // TODO: así retornamos un array nuevo
    return [...this._personajes];
  }

  agregarPersonaje(personaje: Personaje): void {
    this._personajes.push(personaje);
  }
}
