import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ServicoService
{
    constructor(private httpClient: HttpClient)
    {

    }

    private readonly baseUrl = environment["endPoint"];

    CadastrarServico(objeto: any): Observable<any> {
        return this.httpClient.post<any>(`${this.baseUrl}servico/create`, objeto);
      }
}
