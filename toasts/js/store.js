import Spruce from 'https://cdn.jsdelivr.net/gh/ryangjchandler/spruce@0.x.x/dist/spruce.module.js'

Spruce.store('toasts', {
    toasts: [],
    show(message, { type, dismissible = true, interval = 5000 }) {
        this.toasts = this.toasts.concat([{ message, type, dismissible }])

        setTimeout(() => {
            this.dismiss(this.toasts.length - 1)
        }, 5000)
    },
    info(message, options) {
        this.show(message, { type: 'info', ...options })
    },
    success(message, options) {
        this.show(message, { type: 'success', ...options })
    },
    error(message, options) {
        this.show(message, { type: 'error', ...options })
    },
    dismiss(index) {
        this.toasts = this.toasts.filter((toast, i) => {
            return index !== i
        })
    }
})

export default Spruce