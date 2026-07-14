// Este archivo inicia el servidor Express y arranca la API en el puerto configurado.
import server from './server'
import colors from 'colors'

const port = process.env.PORT || 4000

server.listen(port, () => {
    console.log(colors.cyan.bold(`REST API esta funcionando en el puerto ${port}`))
})