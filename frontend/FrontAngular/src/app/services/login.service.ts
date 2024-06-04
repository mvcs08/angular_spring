import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
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
}