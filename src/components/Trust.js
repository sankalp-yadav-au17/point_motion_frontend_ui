import React from 'react'
import SheildImg from "./images/Sheild.png"
import InfrastructureImg from "./images/Infrastructure.png"
import ServerImg from "./images/Server.png"
import { Button } from 'react-bootstrap';


function Trust() {
  return (
    <main className='container'>
        <section className='d-flex justify-content-between mb-5 shadow-sm'>
            <div className='ps-5'>
                <h1>
                    <span className='fw-bold'>Germany-based & GDPR Compliant</span>
                </h1>
            </div>
            <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-center align-items-center rounded bg-secondary' style={{height:"40px", width:"40px"}}>
                    <img src={SheildImg} alt="" height="20px"/>
                </div>
                <div className='ps-2 d-flex mt-3'>
                    <p>Data does not leave our severs</p>
                </div>
            </div>
            <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-center align-items-center rounded bg-secondary' style={{height:"40px", width:"40px"}}>
                    <img src={InfrastructureImg} alt="" height="20px" />
                </div>
                <div className='ps-2 d-flex mt-3'>
                    <p>Own Infrastructure</p>
                </div>
                </div>
            <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-center align-items-center rounded bg-secondary' style={{height:"40px", width:"40px"}}>
                    <img src={ServerImg} alt="" height="20px"/>
                </div>
                <div className='ps-2 d-flex mt-3'>
                    <p>Most renowned data centers</p>
                </div>
            </div>
        </section>
        <section className='d-flex'>
            <div className='p-5 m-5 shadow-lg'>
                <div className='text-center'>
                    <h1>
                        <b>Outward clothes promise at gravity.</b>
                    </h1>
                </div>
                <div className='text-center'>
                    <p>End-to-end payments and financial management in a single solution. 
                        Meet the right platform to help realize.</p>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <Button className='me-2' variant="primary">Read More</Button>
                </div>
            </div>
            <div className='p-5 m-5 shadow-lg'>
                <div className='text-center'>
                    <h1>
                        <b>Sufficient particular impossible.</b>
                    </h1>
                </div>
                <div className='text-center'>
                    <p>End-to-end payments and financial management in a single solution. 
                        Meet the right platform to help realize.</p>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <Button className='me-2' variant="primary">Read More</Button>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Trust