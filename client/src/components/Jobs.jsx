import React, {useState} from 'react'
import Job from './Job'
import Pagination from 'harmonium/lib/Pagination'
import Modal from 'harmonium/lib/Modal'


const Jobs = ({ jobs }) => {
  const [ page, setPage ] = useState(1)

  const numJobs = jobs.length
  const onClick = (pageNumber) => setPage(pageNumber)

  const jobsOnPage = jobs.slice(page * 20, page * 20 + 20)

  


  return (
    <div className="jobs">

      <h1 className='remote'>Remote Software Developer Jobs</h1>
      <h6>Found {numJobs} jobs </h6>
      
      { jobsOnPage.map((job, i) => <Job key={ i } job={ job } />) }
      <Pagination
          currentPage={page}
        totalPages={ Math.floor(numJobs / 20) }
          onPageClick={onClick}
          />
    </div>
    
    
  )
}

export default Jobs
