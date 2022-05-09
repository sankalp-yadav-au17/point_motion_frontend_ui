import React from 'react'
import { Button } from 'react-bootstrap';
import VideoImg from "./images/VideoImg.png"

function Experience() {
  return (
    <main className='vh-100'>
        <div className='p-5' style={{height:"90%",backgroundColor:"#3734A9"}}>
            <div className='d-flex justify-content-between'>
                <h1 className='ms-2 text-light'>Yet preference connection unpleasant yet melancholy but end appearence</h1>
                <Button className='me-2 text-wrap' style={{height:"50px",width:"160px"}} variant="danger">Get Started Now</Button>
            </div>
            <div className='d-flex p-5 justify-content-between'>
                <div className='text-light'>
                    <div className='d-flex mb-5'>
                    <div style={{backgroundColor:"#312F91",borderRadius:"50%", width:"70px", height:"70px"}} className='d-flex justify-content-center align-items-center px-4 me-3'>
                        <h1>1</h1>
                    </div>
                    <div>
                        <h1>First Working Process</h1>
                        <p>Blessing it ladyship on sensible judgement settling outweigh.</p>
                    </div>
                    </div>
                    <div className='d-flex  mb-5'>
                    <div style={{backgroundColor:"#312F91",borderRadius:"50%", width:"70px", height:"70px"}} className='rounded-circle d-flex justify-content-center align-items-center px-4 me-3'>
                        <h1>2</h1>
                    </div>
                    <div>
                        <h1>Dedicated Team</h1>
                        <p>Warmly little before cousin sunsex entire men set.</p>
                    </div>
                    </div>
                    <div className='d-flex '>
                    <div style={{backgroundColor:"#312F91",borderRadius:"50%", width:"70px", height:"70px"}} className='rounded-circle d-flex justify-content-center align-items-center px-4 me-3'>
                        <h1>3</h1>
                    </div>
                    <div>
                        <h1>24/7Hours Support</h1>
                        <p>And excellence partiality estimating terminated day everything.</p>
                    </div>
                    </div>
                </div>
                <div>
                    <img src={VideoImg} alt="" />
                </div>
            </div>
        </div>
    </main>
  )
}

export default Experience