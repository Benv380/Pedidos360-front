// Datos del App Registration creado en el tenant "Pedidos360 Clientes" (Microsoft Entra External ID)
export const environment = {
  azureAd: {
    clientId: 'd5ea1b90-01aa-4b17-a271-b5440afd6520',
    tenantSubdomain: 'pedidos360clientes',
    tenantId: '427c54e7-25d1-4e62-a9c9-bca65706d07f',
    // Los tenants "External" (CIAM) usan el dominio ciamlogin.com, no login.microsoftonline.com
    authority: 'https://pedidos360clientes.ciamlogin.com/427c54e7-25d1-4e62-a9c9-bca65706d07f',
    knownAuthorities: ['pedidos360clientes.ciamlogin.com'],
    redirectUri: 'http://localhost:4200',
    postLogoutRedirectUri: 'http://localhost:4200',
  },
  apiScope: 'api://d5ea1b90-01aa-4b17-a271-b5440afd6520/access_as_user',
  apiBaseUrl: 'http://localhost:8081',
};
