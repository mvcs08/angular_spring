import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LoginService
{
    constructor(private httpClient: HttpClient)
    {

    }

    private readonly baseUrl = environment["endPoint"];

    LoginUsuario(objeto: any): Observable<any> {
        return this.httpClient.post<any>(`${this.baseUrl}auth/login`, objeto);
      }

    CadastrarUsuario(objeto: any): Observable<any> {
        return this.httpClient.post<any>(`${this.baseUrl}auth/register`, objeto);
      }

    BuscarUsuarioPorId(id: string): Observable<any> {
        return this.httpClient.get<any>(`${this.baseUrl}user/selecionaruser/${id}`);
    }
    
    EditarUsuario(id: string, userData: any): Observable<any> {
        return this.httpClient.put<any>(`${this.baseUrl}user/${id}`, userData);
    }
    ExcluirUsuario(id: string): Observable<any> {
      return this.httpClient.delete(`${this.baseUrl}user/delete?id=${id}`, { responseType: 'text' });
    }


}