import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'



//vitejs.dev/config/
export default defineConfig({
  base:'./',
  plugins: [react(),   
    VitePWA({
		workbox: {
			runtimeCaching: [
				{
				  urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
				  handler: 'CacheFirst',
				  options: {
					cacheName: 'images',
					expiration: {
					  maxEntries: 30,
					  maxAgeSeconds: 30 * 24 * 60 * 60, 
					},
				  },
				},
				{
					urlPattern: /\.(?:css|js|html)$/,
					handler: 'StaleWhileRevalidate',
					options: {
					  cacheName: 'static-resources',
					},
				  },
			  ],
		},
		includeAssets: [
			"**/*",
		],
		manifest:{
			"name": "billing",
			"short_name": "billing",
			"start_url": "./",
			"display": "standalone",
			"background_color": "#ffffff",
			"lang": "en",
			"scope": "./",
			"icons":[
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
			"orientation": "portrait"
		}
	})],
})
