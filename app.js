const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'views', 'css')));

app.get('/', (req, res) => {
    fs.readFile('data.json', (err, result) => {
        if(err) res.send(err);
        const data = JSON.parse(result);
        const navbar = data.navbar;
        const categories = data.categories;
        const deals = data.deals;
        const instruments = data.instruments;

        res.render('index', {navbar, categories, deals, instruments});
    })
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Application is running on port ${PORT}`);
});