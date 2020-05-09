import { buildComponent } from '../utils.js'

const data = {
    classes: {
        info: 'rounded flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3 border-2 border-blue-600',
        success: 'rounded flex items-center bg-green-600 text-white text-sm font-bold px-4 py-3 border-2 border-green-700',
        error: 'rounded flex items-center bg-red-600 text-white text-sm font-bold px-4 py-3 border-2 border-red-700',
    }
}

export default buildComponent(data)