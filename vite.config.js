import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

const manifestForPlugin = {
	"name": "Weather Ups",
	"short_name": "Weather Ups",
	"description": "An app that can show weather forecast for your city.",
	"icons": [
		{
			"src": "/android-chrome-192x192.png",
			"sizes": "192x192",
			"type": "image/png",
			"purpose": "monochrome"
		},
		{
			"src": "/android-chrome-512x512.png",
			"sizes": "512x512",
			"type": "image/png",
			"purpose": "any"
		},
		{
			"src": "/apple-touch-icon.png",
			"sizes": "180x180",
			"type": "image/png",
			"purpose": "any"
		},
		{
			"src": "/maskable_icon.png",
			"sizes": "225x225",
			"type": "image/png",
			"purpose": "maskable"
		}
	],
	"theme_color": "#171717",
	"background_color": "#e8ebf2",
	"display": "standalone",
	"scope": "/",
	"start_url": "/",
	"orientation": "portrait"
}

//vitejs.dev/config/
export default defineConfig({
  base:'./',
  plugins: [react(),   
    VitePWA({
       registerType: 'autoUpdate',
       injectRegister: 'auto' 
      })],
})