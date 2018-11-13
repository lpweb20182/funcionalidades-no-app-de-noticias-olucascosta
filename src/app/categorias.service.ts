import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Database } from './database.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  API_URL = 'http://localhost:8000/api/categorias/';

  constructor(private http: HttpClient) { }

  public todos() {
    return this.http.get(this.API_URL);
  }

  public encontrar(id: number) {
    return this.http.get(this.API_URL + id + '/');
  }
}
