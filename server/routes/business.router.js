const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  const queryText = `SELECT * FROM "business";`;
  pool.query(queryText)
  .then(result => {
      res.send(results.rows)
  }).catch(error => {
      console.log('error in GET /business', error); 
  })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
