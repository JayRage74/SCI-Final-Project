let Event = require ('../models/event')


module.exports.create = (req, res) =>{
let event = new Event(req.body);
event.save((err,result)=>{
  res.json(result);
});
  console.log(req.body);
}

module.exports.list = (req, res) =>{
  Event.find({}, (err, results)=>{
    res.json(results);
  })
}
