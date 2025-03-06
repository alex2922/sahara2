import React from 'react'
import "./contact.scss"
import BlackBorder from '../(component)/border/BlackBorder'
import GreyBorder from '../(component)/border/GreyBorder'

const page = () => {
  return (
    <>
      <div className="contact1 parent">
        <div className="contact-container1 container">
          <h1>Let’s Get in Touch!</h1>

          <p>Have questions or ready to book your adventure? Reach out to us! Our team is here to help you plan the ultimate experience with Sahara Amusement.</p>





        </div>
      </div>


      <BlackBorder flip={true} margin={"-96px"} />

      <div className="contact2 parent">
        <div className="contact-container2 container">


          <div className="left">
            <h1>Let’s Get in Touch!</h1>

            <p>Have questions or ready to book your adventure? Reach out to us! Our team is here to help you plan the ultimate experience with Sahara Amusement.</p>

          </div>

          <div className="right">

            <form action=""> 



            </form>

          </div>


        </div>
      </div>

      <GreyBorder  margin={"-96px"} />


    </>
  )
}

export default page
