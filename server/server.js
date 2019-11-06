const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;


// we tell it to use the public directory to load all the assets css
app.use(express.static(publicPath));

// if what user requested (get requests) is not in the public folder then route the request to index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
    console.log("get request");
});

// for local devices 3000 n for dynmic url we need the port that heroku provides us
app.listen(port, () => {
    console.log("server is up!");
    // console.log(__dirname);
});

// heroku : we have to tell heroku to how to run our app
// the start cmd in the package.json file 
// let's the heroku run the server file to run our app 
// bacuse heroku always reads the start cmd from the pckg.json file 
// heroku : we also have to tell heroku to how to run webpack to create bundle.js files
//  becuase if heroku doesn't run webpack none of the assets- styles.css, bumdle.map files would exist
