import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { environment } from '../auth-config';

@Injectable({ providedIn: 'root' })
export class PedidosService {
  private http = inject(HttpClient);

  ping() {
    return this.http.get<{ mensaje: string }>(`${environment.apiBaseUrl}/api/pedidos/ping`);
  }
}
