// Import des modules
const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

// Initialisation d'Express
const app = express()

// Routes
// app.get('/api/goals', (req, res) => {
//     res.send('Get goals')
// })
// importer route / require possible car export défini dans le fichier goalRoute.js
app.use('/api/goals', require('./routes/goalRoutes'))

// Envoyer du json
// app.get('/api/json', (req, res) => {
//     res.json({ message: 'Get goals' })
// })

// Lancement du serveur
app.listen(port, () => {
    console.log(`Server started on ${port}`)
})