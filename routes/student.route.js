const express = require ('express')
const router = express.Router()
const studentController = require('../controllers/student.controllers')

router.get('/', studentController.index)
router.post('/', studentController.store)
router.put('/:id', studentController.update)
router.get('/:id', studentController.detail)
router.delete('/:id', studentController.destroy)

module.exports = router