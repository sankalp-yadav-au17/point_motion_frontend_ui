import React from 'react'
import { Button } from 'react-bootstrap';
import { BsFillPlayFill } from 'react-icons/bs';
import Particles from "./images/Particles.png"
import Portfolio_state_image from "./images/stats_image.png"
import OpenZeppelirImg from "./images/OpenZeppelir.png"
import MondayImg from "./images/Monday.com.png"
import MorpheusImg from "./images/Morpheus.png"
import OracleImg from "./images/Oracle.png"
import ProtonetImg from "./images/Protonet.png"
import SamsungImg from "./images/Samsung.png"
import SegmentImg from "./images/Segment.png"
import Portfolio from "./Portfolio"
import DebitCard from "./DebitCard"
import Experience from "./Experience"
import Trust from "./Trust"


function Portfolio_Company() {
  return (
    <>
        <div className='p-5'  style={{height:"91%",backgroundColor:"#3049B2",backgroundImage:`url(${Particles})`}}>
          <div className='p-5 d-flex justify-content-center align-items-center'>
            <h1 className='text-light fs-1 fw-bolder w-50 text-center'>Managing your crypto portfolio has never been easier</h1>
          </div>
          <div className='fs-5 d-flex justify-content-center align-items-center pb-5'>
            <p className='w-50 text-light text-center'>End-to-end payments and financial management in a single solution. Meet the right platform to help realise.</p>
          </div>
          <div className='d-flex justify-content-center align-items-center text-light'>
            <Button style={{backgroundColor:"#FF7F5C"}} className='ms-5 px-4 rounded-pill text-light' size='lg' >Get Started</Button>
            <div style={{height: "50px", width:"50px", backgroundColor: "#22D497"}} className='rounded-circle ms-5 d-flex justify-content-center align-items-center text-light' size='sm' variant="warning">
              <BsFillPlayFill/> 
            </div>
            <div className='ms-2'>
              See How It Works
            </div>
          </div>
          <div className='d-flex justify-content-center align-items-center mt-5'>
            <img src={Portfolio_state_image} alt="" />
          </div>
          <div className='d-flex justify-content-center align-items-center fw-bold'>
            Over 32k+ software bussinesses growing with AR Shakir.
          </div>
          <div className='d-flex justify-content-center align-items-center my-5'>
            <img className='me-5' src={OpenZeppelirImg} alt="" />
            <img className='me-5' src={MondayImg} alt="" />
            <img className='me-5' src={MorpheusImg} alt="" />
            <img className='me-5' src={OracleImg} alt="" />
            <img className='me-5' src={ProtonetImg} alt="" />
            <img className='me-5' src={SamsungImg} alt="" />
            <img className='me-5' src={SegmentImg} alt="" />
          </div>
          <Portfolio/>
          <DebitCard/>
          <Experience/>
          <Trust/>
      </div>
    </>
  )
}

export default Portfolio_Company