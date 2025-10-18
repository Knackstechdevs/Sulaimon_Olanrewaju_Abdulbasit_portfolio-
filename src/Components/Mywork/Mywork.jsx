import React from 'react'
import './Mywork.css'
import mywork_data from '../../assets/mywork_data.js'

const Mywork = () => {
  return (
    <div className='mywork' id='projects'>
        <div className="mywork-title">
            <h1>My latest work</h1>
        </div>
        <div className="mywork-container">
            {mywork_data.map((work,index)=>{
                return <img key={index} src={work.w_img} alt="" />
            })}
        </div>
        <div className="mywork-showmore">
            <p>Show more . . .</p>
        </div>
    </div>
  );
}

export default Mywork