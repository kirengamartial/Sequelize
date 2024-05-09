import express from 'express'
import db from './config/db.js'
import blogRoutes from './routes/blogRoutes.js'

db.authenticate()
.then((res) => console.log(`connected to db successfully`))
.catch((error) => console.log(error))

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use('/blog', blogRoutes)



app.listen(3000, () => console.log('app is listening on port 3000'))