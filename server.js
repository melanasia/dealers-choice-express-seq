const express = require('express');
const app = express();
const {Dive, init} = require('./database.js');

app.use(express.static('public'));

app.get('/', async (req, res) => {
    
    const dives = await Dive.findAll()
    
    res.send(`
        <html>
          <head>
            <title>Best Diving Locations in the World</title>
            <link rel='stylesheet' href='/style.css' />
          </head>
          <body>
            <h1 id='title'>Best Dives in the World</h1>
              <div id='wrapper'>
                <ul>
                ${dives.map(dive => {
                    return `<div class='dives'><a href='/dive/${dive.id}'
                      <li class='divename'>${dive.name}</a></li>
                      <li>${dive.location}</li> 
                      <li>${dive.bestTime}</li></div>`
                }).join('')}
                </ul>
              </div>
          </body>
        </html>
    `)
})

const start = async () => {
  await init();
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`listening on port ${port}`));
};
start();

// need to finish adding routes
