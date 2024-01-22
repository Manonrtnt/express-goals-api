// Import des modules
const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

// Couleur dans la console
const colors = require('colors')

// Connexion à MongoDB
const connectDB = require('./config/db')
connectDB()

// Initialisation d'Express
const app = express()

// Accepter les données envoyées par formulaire
app.use(express.json())
app.use(express.urlencoded({extended : true}))

// importer route / require possible car export défini dans le fichier goalRoute.js
app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

// Lancement du serveur
app.listen(port, () => {
    console.log(`Server started on ${port}`)
})



// ARCHIVES

// Routes
// app.get('/api/goals', (req, res) => {
//     res.send('Get goals')
// })

// Envoyer du json
// app.get('/api/json', (req, res) => {
//     res.json({ message: 'Get goals' })
// })