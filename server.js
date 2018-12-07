//TEMP SERVER: only used for dev. purposes
const express = require('express');
const cors = require('cors');

//backend server
const app = express();
app.use(express.json()); //parse request body as JSON
app.use(cors());

//routes
const temp = (req, res) =>
{
  res.send( {images: ['http://zepereira.rf.gd/media/13669848_815891901878993_8531700867476755603_n.jpg',
  'http://zepereira.rf.gd/media/4.jpg', 'http://zepereira.rf.gd/media/11.png',
  'http://zepereira.rf.gd/media/13.png', 'http://zepereira.rf.gd/media/16.png',
  'http://zepereira.rf.gd/media/18.png', 'http://zepereira.rf.gd/media/2.png',
  'http://zepereira.rf.gd/media/6.png', 'http://zepereira.rf.gd/media/watercolorfaceweb.png',
  'http://zepereira.rf.gd/media/12.gif', 'http://zepereira.rf.gd/media/3.gif',
  'http://zepereira.rf.gd/media/7.gif', 'http://zepereira.rf.gd/media/inkweb.gif']} );
}

//node.js server acts as a proxy to imgur's data
app.get('/*', temp);

//start server
const port = process.env.PORT || 8181;
app.listen(port);
console.log("Server started on port:" + port);