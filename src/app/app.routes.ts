import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
    title: 'mac-zero — Frontend Developer Setup Guide',
  },
  {
    path: 'vscode-guide',
    loadComponent: () =>
      import('./features/vscode-guide/vscode-guide.component').then((m) => m.VscodeGuideComponent),
    title: 'VS Code Insiders Guide — mac-zero',
  },
  {
    path: 'mac-setup',
    loadComponent: () =>
      import('./features/mac-setup/mac-setup.component').then((m) => m.MacSetupComponent),
    title: 'macOS Setup Guide — mac-zero',
  },
  {
    path: 'resources',
    loadComponent: () =>
      import('./features/resources/resources.component').then((m) => m.ResourcesComponent),
    title: 'Resources — mac-zero',
  },
  {
    path: 'productivity-tools',
    loadComponent: () =>
      import('./features/productivity-tools/productivity-tools.component').then(
        (m) => m.ProductivityToolsComponent,
      ),
    title: 'macOS Productivity Tools — mac-zero',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./features/not-found/not-found.component').then((m) => m.NotFoundComponent),
    title: '404 — mac-zero',
  },
];
