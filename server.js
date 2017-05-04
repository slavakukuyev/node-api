const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Hello API');
});

app.listen(3012, () => {
    console.log('API app started');
});

let artists = [
    {
        id  : 1,
        name: 'Metallica',
    },
    {
        id  : 2,
        name: 'Iron Maiden',
    },
    {
        id  : 3,
        name: 'Deep Purple',
    },
];

app.get('/artists', (req, res) => {
    res.send(artists);
});

app.post('/artists', (req, res) => {
    let artist = {
        id  : Date.now(),
        name: req.body.name,
    };

    artists.push(artist);
    res.send(artist);
});

app.put('/artists/:id', (req, res) => {
    let artist  = artists.find(artist => artist.id === Number(req.params.id));
    artist.name = req.body.name;
    res.send(artist);
});

app.get('/artists/:id', (req, res) => {
    let artist = artists.find(artist => artist.id === Number(req.params.id));
    console.log(artist);
    res.send(artist);
});

app.delete('/artists/:id', (req, res) => {
    artists = artists.filter(artist => artist.id !== Number(req.params.id));
    res.sendStatus(200);
});

