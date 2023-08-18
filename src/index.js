import app from './app'
import './database/connection' //Para probar la conexion 

app.listen(app.get('port'))

console.log('Server on port', app.get('port'))