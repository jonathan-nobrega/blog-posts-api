const express = require('express')
const cors = require('cors')

const route = express()
route.use(cors({origin: true}))

route.get('/', async (req, res) => {
    try {
        res.status(200).send('ok')
    } catch {
        res.status(400).send('not ok')
    }
})

module.exports = route