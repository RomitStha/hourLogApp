const client = require("../Database/database");
const asyncWrapper = require("../middlewares/async");
const { createCustomError } = require("../errors/custom-error");

const createUsers = asyncWrapper(async (req, res) => {
  const user = req.body;
  let insertQuery = `INSERT into users(id,email, firstname,lastname, createdat) 
                       values('${user.id}','${user.email}', '${user.firstname}','${user.lastname}','${user.createdat}')`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Insertion was successful");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

const getAllUsers = asyncWrapper(async (req, res) => {
  client.query("SELECT * from users", (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
  client.end;
});


const getUser = asyncWrapper(async (req, res, next) => {
  let insertQuery = `SELECT * from users where id=${req.params.id} `;
  client.query(insertQuery, (err, result) => {
      
    if (result.rowCount == 0) {
        res.status(404).send(`No user with id: ${req.params.id}`)
    // return next(createCustomError(`No user with id: ${req.params.id}`, 404));

    } else {
      res.send(result.rows);

    }
  });
  client.end;
});


const updateAdmin = asyncWrapper(async (req, res, next) => {
  const user = req.body;
  let insertQuery = `UPDATE admin
    SET name = '${user.name}'
    WHERE id = '${user.id}`;
  client.query(insertQuery, (err, result) => {
    if (result.rowCount == 0) {
        res.status(404).send(`No user with id: ${req.params.id}`)
     } else {
      console.log(result.rows);
    }
  });
  client.end;
});


const createAdmin = asyncWrapper(async (req, res) => {
  const user = req.body;
  let insertQuery = `INSERT into admin(id,name)
                       values('${user.id}','${user.name}')`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Insertion was successful");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});


const getAllAdmins = asyncWrapper(async (req, res) => {
  let insertQuery = "SELECT * from admin";
  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
  client.end;
});


const getAdmin = asyncWrapper(async (req, res) => {
  let insertQuery = `SELECT * from admin where id=${req.params.id} `;
  client.query(insertQuery, (err, result) => {
    if (result.rowCount == 0) {
        res.status(404).send(`No user with id: ${req.params.id}`)
  

    } else {
      res.send(result.rows);

    }
  });
  client.end;
});


module.exports = {
  getAdmin,
  getAllAdmins,
  createAdmin,
  getAllUsers,
  getUser,
  createUsers,
  updateAdmin,
};
