import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Fornecedor } from '../Models/Fornecedor';
import { Observable } from 'rxjs';
import { Response } from '../Models/Response';


@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  private apiUrl = `${environment.endPoint}fornecedor`

  constructor( private http: HttpClient ) { }

  CadastrarFornecedor(objeto: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, objeto);
  }

  GetFornecedores() : Observable<Fornecedor[]> {
   return this.http.get<Fornecedor[]>(this.apiUrl);
  }

  GetFornecedor(id:number) : Observable<Fornecedor> {
    return this.http.get<Fornecedor>(`${this.apiUrl}/${id}`);
  }

  ExcluirFornecedor(id:number) : Observable<Fornecedor[]> {
    return this.http.delete<Fornecedor[]>(`${this.apiUrl}/${id}`);
  }

  EditarFornecedor(id: number, fornecedor: any): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<void>(url, fornecedor);
  }

}
