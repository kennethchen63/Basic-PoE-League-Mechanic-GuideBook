const asyncHandler = require("express-async-handler");

const Goal = require("../Models/goalModel");
const User = require("../Models/userModel");

// Get Goals
// GET /api/goals
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });

  res.status(200).json(goals);
});

// Set Goals
// POST /api/goals
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id,
  });

  res.status(200).json(goal);
});

// Update Goals
//  PUT /api/goal/:id
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById({ user: req.user.id });

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  // Checks for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Makes sure the logged in user matches the goal's user
  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedGoal);
});

// Delete Goals
// DELETE /api/goal/:id
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  // Checks for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Makes sure the logged in user matches the goal's user
  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await goal.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
