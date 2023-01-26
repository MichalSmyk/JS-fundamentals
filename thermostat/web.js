const express = require('express');
const Thermostat = require('./thermostat');
const app = express();
const port = 3000;
const thermostat = new Thermostat


app.get('/temperature', (req, res) => {
    res.send({"temperature": `${thermostat.getTemperature()}`});
});

app.post('/up', (req, res) => {
    res.send({"temperature": `${thermostat.up()}`})
});

app.post('/down', (req, res) => {
    res.send({"temperature": `${thermostat.down()}`})
});

app.delete('/temperature', (req, res) => {
    thermostat.reset();
    res.send({"temperature": `${thermostat.getTemperature()}`})
});


console.log(`Server listening on localhost:${port}`);
app.listen(port);