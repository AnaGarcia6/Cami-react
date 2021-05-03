const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
var mainRoutes = require('./app/routes/main.js');

app.use(express.static('public'))

router.get('/',function(req,res){
    console.log(__dirname)
  res.sendFile(path.join(__dirname+'/public/views/index.html'));
  //__dirname : It will resolve to your project folder.
});

//add the router
app.use('/', router);
app.use('/main', mainRoutes);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');