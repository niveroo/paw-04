'use strict';

const express = require('express');
const app = express();

// define endpoint for exercise 1 here
app.get('/math/circle/:r', (req, res) => {
  const radius = parseFloat(req.params.r)

  const area = Math.PI * Math.pow(radius, 2);
  const circumference = 2 * Math.PI * radius;

  const result = {
    radius: radius,
    area: area,
    circumference: circumference
  };

  res.json(result);
});

app.get('/math/rectangle/:width/:height', (req, res) => {
  const width = parseFloat(req.params.width);
  const height = parseFloat(req.params.height);

  const area = width * height;
  const perimeter = (width + height) * 2;

  const result = {
    area: area,
    perimeter: perimeter
  }
  res.json(result);
});

app.get('/math/power/:base/:exponent', (req, res) => {
  const base = parseFloat(req.params.base);
  const exponent = parseFloat(req.params.exponent);

  let result = Math.pow(base, exponent);

  if (req.query.root === 'true') {
    const rootResult = Math.sqrt(base);
    return res.json({ root: rootResult });
  }

  return res.json({ result });
});


//TODO2


//TODO3


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});