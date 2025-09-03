import React from 'react'
import './Service.css'
import Service_data from '../../assets/Service_data.js'

const Service = () => {
  return (
    <div className='services' id='services'>
        <div className="service-title"><h1>My Services</h1></div>
        <div className="service-container">
            {Service_data.map((service,index)=>{
                return <div key={index} className="service-format">
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className="service-readmore">
                        <p>Read more . . .</p>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Service