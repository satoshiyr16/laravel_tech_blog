import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.jsx'
            ],
            refresh: true,
        }),
        react()
    ],
    esbuild: {
        loader: 'jsx'
    },
    server: {
        host: '0.0.0.0',
        port: 5173,
    },
    resolve: {
        alias: {
            '@css': path.resolve(__dirname, 'resources/css'),
            '@components': path.resolve(__dirname, 'resources/js/components')
        }
    }
});
