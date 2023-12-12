const getGoals = (req, res) => {
    res.json({ message: 'Get goals' })
}
const addGoal = (req, res) => {
    res.json({ message: 'Add goal' })
}
const updateGoal = (req, res) => {
    res.json({ message: `Update goal ${req.params.id}` })
}
const deleteGoal = (req, res) => {
    res.json({ message: `Delete goal ${req.params.id}` })
}

module.exports = {
    getGoals,
    addGoal,
    updateGoal,
    deleteGoal
}
