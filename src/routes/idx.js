const express = require ('express');
const router = express.Router();

const controlador = require ('../controllers/contolador');

router.get('/', controlador.get);
router.post('/add', controlador.post  ) ;
router.get('/delete/:codigo', controlador.delete );
router.get('/up/:codigo', controlador.up);
router.post('/up/:codigo', controlador.put);
module.exports = router;