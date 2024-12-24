'use strict';

const express = require('express');
var cors = require('cors');
const app = express();
app.use(cors());

let categories = ['funnyJoke', 'lameJoke'];

let funnyJoke = [
  { 'joke': 'Dlaczego komputer poszedł do lekarza?', 'response': 'Bo złapał wirusa!' },
  { 'joke': 'Dlaczego komputer nie może być głodny?', 'response': 'Bo ma pełen dysk!' },
  { 'joke': 'Co mówi jeden bit do drugiego?', 'response': '„Trzymaj się, zaraz się przestawiamy!”' }
];

let lameJoke = [
  { 'joke': 'Dlaczego programiści preferują noc?', 'response': 'Bo w nocy jest mniej bugów do łapania!' },
  { 'joke': 'Jak nazywa się bardzo szybki programista?', 'response': 'Błyskawiczny kompilator!' }
];

// API endpoints for jokes
app.get('/jokebook/categories', (req, res) => {
  return res.json(categories);
});

app.get('/jokebook/joke/:category', (req, res) => {
  const category = req.params.category;
  if (!categories.includes(category)) {
    return res.json({ 'error': `no jokes for category ${category}` });
  }
  
  let jokeList = category === 'funnyJoke' ? funnyJoke : lameJoke;
  const randomJoke = jokeList[Math.floor(Math.random() * jokeList.length)];
  return res.json(randomJoke);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
