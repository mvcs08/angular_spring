import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class FornecedorService
{
    constructor(private httpClient: HttpClient)
    {

    }

    private readonly baseUrl = environment["endPoint"];

    CadastrarFornecedor(objeto: any): Observable<any> {
        return this.httpClient.post<any>(`${this.baseUrl}fornecedor/create`, objeto);
      }
}
