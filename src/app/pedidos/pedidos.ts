import { Component, OnInit, inject, signal } from '@angular/core';

import { PedidosService } from './pedidos.service';

@Component({
  imports: [],
  selector: 'app-pedidos',
  styleUrl: './pedidos.css',
  templateUrl: './pedidos.html',
})
export class Pedidos implements OnInit {
  private pedidosService = inject(PedidosService);

  protected readonly respuesta = signal<string | null>(null);
  protected readonly error = signal<string | null>(null);

  ngOnInit(): void {
    this.pedidosService.ping().subscribe({
      next: (data) => this.respuesta.set(data.mensaje),
      error: () => this.error.set('No se pudo contactar al backend. ¿Está corriendo en localhost:8081?'),
    });
  }
}
