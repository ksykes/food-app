const express = require('express')
const Router = express.Router
const router = Router()
const Provider = require('../models/Provider')

router.get('/', async (req, res, next) => {
    try {
        const docs = await Provider.find()
        res.status(200).send({
            data: docs
        })
    } catch (e) {
        next(e)
    }
})

router.get('/:provider_id', async (req, res, next) => {
    try {
        const { provider_id } = req.params
        const doc = await Provider.findById(provider_id)
        res.status(200).send({
            data: doc
        })
    } catch (e) {
        next(e)
    }
})

module.exports = router