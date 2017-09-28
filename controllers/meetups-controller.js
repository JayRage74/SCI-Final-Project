let Meetup = require ('../models/meetup')


module.exports.create = (req, res) =>{
let meetup = new Meetup(req.body);
meetup.save((err,result)=>{
  res.json(result);
});
  console.log(req.body);
}

module.exports.list = (req, res) =>{
  Meetup.find({}, (err, results)=>{
    res.json(results);
  })
}
