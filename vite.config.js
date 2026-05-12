import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
	base: '/',
	plugins: [react(), tailwindcss()],
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				landing: resolve(__dirname, 'landing/index.html'),
			},
		},
	},
	server: {
		allowedHosts: ['dev.costaweb.com.br']
	}
})
