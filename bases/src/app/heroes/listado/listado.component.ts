import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Batman', 'Hulk'];
  heroeBorrado: string = '';

  borrarHeroe(): void {
    // this.heroeBorrado = this.heroes.splice(0, 1)[0];
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
