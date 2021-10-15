const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// returns all businesses
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "business" ORDER by "name" ASC;`;
  pool.query(queryText)
  .then(result => {
      res.send(result.rows)
  }).catch(error => {
      console.log('error in GET /business', error); 
  })
});

// GET route for details of selected business
router.get('/:id', (req, res) => {
  // console.log('in GET details');
  // console.log('this is req.params.id: ', req.params.id);
  const businessId = req.params.id;
  const queryText = `SELECT * FROM "business" WHERE "business"."id" = $1`;
  pool.query(queryText, [businessId])
    .then(result => {
      // console.log(result);
      res.send(result.rows[0]);
    })
    .catch(error => {
      console.log('error in GET details', error);
      res.sendStatus(500)
    })
});

// POST route to add business
 router.post('/', (req, res) => {
  console.log(req.body);
  const insertBusinessQuery = ` 
  INSERT INTO "business" ("name")
  VALUES ($1)
  RETURNING "id";`
  pool.query(insertBusinessQuery, [req.body.name])
  .then(result => {
    console.log('new business id:', result.rows[0].id); // business ID
    const createBusinessId = result.rows[0].id
  }).catch(error => {
    console.log('POST /business', error);
    res.sendStatus(500)
  })
});


/**
 * POST route template
 */
 router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
