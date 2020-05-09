import { buildComponent } from '../utils.js'

const data = {
    dismissible: true,
    message: '',
    interval: '',
}

const methods = {
    info() {
        $store.toasts.info(this.message, { dismissible: this.dismissible })
    },
    success() {
        $store.toasts.success(this.message, { dismissible: this.dismissible })
    },
    error() {
        $store.toasts.error(this.message, { dismissible: this.dismissible })
    }
}

export default buildComponent(data, methods)