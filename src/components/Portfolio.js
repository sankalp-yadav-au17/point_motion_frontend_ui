import React from 'react'
import OurFeaturesImg from "./images/Our_feature.png"
import { Button } from 'react-bootstrap';

function Portfolio() {
  return (
    <>
       <div className='d-flex'>
        <img src={OurFeaturesImg} alt="" /> 
        <div className='mt-5 px-5'>
            <div className='mt-5 mx-5'>
                <b className='text-primary'>OUR FEATURES</b>
                <h1 className='mt-5'><b>All of your portfolios are linked to your AR Shakir account</b></h1>
                <p className='text-secondary'>Why kept very ever home mrs. Considered sympathize ten uncommonly 
                    occassional assistance sufficient not. Letter of on become he tended
                    active enable to.
                </p>
                <Button as="input" type="button" value="Get Started" />{' '}
            </div>
        </div>
       </div>
    </>
  )
}

export default Portfolio