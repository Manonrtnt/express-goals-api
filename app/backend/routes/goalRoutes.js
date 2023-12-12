// Récupérer express
const express = require('express')

// Récupérer router
const router = express.Router()

// Route - goal
router.get('/', (req, res) => {
    res.send('Get goals')
})

// Utilsier cet objet router dans d'autres fichiers
// Ici dans server.js
module.exports = router