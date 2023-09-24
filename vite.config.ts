import path from 'path';
import { defineConfig } from 'vite';

import svgr from '@svgr/rollup';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
    plugins: [react(), svgr()],
    server: {
        port: 3000,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
        extensions: ['.js', '.ts', '.tsx', '.json'],
    },
});
