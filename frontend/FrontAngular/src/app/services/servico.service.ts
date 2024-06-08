import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Servico } from '../Models/Servico';
import { Observable } from 'rxjs';
import { Response } from '../Models/Response';


@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  private apiUrl = `${environment.endPoint}servico`

  constructor( private http: HttpClient ) { }

  GetServicos() : Observable<Servico[]> {
   return this.http.get<Servico[]>(this.apiUrl);
  }


}