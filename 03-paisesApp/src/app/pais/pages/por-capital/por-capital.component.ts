import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css'],
})
export class PorCapitalComponent implements OnInit {
  paises: Pais[] = [];
  hayError: boolean = false;
  termino: string = '';

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarCapital(termino).subscribe({
      next: (paises) => (this.paises = paises),
      error: (error) => {
        console.info(error);
        this.paises = [];
        this.hayError = true;
      },
    });
  }
}
