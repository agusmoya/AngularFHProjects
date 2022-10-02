import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = 'cZe7jpTNkbw8cTwMqG3UT2flFKBbOv46';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  private _historialBusqueda: string[] = [];

  resultados: Gif[] = [];

  constructor(private http: HttpClient) {
    this._historialBusqueda =
      JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  get historial() {
    return [...this._historialBusqueda];
  }

  buscarGifs(query: string = '') {
    query = query.trim().toLowerCase();

    if (!this._historialBusqueda.includes(query)) {
      this._historialBusqueda.unshift(query);
      this._historialBusqueda = this._historialBusqueda.splice(0, 10);

      localStorage.setItem(
        'historial',
        JSON.stringify(this._historialBusqueda)
      );
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', 10)
      .set('q', query);

    // `https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=10`
    this.http
      .get<SearchGifsResponse>(`${this.servicioUrl}/search`, { params: params })
      .subscribe((resp) => {
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      });
  }
}
