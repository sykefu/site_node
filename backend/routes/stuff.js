const express = require('express');
const router = express.Router();

const stuffController = require('../controllers/stuff');
const auth = require('../controllers/auth');
const multer = require('../controllers/multer-config');
/* Total route should be /api/stuff/   */

router.post('/', auth, multer, stuffController.createThing);

router.put('/:id', auth, multer, stuffController.modifyThing);

router.delete('/:id', auth, stuffController.deleteThing);

router.get('/', auth, stuffController.getAllThings);

router.get('/:id', auth, stuffController.getOneThing)

module.exports = router;