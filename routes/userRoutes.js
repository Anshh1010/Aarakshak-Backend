const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/:badgeID', userController.getUserByBadgeID);
router.get('/:badgeID/current-session', userController.getCurrentSession);
router.post('/:badgeID/current-session', userController.createIssueInCurrentSession);

module.exports = router;