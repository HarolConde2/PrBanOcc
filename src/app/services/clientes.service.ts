import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/cliente';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private _http: HttpClient) { }

  public getInfoClient(): Observable<Cliente>{
    return this._http.get<any>(environment.endPoint+'cliente/api-cliente-pr?&nit=800220154');
  }

}
