import express from "express";
import employeesRoutes from './routes/employees.routes.js';
import indexRoutes from './routes/index.routes.js';

const app = express()

app.use(express.json())

app.use(indexRoutes)
app.use('/api',employeesRoutes)

app.listen(3010)
console.log('server running on port 3010')