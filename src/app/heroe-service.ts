import { Injectable } from '@angular/core';
import { Heroe } from './heroe';
import { HEROES } from './heroe-data';
@Injectable()
export class HeroeService {
  constructor() { }
  getHeroes(): Heroe[] {
    return HEROES;
  }
  getHeroe(nombre: string): Heroe {
    const heroeEncontrado = HEROES.find(heroe => heroe.nombre.toLowerCase() === nombre.toLowerCase());
    console.log(HEROES.map(h => h.nombre)); // Imprime todos los nombres de los héroes en el archivo HEROES.ts
    return heroeEncontrado || {nombre: '', bio: '', img: '', aparicion: '', casa: ''};
  }
}
