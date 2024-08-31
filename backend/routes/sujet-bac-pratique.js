const express = require('express');
const router = express.Router();
const sujetBacPratiqueCtrl = require('../controllers/sujet-bac-pratique')

router.get('/', sujetBacPratiqueCtrl.getAllSujets)
router.get('/:id', sujetBacPratiqueCtrl.getSujet)


module.exports = router;