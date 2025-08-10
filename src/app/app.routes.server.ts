import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
    {
        path: '', // Home page
        renderMode: RenderMode.Client, // CSR
    },
    {
        path: 'about',
        renderMode: RenderMode.Prerender, // SSG
    },
    {
        path: '**',
        renderMode: RenderMode.Prerender
    }
];
