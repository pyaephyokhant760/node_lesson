const express = require("express");
(app = express()), (port = 3000), (path = require("path"));


app.use(express.json());


const { connnectToDatabase } = require("./utils/db");

const init = () => {
  app.listen(port, () => {
    console.clear();
    console.log(`Server is running on http://localhost:${port}`);
  });
  const userRouter = require('./routes/user');
  const productRouter = require('./routes/product');

  app.use('/user', userRouter);
  app.use('/product', productRouter);
  
}

connnectToDatabase((err) => {
  if (!err) {
    init();
  } else {
    console.log("Failed to connect to database. Server not started. " + err);
  }
});



