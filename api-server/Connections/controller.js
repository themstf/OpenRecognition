const connections = require('./model');

const controller = {};

// routes =>

/* ------------------- INDEX -------------------*/
// GET  "/"                     => greetings

controller.welcome = (req, res) => {
  console.log("-- GET /all --");
  res.send("hi, you're at the authors api");
}

/* ------------------- INDEX -------------------*/
// GET  "/all"                     => show all authors

controller.get_all = (req, res) => {
  console.log("-- GET /all --");
  connections.find()
    // modify the next line based on your project's needs
    .then((db_response) => { res.send(db_response) })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
}

/* ------------------- CREATE -------------------*/
// GET  "/add"                => instructions
// POST "/add"                => Create new authors

controller.get_add = (req, res) => {
    console.log("-- GET /add --");
    res.send('put a new author\'s name in the body and send a post request to this address: { first_name: "string" }. you\'ll get back the new author\'s entry');
}

controller.post_add = (req, res) => {
    console.log("-- POST /add --");
    const new_friendrequesting = req.body.friendrequesting;
    const new_frendshiprecieving = req.body.frendshiprecieving;
    const new_daterequesting = req.body.daterequesting;
    const new_dateapproving = req.body.dateapproving;
    const new_daterejecting = req.body.daterejecting;
    const new_active = req.body.active;
    const new_user1approval= req.body.user1approval;
    const new_user2approval= req.body.user2approval;
    const new_connection = { friendrequesting: new_friendrequesting,frendshiprecieving:new_frendshiprecieving,daterequesting: new_daterequesting,
      dateapproving:new_dateapproving,daterejecting:new_daterejecting,active:new_active,user1approval:new_user1approval,user2approval:new_user2approval};
    connections.create(new_connection)
      // modify the next line based on your project's needs
      .then((db_response) => { res.send(db_response) })
      .catch((err) => {
        res.status(500).send({
          message: err.message
        });
      });
}


/* ------------------- READ -------------------*/
// GET  "/:id"             => View authors Info with id ...


controller.get_id = (req, res) => {
    const connection_id = req.params.id;
    console.log("-- GET /"+profile_id+" --");
    const id_object = { _id: profile_id };
    connections.find(id_object)
      // modify the next line based on your project's needs
      .then((db_response) => { res.send(db_response) })
      .catch((err) => {
        res.status(500).send({
          message: err.message
        });
      });
}



/* ------------------- UPDATE -------------------*/
// GET  "/:id/update"     => instructions
// POST "/:id/update"     => update authors with id...


controller.get_id_update = (req, res) => {
    const connection_id = req.params.id;
    console.log("-- GET /"+connection_id+"/update --");
    res.send('send a post request to this address a first_name in the body');
}

controller.post_id_update = (req, res) => {
    const connection_id = req.params.id;
    console.log("-- POST /"+connection_id+"/update --");
    const id_object = { _id: connection_id };
    const friendrequesting = req.body.friendrequesting;
    const frendshiprecieving = req.body.frendshiprecieving;
    const daterequesting = req.body.daterequesting;
    const dateapproving = req.body.dateapproving;
    const daterejecting = req.body.daterejecting;
    const active = req.body.active;
    const user1approval = req.body.user1approval;
    const user2approval = req.body.user2approval;

    const name_object = {
      friendrequesting: friendrequesting ,
      frendshiprecieving:frendshiprecieving,
      daterequesting:daterequesting,
      emadateapprovingil:dateapproving,
      daterejecting: daterejecting,
      active: active,
      user1approval: user1approval
      user2approval: user2approval
    };

    connections.update(id_object, name_object)
      // modify the next line based on your project's needs
      .then((db_response) => { res.send(db_response) })
      .catch((err) => {
        res.status(500).send({
          message: err.message
        });
      });
}

/* ------------------- DELETE -------------------*/
// GET  "/:id/delete"     => instructions
// POST "/:id/delete"     => delete authors with id...


controller.get_id_delete = (req, res) => {
    const connection_id = req.params.id;
    console.log("-- GET /"+connection_id+"/delete --");
    res.send('send a post request to this address with an author ID, it will be deleted');
}

controller.post_id_delete = (req, res) => {
    const connection_id = req.params.id;
    console.log("-- POST /"+connection_id+"/delete --");
    const id_object = { _id: connection_id };
    connections.remove(id_object)
      // modify the next line based on your project's needs
      .then((db_response) => { res.send(db_response) })
      .catch((err) => {
        res.status(500).send({
          message: err.message
        });
      });
}


module.exports = controller;
