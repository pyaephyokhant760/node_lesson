const { ObjectId } = require('mongodb');

const db = require('../utils/db').getDB();


const all = (req, res) => {
  db.collection('products').find().toArray()
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
  db.collection('products').insertOne(userData)
    .then(result => {
      res.status(201).json({ con: true, msg: "User added successfully", result: { data: result } });
    })
    .catch(err => {
      res.status(500).json({ con: false, msg: "Error adding user", error: err });
    });
}

const edit = (req, res, next) => {
    
    let updateData = req.body;
    let id = ObjectId.createFromHexString(req.params.id);
    db.collection('products').updateOne({ _id:id  }, { $set: updateData })
      .then(result => {
        res.json({ con: true, msg: "Product Updated", result: { data: result } });
      })
      .catch(err => {
        res.status(500).json({ con: false, msg: "Error updating product", error: err });
      });
}

const deleteProduct = (req, res, next) => {
    let id = ObjectId.createFromHexString(req.params.id);
    db.collection('products').deleteOne({ _id: id })
      .then(result => {
        res.json({ con: true, msg: "Product Deleted", result: { data: result } });
      })
      .catch(err => {
        res.status(500).json({ con: false, msg: "Error deleting product", error: err });
      });
};
module.exports = { all, add , edit , deleteProduct };