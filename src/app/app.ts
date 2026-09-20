import { Component, OnInit, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { AccountInfo } from '@azure/msal-browser';

import { environment } from './auth-config';

@Component({
  imports: [RouterOutlet, RouterLink],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  protected readonly title = signal('Pedidos360');
  protected readonly usuario = signal<AccountInfo | null>(null);

  constructor(private authService: MsalService) {}

  ngOnInit(): void {
    this.authService.handleRedirectObservable().subscribe({
      next: (result) => {
        if (result?.account) {
          this.authService.instance.setActiveAccount(result.account);
        }
        this.cargarUsuario();
      },
      error: (error) => console.error('Error de autenticación MSAL:', error),
    });
  }

  login(): void {
    this.authService.loginRedirect({ scopes: [environment.apiScope] });
  }

  logout(): void {
    this.authService.logoutRedirect();
  }

  private cargarUsuario(): void {
    let account = this.authService.instance.getActiveAccount();

    if (!account) {
      const accounts = this.authService.instance.getAllAccounts();
      if (accounts.length > 0) {
        account = accounts[0];
        this.authService.instance.setActiveAccount(account);
      }
    }

    this.usuario.set(account);
  }

  protected estaAutenticado(): boolean {
    return this.usuario() !== null;
  }
}
