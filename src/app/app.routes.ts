import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./dashboard/dashboard.component'),
    children:[
      {
        path: '',
        loadComponent: () => import('./dashboard/pages/home/ecommerce.component'),
        pathMatch: 'full',
        title: 'Inicio | PerfectMatch',
      },
    ]
  },
  {
    path: 'examples',
    loadComponent: () => import('./examples/example.component'),
    children: [
      {
        path: '',
        loadComponent: () => import('./examples/pages/dashboard/ecommerce/ecommerce.component'),
        pathMatch: 'full',
        title: 'Ejemplos',
      },
      {
        path:'calendar',
        loadComponent: () => import('./examples/pages/calender/calender.component'),
        title:'Calendario'
      },
      {
        path:'profile',
        loadComponent: () => import('./examples/pages/profile/profile.component'),
        title:'Perfil'
      },
      {
        path:'form-elements',
        loadComponent: () => import('./examples/pages/forms/form-elements/form-elements.component'),
        title:'Formularios'
      },
      {
        path:'basic-tables',
        loadComponent: () => import('./examples/pages/tables/basic-tables/basic-tables.component'),
        title:'Tablas'
      },
      {
        path:'avatar',
        loadComponent: () => import('./examples/pages/ui-elements/avatar-element/avatar-element.component'),
        title:'Avatares'
      },
      {
        path:'badge',
        loadComponent: () => import('./examples/pages/ui-elements/badges/badges.component'),
        title:'Insignias'
      },
      {
        path:'buttons',
        loadComponent: () => import('./examples/pages/ui-elements/buttons/buttons.component'),
        title:'Botones'
      },
      {
        path:'images',
        loadComponent: () => import('./examples/pages/ui-elements/images/images.component'),
        title:'Imágenes'
      },
      {
        path:'videos',
        loadComponent: () => import('./examples/pages/ui-elements/videos/videos.component'),
        title:'Videos'
      }, 
      {
        path: 'line-chart',
        loadComponent: () => import('./examples/pages/charts/line-chart/line-chart.component').then(m => m.LineChartComponent),
        title:'Gráficos de líneas'
      },
      {
        path: 'bar-chart',
        loadComponent: () => import('./examples/pages/charts/bar-chart/bar-chart.component').then(m => m.BarChartComponent),
        title:'Gráficos de barras'
      },
      {
        path: 'alerts',
        loadComponent: () => import('./examples/pages/ui-elements/alerts/alerts.component').then(m => m.AlertsComponent),
        title:'Alertas'
      },
      {
        path: 'avatar-element',
        loadComponent: () => import('./examples/pages/ui-elements/avatar-element/avatar-element.component'),
        title:'Avatares'
      },
      {
        path: 'badge',
        loadComponent: () => import('./examples/pages/ui-elements/badges/badges.component'),
        title:'Insignias'
      },
      {
        path: 'buttons',
        loadComponent: () => import('./examples/pages/ui-elements/buttons/buttons.component'),
        title:'Botones'
      },
      {
        path: 'images',
        loadComponent: () => import('./examples/pages/ui-elements/images/images.component'),
        title:'Imágenes'
      }
    ]
  },
  // user-facing app (matches, profile, messages)
  {
    path: 'user',
  loadComponent: () => import('./user/user.component'),
    children: [
      {
        path: '',
  loadComponent: () => import('./user/pages/matches/matches.component'),
        pathMatch: 'full',
        title: 'Matches | PerfectMatch',
      },
      {
        path: 'profile',
  loadComponent: () => import('./user/pages/profile/profile.component'),
        title: 'Perfil | PerfectMatch',
      },
      {
        path: 'messages',
        loadComponent: () => import('./user/pages/messages/messages.component'),
        title: 'Mensajes | PerfectMatch',
      },
    ],
  },
  // auth pages
  {
    path: 'auth',
    loadComponent: () => import('./auth/auth.component'),
    children: [
      {
        path: 'login',
        loadComponent: () => import('./auth/pages/login-page/login-page.component')
      },
      {
        path: 'register',
        loadComponent: () => import('./auth/pages/register-page/register-page.component')
      }
    ]
  },
  // error pages
  {
    path:'**',
    loadComponent: () => import('./error/not-found-error.component'),
    title:'PerfectMatch - Página no encontrada'
  },
];
