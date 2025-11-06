const express = require("express");
(app = express()), (port = 3000), (path = require("path")),
userRouter = require('./routes/user'),
productRouter = require('./routes/product');

app.use(express.json());


const { connnectToDatabase, getDB } = require("./utils/db");
let db;
connnectToDatabase((err) => {
  if (!err) {
    app.listen(port, () => {
      

      console.log(`Server is running on http://localhost:${port}`);
      db = getDB();
    });
  }else{
    console.log("Failed to connect to database. Server not started. " + err);
  }
});

// app.use('/user',userRouter);
// app.use('/product',productRouter);

app.get('/users', (req, res) => {
  
  db.collection('users').find().toArray()
    .then(users => {
      res.json({ con: true, msg: "User List", result: { data: users } });
    })
    .catch(err => {
      res.json({ con: false, msg: "Error fetching users", error: err });
    });
});

