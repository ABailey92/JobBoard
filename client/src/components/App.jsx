import React, {useState, useEffect} from 'react'
import './App.scss'
import Jobs from './Jobs'

import axios from 'axios'

const JOB_API_URL = 'http://localhost:3001/jobs'



const App = () => {
  const [ jobs, setJobs ] = useState([])

  useEffect(() => {
    fetchJobs()
  },[])
  
  async function fetchJobs() {
    const { data: allJobs } = await axios.get(JOB_API_URL)
    setJobs(allJobs)
    console.log(allJobs)
  }
  return (
    <div>
      <Jobs jobs={ jobs }/>
    </div>
  )
}

export default App
