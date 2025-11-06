
const db = require('../utils/db').getDB();

const all = (req, res) => {
  db.collection('users').find().toArray()
    .then(users => {
      res.json({ con: true, msg: "User List", result: { data: users } });
    })
    .catch(err => {
      res.json({ con: false, msg: "Error fetching users", error: err });
    });
}

const add = (req, res) => {
  let userData = req.body;
  userData.created = new Date();
  db.collection('users').insertOne(userData)
    .then(result => {
      res.status(201).json({ con: true, msg: "User added successfully", result: { data: result } });
    })
    .catch(err => {
      res.status(500).json({ con: false, msg: "Error adding user", error: err });
    });
}

const edit = (req, res, next) => {
  let name = req.body.name;
  let salary = Number(req.body.salary);
  let users = user.find(s => s.name === name);
  if (user) {
    users.salary = salary;
    res.json({ con: true, msg: "User Updated", result: { data: user } })
  } else {
    next(new Error("no found"));
  }
}

const deleteUser = (req, res, next) => {
  let name = req.params.name;
  let userIndex = user.find(s => s.name === name);
  if (userIndex) {
    user = user.filter(s => s.name != userIndex.name);
    res.json({ con: true, msg: "User Deleted", result: { data: user } });
  } else {
    next(new Error("no found"));
  }
}
module.exports = { all, add, edit, deleteUser };