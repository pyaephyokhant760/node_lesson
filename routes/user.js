const express  = require('express');
const router = express.Router();
const controllers = require('../controllers/user');




// router.get('/',(req,res) => {
//   res.json({con:true,msg:"User Route",result:{data:user}});
// })

router.get('/',controllers.all);
router.post('/',controllers.add);
router.patch('/',controllers.edit);
router.delete('/:name',controllers.deleteUser);

// router.post('/',(req,res) => {
//   let newUser = req.body;
//   user.push(newUser);
//   res.json({con:true,msg:"User Added",result:{data:user}});
// })

// router.patch('/',(req,res,next) => {
//   let name = req.body.name;
//   let salary = Number(req.body.salary);
//   let user = user.find(s => s.name === name);
//   if(user) {
//     user.salary = salary;
//     res.json({con:true,msg:"User Updated",result:{data:user}})
//   }else{
//     next(new Error("no found"));
//   }
// })

// router.delete('/:name', (req, res, next) => {
//   let name = req.params.name;
//   let userIndex = user.find(s => s.name === name);
//   if(userIndex) {
//     user = user.filter(s => s.name != userIndex.name);
//     res.json({con:true,msg:"User Deleted",result:{data:user}});
//   }else{
//     next(new Error("no found"));
//   }
// })

module.exports = router;
