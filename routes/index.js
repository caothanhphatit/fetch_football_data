const express = require('express');
const router = express.Router();
const teamService = require("../services/football")

/* GET home page. */
router.get('/', async (req, res) => {
  const data = await teamService.getTeam({ league: '39', team: '33' })
  await teamService.getABC(data);
  res.success(data, "Message")

});

module.exports = router;s