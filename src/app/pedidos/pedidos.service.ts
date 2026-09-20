import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { environment } from '../auth-config';

export interface RespuestaPing {
  mensaje: string;
  jwtClaims: Record<string, unknown>;
}

@Injectable({ providedIn: 'root' })
export class PedidosService {
  private http = inject(HttpClient);

  ping() {
    return this.http.get<RespuestaPing>(`${environment.apiBaseUrl}/api/pedidos/ping`);
  }
}
