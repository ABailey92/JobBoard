const axios = require('axios')
const redis = require('redis')
const client = redis.createClient()

const { promisify } = require("util");
//const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

const baseURL = 'https://jobs.github.com/positions.json'

module.exports = async function fetchGithub() {

  let resultCount = 1, onPage = 0;
  let allJobs = []

  while (resultCount > 0) {
    const { data: jobs } = await axios.get(`${baseURL}?page=${onPage}&location=remote`)
    allJobs.push(...jobs)
    resultCount = jobs.length
    console.log(jobs.length)
    onPage++;
    
  }

 
  const success = await setAsync("github", JSON.stringify(allJobs));
  console.log({success})
}


module.exports()