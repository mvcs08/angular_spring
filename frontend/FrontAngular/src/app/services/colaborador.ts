import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ColaboradorService
{
    constructor(private httpClient: HttpClient)
    {

    }

    private readonly baseUrl = environment["endPoint"];

    CadastrarColaborador(objeto: any): Observable<any> {
        return this.httpClient.post<any>(`${this.baseUrl}colaborador`, objeto);
      }
}
