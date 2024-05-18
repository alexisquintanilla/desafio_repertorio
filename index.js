import 'dotenv/config'
import express from 'express'

import Cancionesrouter from './router/cancion.router.js'

const app = express()

const __dirname = import.meta.dirname


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))


app.use('/', Cancionesrouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('SERVIDOR ACTIVO EN PORT :' + PORT)
})