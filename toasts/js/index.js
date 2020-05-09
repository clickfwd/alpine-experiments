import { registerComponents } from './utils.js'
import './store.js'

;(() => {
    registerComponents({
        toastButtons: './components/toast-buttons.js',
        toasts: './components/toasts.js',
    })

    import('https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js')
})()