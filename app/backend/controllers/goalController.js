const asyncHandler = require('express-async-handler')
const GoalModel = require('../models/goalModel')

// READ
const getGoals = asyncHandler(async (req, res) => {
    const goals = await GoalModel.find()
    // Chainer plusieurs response. status, json etc. 
    res.status(200).json(goals)
})

// READ
const getGoalsById = asyncHandler(async (req, res) => {
    const goals = await GoalModel.findById(req.params.id)
    // Chainer plusieurs response. status, json etc. 
    res.status(200).json(goals)
})

// CREATE
const addGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field');
    }
    const goal = await GoalModel.create({ text: req.body.text })
    res.status(200).json(goal)
})

// UPDATE
const updateGoal = asyncHandler(async (request, response) => {
    const goal = await GoalModel.findById(request.params.id)
    if (!goal) {
    res.status(400)
    throw new Error('Goal not found')
    }
    const updatedGoal = await GoalModel.findByIdAndUpdate(request.params.id,
    request.body)

    response.status(200).json({goal : `${request.body.text} updated`})
})

// DELETE
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await GoalModel.findById(req.params.id)
    if (!goal) {
    res.status(400)
    throw new Error('Goal not found')
    }
    
    const deletedGoal = await GoalModel.findByIdAndDelete(req.params.id)
    res.status(200).json(deletedGoal)
})


module.exports = {
    getGoals,
    addGoal,
    updateGoal,
    deleteGoal,
    getGoalsById
}

