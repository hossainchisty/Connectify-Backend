const express = require('express');
const router = express.Router();
const { consumerList, createConsumer, modifyConsumer, deleteConsumer } = require('./consumer.controller');

router.get('/', consumerList);
router.post('/', createConsumer);
router.put('/:id', modifyConsumer);
router.delete('/:id', deleteConsumer);

module.exports = router;
