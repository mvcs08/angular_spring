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

  GetFornecedores() : Observable<Fornecedor[]> {
   return this.http.get<Fornecedor[]>(this.apiUrl);
  }


}
