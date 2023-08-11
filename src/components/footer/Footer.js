import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../../img/coba-logo.svg'
import Twitter from '../../img/twitter.png'
import Facebook from '../../img/facebook.svg'
import Instagram from '../../img/instagram.svg'
import Image from "react-bootstrap/Image";

export const Footer = () => {
  return (
    <div className='w-100 bg-black '>
      <Container>
      <Row className='text-white py-5 row-cols-2 row-cols-xl-5'>
        <Col>
          <Image src={Logo} className="object-fit-cover rounded-4" width={90} />
        </Col>
        <Col>
          <div>
            <p className='fw-bold'>Contact us</p>
            <h6>(233) 247000071</h6>
            <h6>(233) 247000071</h6>
          </div>
        </Col>
        <Col>
          <div>
            <p className='fw-bold'>Location</p>
            <h6>Sunyani</h6>
            <h6>Accra</h6>
          </div>
        </Col>
        <Col>
          <div>
            <p className='fw-bold'>Email</p>
            <h6>coba-hq@gmail.com</h6>
          </div>
        </Col>
        <Col>
          <div>
            <p className='fw-bold'>Connect with us</p>
            <div className='d-flex'>
              <Image src={Facebook} className="object-fit-contain me-3" width={40} />
              <Image src={Instagram} className="object-fit-contain me-3" width={40} />
              <Image src={Twitter} className="object-fit-contain" width={40} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  )
}
