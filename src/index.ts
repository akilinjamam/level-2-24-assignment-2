import app from './app'
import config from './app/config/index'
import connection from './app/database_configuration'

const PORT = config.port || 4000

connection

app.listen(PORT, () => {
  console.log(`app is listening to port ${PORT}. http://localhost:${PORT}`)
})
