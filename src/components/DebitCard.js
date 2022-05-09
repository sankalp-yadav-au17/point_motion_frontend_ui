import React from 'react'
import DebitImg from "./images/Debit.png"
import { Button } from 'react-bootstrap';

function DebitCard() {
  return (
    <>
       <div className='d-flex'>
        <div className='mt-5 px-5'>
            <div className='mt-5 mx-5'>
                <b className='text-primary'>OUR FEATURES</b>
                <h1 className='mt-5'><b>All payments can be managed from one account</b></h1>
                <p className='text-secondary'>Why kept very ever home mrs. Considered sympathize ten uncommonly 
                    occassional assistance sufficient not. Letter of on become he tended
                    active enable to.
                </p>
                <Button as="input" type="button" value="Get Started" />{' '}
            </div>
        </div>
        <img src={DebitImg} alt="" /> 
       </div>
    </>
  )
}

export default DebitCard