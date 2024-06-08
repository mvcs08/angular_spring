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

  GetColaboradores() : Observable<Colaborador[]> {
   return this.http.get<Colaborador[]>(this.apiUrl);
  }


}


