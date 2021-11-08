const express = require('express')

const app = express()

const port = process.env.port || 5500

app.listen(port,()=>console.log(`App started at the port ${port}`))