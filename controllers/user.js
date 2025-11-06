let user = [
    { name: "Pyae Phyo Khant", age: 10, salary: 1000, isSingle: true },
    { name: "Aung Aung", age: 20, salary: 2000, isSingle: true },
    { name: "Tun Tun", age: 30, salary: 3000, isSingle: true },
    { name: "Su Su", age: 40, salary: 4000, isSingle: true },
]



const all = (req,res) => {
    res.json({ con: true, msg: "User Route", result: { data: user } });
}

const add = (req,res) => {
    let newUser = req.body;
    user.push(newUser);
    res.json({ con: true, msg: "User Added", result: { data: user } });
}

const edit = (req,res, next) => {
    let name = req.body.name;
  let salary = Number(req.body.salary);
  let users = user.find(s => s.name === name);
  if(user) {
    users.salary = salary;
    res.json({con:true,msg:"User Updated",result:{data:user}})
  }else{
    next(new Error("no found"));
  }
}

const deleteUser = (req,res, next) => {
    let name = req.params.name;
  let userIndex = user.find(s => s.name === name);
  if(userIndex) {
    user = user.filter(s => s.name != userIndex.name);
    res.json({con:true,msg:"User Deleted",result:{data:user}});
  }else{
    next(new Error("no found"));
  }
}
module.exports = { all, add, edit, deleteUser };