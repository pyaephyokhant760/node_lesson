const express = require('express');
const router = express.Router();
const controllers = require('../controllers/product');


router.get('/',controllers.all);
router.post('/',controllers.add);
router.patch('/:age',controllers.edit);
router.delete('/:age',controllers.deleteProduct);




module.exports = router;