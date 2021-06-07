const express = require('express');

const Routes = express.Router({
  mergeParams: true,
});

Routes.get('/', (req, res) => {
  res.status(200).json({ message: 'successful' });
});

module.exports = { Routes };
