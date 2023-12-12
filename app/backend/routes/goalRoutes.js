// Récupérer express
const express = require('express')

// Récupérer router
const router = express.Router()

// Route - goal
router.get('/', (req, res) => {
    res.json({ message: 'Get goals' })
})

// Add 
router.post('/', (req, res) => {
    res.json({ message: 'Add goal' })
})

// Modifier 
router.put('/:id', (req, res) => {
    res.json({ message: `Update goal ${req.params.id}` })
})

// Supprimer 
router.delete('/:id', (req, res) => {
    res.json({ message: `Delete goal ${req.params.id}` })
})

// Utilsier cet objet router dans d'autres fichiers
// Ici dans server.js
module.exports = router