var Vurser = require("../models/Vurser");
var Song = require("../models/Song");

module.exports = {
  show:  show,
  showCurrentUser: showCurrentUser
};


function show(req, res, next) {
  Vurser.findById(req.params.id, function(error, Vurser){
    if (error) res.json({message: 'Could not find Vurser because ' + error});
    res.render('Vursers/show', {Vurser: Vurser});
  });
};

function showCurrentUser(req, res, next) {
  if (!req.isAuthenticated()) {
    res.status(403).send("User not logged in!");
  } else {
    Vurser
      .findById(req.user._id)
      .populate("playlists.songs")
      .exec(function(err, user) {
        if (err) {
          res.send(err);
        } else {
          res.json(user);
        }
      });
  }
}
