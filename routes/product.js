const express = require('express');
const router = express.Router();
const controllers = require('../controllers/product');


router.get('/',controllers.all);
router.post('/',controllers.add);
router.patch('/:id',controllers.edit);
router.delete('/:id',controllers.deleteProduct);




module.exports = router;