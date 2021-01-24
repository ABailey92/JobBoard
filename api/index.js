const express = require('express')
const { promisify } = require("util");
const redis = require('redis')

const client = redis.createClient()

const getAsync = promisify(client.get).bind(client);

const app = express();
const port = 3001

app.get('/jobs', async (req, res) => {
  const jobs = await getAsync('github')
  res.header("Access-Control-Allow-Origin", "*")
  return res.send(jobs)
})

app.listen(port, ()=> console.log('connected'))