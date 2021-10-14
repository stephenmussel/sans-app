const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// returns all favorite businesses
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "favorite" ORDER by "id";`;
  pool.query(queryText)
  .then(result => {
      res.send(result.rows)
  }).catch(error => {
      console.log('error in GET /favorite', error); 
  })
});

/**
 * POST route template
 */
 router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
