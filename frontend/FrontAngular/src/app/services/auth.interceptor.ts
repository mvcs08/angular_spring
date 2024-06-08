import { Injectable } from "@angular/core";
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    debugger;
    const token = localStorage.getItem('token');

    // Verifica se a solicitação é para a rota de login
    if (request.url.endsWith('/auth/login')) {
      // Se for a rota de login, não inclua o cabeçalho de autorização
      return next.handle(request);
    }

    // Para todas as outras solicitações, adicione o cabeçalho de autorização se o token estiver presente
    if (token && token !== '') {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    
    return next.handle(request);
  }
}
