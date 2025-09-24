import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/landing/landing.component'),
    title: 'PerfectMatch | Conexiones reales'
  },
  // user funnel primary area
  {
    path: 'examples',
    loadComponent: () => import('./features/examples/example.component'),
    children: [
      {
        path: '',
        loadComponent: () => import('./features/examples/pages/dashboard/ecommerce/ecommerce.component'),
        pathMatch: 'full',
        title: 'Ejemplos',
      },
      {
        path:'calendar',
        loadComponent: () => import('./features/examples/pages/calender/calender.component'),
        title:'Calendario'
      },
      {
        path:'profile',
        loadComponent: () => import('./features/examples/pages/profile/profile.component'),
        title:'Perfil'
      },
      {
        path:'form-elements',
        loadComponent: () => import('./features/examples/pages/forms/form-elements/form-elements.component'),
        title:'Formularios'
      },
      {
        path:'basic-tables',
        loadComponent: () => import('./features/examples/pages/tables/basic-tables/basic-tables.component'),
        title:'Tablas'
      },
      {
        path:'avatar',
        loadComponent: () => import('./features/examples/pages/ui-elements/avatar-element/avatar-element.component'),
        title:'Avatares'
      },
      {
        path:'badge',
        loadComponent: () => import('./features/examples/pages/ui-elements/badges/badges.component'),
        title:'Insignias'
      },
      {
        path:'buttons',
        loadComponent: () => import('./features/examples/pages/ui-elements/buttons/buttons.component'),
        title:'Botones'
      },
      {
        path:'images',
        loadComponent: () => import('./features/examples/pages/ui-elements/images/images.component'),
        title:'Imágenes'
      },
      {
        path:'videos',
        loadComponent: () => import('./features/examples/pages/ui-elements/videos/videos.component'),
        title:'Videos'
      }, 
      {
        path: 'line-chart',
        loadComponent: () => import('./features/examples/pages/charts/line-chart/line-chart.component').then(m => m.LineChartComponent),
        title:'Gráficos de líneas'
      },
      {
        path: 'bar-chart',
        loadComponent: () => import('./features/examples/pages/charts/bar-chart/bar-chart.component').then(m => m.BarChartComponent),
        title:'Gráficos de barras'
      },
      {
        path: 'alerts',
        loadComponent: () => import('./features/examples/pages/ui-elements/alerts/alerts.component').then(m => m.AlertsComponent),
        title:'Alertas'
      },
      {
        path: 'avatar-element',
        loadComponent: () => import('./features/examples/pages/ui-elements/avatar-element/avatar-element.component'),
        title:'Avatares'
      },
      {
        path: 'badge',
        loadComponent: () => import('./features/examples/pages/ui-elements/badges/badges.component'),
        title:'Insignias'
      },
      {
        path: 'buttons',
        loadComponent: () => import('./features/examples/pages/ui-elements/buttons/buttons.component'),
        title:'Botones'
      },
      {
        path: 'images',
        loadComponent: () => import('./features/examples/pages/ui-elements/images/images.component'),
        title:'Imágenes'
      }
    ]
  },
  {
    path: 'admin',
    loadComponent: () => import('./features/dashboard/dashboard.component'),
    children:[
      {
        path: '',
        loadComponent: () => import('./features/dashboard/pages/home/ecommerce.component'),
        pathMatch: 'full',
        title: 'Panel | PerfectMatch',
      },
    ]
  },
  // user-facing app (matches, profile, messages)
  {
    path: 'user',
  loadComponent: () => import('./features/user/user.component'),
    children: [
      {
        path: '',
        loadComponent: () => import('./features/user/pages/home/user-home.component'),
        pathMatch: 'full',
        title: 'Inicio | PerfectMatch',
      },
      {
        path: 'profile',
  loadComponent: () => import('./features/user/pages/profile/profile.component'),
        title: 'Perfil | PerfectMatch',
      },
      {
        path: 'messages',
        loadComponent: () => import('./features/user/pages/messages/messages.component'),
        title: 'Mensajes | PerfectMatch',
      },
      {
        path: 'matches',
        loadComponent: () => import('./features/user/pages/matches/matches.component'),
        title: 'Matches | PerfectMatch'
      },
      {
        path: 'verification',
        loadComponent: () => import('./features/user/components/visual-verification/visual-verification.component').then(m => m.VisualVerificationComponent),
        title: 'Verificación | PerfectMatch'
      }
    ],
  },
  // auth pages
  {
    path: 'auth',
    loadComponent: () => import('./features/auth/auth.component'),
    children: [
      {
        path: 'login',
        loadComponent: () => import('./features/auth/pages/login-page/login-page.component')
      },
      {
        path: 'register',
        loadComponent: () => import('./features/auth/pages/register-page/register-page.component')
      }
    ]
  },
  // error pages
  {
    path:'**',
    loadComponent: () => import('./features/error/not-found-error.component'),
    title:'PerfectMatch - Página no encontrada'
  },
];
