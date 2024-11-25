import React from 'react';
import ProfielPic from "../Assets/john-doe-image.png"
import { AiFillStar } from "react-icons/ai"

const Testimonials = () => {
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Testimonial</p>
            <h1 className='primary-heading'>What They are saying</h1>
            <p className='primary-text'>
                Lorem ipsum, dolor sit amet consectetur adipisicing 
                elit. Corporis ex pariatur amet, in quisquam neque nemo 
                vitae expedita itaque nostrum ad inventore. Quibusdam minus 
                iste, consequatur totam quaerat autem sit.
            </p>
        </div>
        <div className='testimonial-section-bottom'>
            <img src= {ProfielPic} alt="" />
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing 
                elit. Corporis ex pariatur amet, in quisquam neque nemo 
                vitae expedita itaque nostrum ad inventore. Quibusdam minus 
                iste, consequatur totam quaerat autem sit.
            </p>
            <div className='testimonials-stars-container'>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
            </div>
            <h2>John Doe</h2>
        </div>
    </div>
  )
}

export default Testimonials