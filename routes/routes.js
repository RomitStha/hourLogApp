const express = require('express');
const router = express.Router()

const candidateController = require('../controller/candidateController')

router.post('/candidateCreate',candidateController.insert)

module.exports =router