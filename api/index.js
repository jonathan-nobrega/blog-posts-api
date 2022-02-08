const express = require('express')
const cors = require('cors')
const config = require('config')
const router = require('./routes/index.js')
const app = express()

app.use(cors({ origin: true }))

app.use('/api/', router)

app.listen(config.api.port, () => {
    console.log(`Server is running on port ${config.api.port}`)
})




