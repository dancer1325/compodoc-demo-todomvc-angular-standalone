import { Routes } from '@angular/router';

/**
 * About Routing module
 *
 * Exposing just two routes, one for Compodoc, the other one for TodoMVC
 */
export default <Routes>[
    {
        path: '',
        loadComponent: () => import('./about.component'),
        children: [
            { path: '', redirectTo: 'todomvc', pathMatch: 'full' },
            {
                path: 'todomvc',
                loadComponent: () =>
                    import('./todomvc/todomvc.component').then(
                        (m) => m.TodoMVCComponent
                    ),
            },
            {
                path: 'compodoc',
                loadComponent: () =>
                    import('./compodoc/compodoc.component').then(
                        (m) => m.CompodocComponent
                    ),
            },
        ],
    },
];
