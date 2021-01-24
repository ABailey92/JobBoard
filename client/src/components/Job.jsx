import React, {useState} from 'react'
import Row from 'harmonium/lib/Row'
import Col from 'harmonium/lib/Col'
import CloseButton from 'harmonium/lib/CloseButton'
import Modal from 'harmonium/lib/Modal'
import Card from 'harmonium/lib/Card'

const Job = ({ job}) => {
  const [isOpen, setIsOpen] = useState({});

const openModal = id => {
  setIsOpen({ [id]: true });
};

const closeModal = id => {
  setIsOpen({ [id]: false });
};

  return (
    <Card className="job">
      {isOpen[job.id] && <Modal isOpen={ isOpen }>
        { job.title }
        {job.company}
        <img className={ 'detail-logo' } alt='logo' src={ job.company_logo } />
        <div dangerouslySetInnerHTML={{__html: job.description}}/>
     
        <CloseButton onClick={()=> closeModal(job.id)}>X</CloseButton>
      </Modal> }
      <div onClick={()=> openModal(job.id)}>
      <h5>{job.title } </h5>
        <h6>{ job.company }</h6>
        <h4>{ job.location }</h4>
      </div>
      <div>
        {job.created_at.split(' ').slice(0,3).join(' ')}
      </div>
    </Card>
  )
}

export default Job
