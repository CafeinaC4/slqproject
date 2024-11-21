const express = require('express')
const cors = require('cors')
const { Pool } = require('pg')

const app = express()
const pool = new Pool({

    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'senai',
    database: 'cadastroUsername',

})

app.use(cors())
app.use(express.json())
app.listen(3000, () => {
    console.log('Server ta rodando')
})