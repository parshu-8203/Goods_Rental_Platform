import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import logo from './sofa.jpeg'
import bed from './bed.jpg'
import desk from './desk.jpg'
export const Carousal = () => {
  return (
    <div style={{height:"100vh",width:"100vw",borderRadius:"20px"}} >

    
        <Carousel data-bs-theme="light" >
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src={logo}
              style={{height:"70vh"}}
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={desk}
              style={{height:"70vh"}}

              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={bed}
              alt="Third slide"
              style={{height:"70vh"}}

            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      
    
    
    </div>
  )
}
