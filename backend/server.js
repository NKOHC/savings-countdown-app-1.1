const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// 模拟数据库
let savingsGoal = 0;
let currentSavings = 0;
let endDate = '';

app.post('/api/savings-goal', (req, res) => {
  savingsGoal = req.body.goal;
  res.json({ message: 'Savings goal updated', goal: savingsGoal });
});

app.post('/api/current-savings', (req, res) => {
  currentSavings = req.body.savings;
  res.json({ message: 'Current savings updated', savings: currentSavings });
});

app.post('/api/end-date', (req, res) => {
  endDate = req.body.date;
  res.json({ message: 'End date updated', date: endDate });
});

app.get('/api/savings-info', (req, res) => {
  res.json({ savingsGoal, currentSavings, endDate });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
