const express  = require('express');
const router = express.Router();
const controllers = require('../controllers/user');






router.get('/',controllers.all);
router.post('/',controllers.add);
router.patch('/',controllers.edit);
router.delete('/:id',controllers.deleteUser);



module.exports = router;
