const express = require('express');
const router = express.Router();

const stuffController = require('../controllers/stuff')
const auth = require('../controllers/auth')
/* Total route should be /api/stuff/   */

router.post('/', auth, stuffController.createThing);

router.put('/:id', auth, stuffController.modifyThing);

router.delete('/:id', auth, stuffController.deleteThing);

router.get('/', auth, stuffController.getAllThings);

router.get('/:id', auth, stuffController.getOneThing)

module.exports = router;