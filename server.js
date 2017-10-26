let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let eventsController = require('./controllers/events-controller');



mongoose.connect('mongodb://localhost:27017/SCI-Final-Project');

app.use(bodyParser());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/ngApp/views/index.html')
});

app.use('/ngApp', express.static(__dirname + '/ngApp'));

app.get('/api/events', eventsController.list);
app.post('/api/events', eventsController.create);



let port = 3333;
app.listen(port, () => {
  console.log("App listening on port" + port);
});
