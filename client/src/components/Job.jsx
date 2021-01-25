import React, {useState} from 'react'
import Row from 'harmonium/lib/Row'
import Col from 'harmonium/lib/Col'
import CloseButton from 'harmonium/lib/CloseButton'
import Modal from 'harmonium/lib/Modal'
import Card from 'harmonium/lib/Card'
import Button from 'harmonium/lib/Button'

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
      {isOpen[ job.id ] && <Modal isOpen={ isOpen }>
        <CloseButton style={{float: 'left', margin: 0}} onClick={ () => closeModal(job.id) }>X</CloseButton>
        <img className={ 'detail-logo' } alt='logo' src={ job.company_logo } />
        <div className='modal'>
        <p className='title'>{ job.title }</p>
        <h6 className='company'>{job.company}</h6>
        <small dangerouslySetInnerHTML={ { __html: job.description.slice(0, 500) } } />
        <div>
        <Button style={{marginTop: '10vh'}} small primary href={job.url}>Apply Now</Button>
          </div>
          </div>
      </Modal> }
      <div onClick={()=> openModal(job.id)}>
        <h5>{ job.title } </h5>
        <h6>{ job.company }</h6>
        <h4>{ job.location }</h4>
      </div>
      <div>
        <small>{job.created_at.split(' ').slice(0,3).join(' ')}</small>
      </div>
    </Card>
  )
}

export default Job
