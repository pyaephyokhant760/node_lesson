const express = require('express');
const router = express.Router();
const controllers = require('../controllers/product');


router.get('/',controllers.all);
router.post('/',controllers.add);
router.patch('/:name',controllers.edit);
router.delete('/:name',controllers.deleteProduct);
router.get('/aggre',controllers.aggre);




module.exports = router;