import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Colaborador } from '../Models/Colaborador';
import { Observable } from 'rxjs';
import { Response } from '../Models/Response';


@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  private apiUrl = `${environment.endPoint}colaborador`

  constructor( private http: HttpClient ) { }

  CadastrarColaborador(objeto: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, objeto);
  }

  GetColaboradores() : Observable<Colaborador[]> {
   return this.http.get<Colaborador[]>(this.apiUrl);
  }
  GetColaborador(id:number) : Observable<Colaborador> {
    return this.http.get<Colaborador>(`${this.apiUrl}/${id}`);
  }

  ExcluirColaborador(id:number) : Observable<Colaborador[]> {
    return this.http.delete<Colaborador[]>(`${this.apiUrl}/${id}`);
  }

  EditarColaborador(id: number, colaborador: any): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<void>(url, colaborador);
  }

}


