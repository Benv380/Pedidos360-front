import { JsonPipe } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

import { PedidosService } from './pedidos.service';

@Component({
  imports: [JsonPipe],
  selector: 'app-pedidos',
  styleUrl: './pedidos.css',
  templateUrl: './pedidos.html',
})
export class Pedidos implements OnInit {
  private pedidosService = inject(PedidosService);
  private authService = inject(MsalService);

  protected readonly mensaje = signal<string | null>(null);
  protected readonly claimsBackend = signal<Record<string, unknown> | null>(null);
  protected readonly claimsIdToken = signal<Record<string, unknown> | null>(null);
  protected readonly error = signal<string | null>(null);

  ngOnInit(): void {
    const cuenta = this.authService.instance.getActiveAccount();
    this.claimsIdToken.set((cuenta?.idTokenClaims as Record<string, unknown>) ?? null);

    this.pedidosService.ping().subscribe({
      next: (data) => {
        this.mensaje.set(data.mensaje);
        this.claimsBackend.set(data.jwtClaims);
      },
      error: () => this.error.set('No se pudo contactar al backend.'),
    });
  }
}
