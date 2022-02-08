const express = require('express')
const cors = require('cors')
const axios = require('axios')

const route = express()

route.use(cors({ origin: true }))

route.get('/ping', (req, res) => {
    res.status(200).send({
        "sucess": true
    })
})

route.get('/posts', async (req, res) => {

    try {

        if (req.query.tag === undefined || req.query.tag === null) {
            return res.status(400).send({ "error": "Tags parameter is required." })
        }
        if (["id", 'reads', 'likes', 'popularity'].includes(req.query.sortBy) === false) {
            return res.status(400).send({ "error": "sortBy parameter is invalid." })
        }
        if (['asc', 'desc'].includes(req.query.direction) === false) {
            return res.status(400).send({ "error": "Direction parameter is invalid." })
        }

        const result = await axios({
            method: 'get',
            url: 'https://api.hatchways.io/assessment/blog/posts',
            params: req.query
        })
            .then((resp) => {
                return resp.data
            })
            .catch((err) => {
                throw {
                    'status': err.response.status,
                    'data': err.response.data
                }
            })
        res.send(result)

    } catch (err) {
        throw err
    }
})

module.exports = route