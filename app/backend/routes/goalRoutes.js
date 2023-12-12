// Récupérer express
const express = require('express')
// Récupérer router
const router = express.Router()

// récupérer méthode du controller; 
const {
    getGoals,
    addGoal,
    updateGoal,
    deleteGoal,
    getGoalsById
} = require('../controllers/goalController')

// Ajouter les méthode récupérer pour chaque route. 
router.get('/', getGoals)
router.get('/:id', getGoalsById)
router.post('/', addGoal)
router.put('/:id', updateGoal)
router.delete('/:id', deleteGoal)


// Utilsier cet objet router dans d'autres fichiers
// Ici dans server.js
module.exports = router