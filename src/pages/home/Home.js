import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Slide1 from '../../img/slider-image-1.png';
import Slide2 from '../../img/slider-image-2.png';
import Slide3 from '../../img/slider-image-3.png';
import Category1 from '../../img/jerseys.jpeg';
import Category2 from '../../img/basketball shoes.jpeg';
import Category3 from '../../img/accessories.jpg';
import Calendar from '../../img/calendar.png';
import Coach1 from '../../img/Coach-Ato.webp';
import Coach2 from '../../img/coach-nick.webp';
import Coach3 from '../../img/coach-thomas.webp';
import Coach4 from '../../img/coach-thomas.webp';
import { CarouselBody } from "../../components";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { FaMedal, FaThumbsDown } from "react-icons/fa";
import { GiBasketballBasket } from "react-icons/gi";

const obj = [
    {
      "url": Slide1,
      "alt": "Image 1",
      "header": "AKUABA",
      "body": "We launched our new casual wear, at very affordable prices",
    },
    {
      "url": Slide2,
      "alt": "Image 2",
      "header": "AKUABA",
      "body": "We launched our new casual wear, at very affordable prices",
    },
    {
      "url": Slide3,
      "alt": "Image 3",
      "header": "AKUABA",
      "body": "We launched our new casual wear, at very affordable prices",
    },
];

const shopNow = [
  {
    "url": Category1,
    "alt": "Category 1",
    "header": "Clothing",
    "body": "We launched our new casual wear, at very affordable prices",
  },
  {
    "url": Category2,
    "alt": "Category 2",
    "header": "Shoes",
    "body": "We launched our new casual wear, at very affordable prices",
  },
  {
    "url": Category3,
    "alt": "Category 3",
    "header": "Accessories",
    "body": "We launched our new casual wear, at very affordable prices",
  },
];

const team = [
  {
    "url": Coach1,
    "alt": "Coach 1",
    "name": "Coach Ato",
    "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit laudantium vel ipsum sint cupiditate ipsam accusantium quod assumenda numquam iste dignissimos sapiente voluptatem suscipit ut enim, excepturi minus? Dolorem, labore!"
  },
  {
    "url": Coach2,
    "alt": "Coach 2",
    "name": "Coach Nick",
    "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit laudantium vel ipsum sint cupiditate ipsam accusantium quod assumenda numquam iste dignissimos sapiente voluptatem suscipit ut enim, excepturi minus? Dolorem, labore!"
  },
  {
    "url": Coach3,
    "alt": "Coach 3",
    "name": "Coach Eric",
    "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit laudantium vel ipsum sint cupiditate ipsam accusantium quod assumenda numquam iste dignissimos sapiente voluptatem suscipit ut enim, excepturi minus? Dolorem, labore!"
  },
  {
    "url": Coach4,
    "alt": "Coach 3",
    "name": "Coach James",
    "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit laudantium vel ipsum sint cupiditate ipsam accusantium quod assumenda numquam iste dignissimos sapiente voluptatem suscipit ut enim, excepturi minus? Dolorem, labore!"
  },
];


export const Home = () => {
  return (
    <div>
      <section className="banner">
        <Container className="h-100">
          <Row className="h-100">
            <Col lg="6">
              <div className="d-flex flex-column h-100 justify-content-center text-white">
                <div>
                  <h1 className="text-uppercase">We Are Developing Basketball in Ghana</h1>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum incidunt recusandae eligendi explicabo aperiam, labore laborum itaque aliquid officia perferendis ipsam tempora mollitia assumenda inventore iure unde repudiandae! Officiis, accusamus.
                  </p>
                </div>
                <div>
                  <Button variant="secondary" className="px-5">Learn About Us</Button>{" "}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Container>
        <section className="section">
          <Row className="h-100 justify-content-center team-stats">
            <Col sm="12" lg="3">
              <Card className="shadow text-center border-0 rounded-1">
                <Card.Body>
                  <GiBasketballBasket/>
                  <h1 className="fw-bold mb-0">100</h1>
                  <Card.Text className="mb-0">Games Played</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm="12" lg="3">
              <Card className="shadow text-center border-0 rounded-1">
                <Card.Body>
                  <FaMedal/>
                  <h1 className="fw-bold mb-0">100</h1>
                  <Card.Text className="mb-0">Game Won</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm="12" lg="3">
              <Card className="shadow text-center border-0 rounded-1">
                <Card.Body>
                  <FaThumbsDown/>
                  <h1 className="fw-bold mb-0">100</h1>
                  <Card.Text className="mb-0">Games Lost</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
        <section className="section">
          <h4 className="text-center mb-4">Meet the Team</h4>
            <Row>
              {
                team.map((coach, index) => (
                  <Col lg="3">
                    <div className="card overflow-hidden border-0">
                      <div className="coaches" key={`shop${index}`}>
                        <img
                          className="w-100 object-fit-cover h-100"
                          src={coach.url}
                          alt={coach.alt}
                        />
                        <div className="content">
                          <div className="d-flex h-100 align-items-center justify-content-center">
                            <div>
                              <Button variant="secondary" className="px-5">
                                Read more
                              </Button>{" "}
                            </div>
                          </div>
                          
                        </div>
                      </div>
                      <div className="p-4 bg-secondary-subtle w-100 text-black text-start">
                        <span className="badge bg-warning rounded-0 mb-2">Head Coach</span>
                        <h6 className="text-uppercase mb-2 fw-bold">{coach.name}</h6>

                        <p className="text-truncate-3 mb-0">
                          {coach.body}
                        </p>
                      </div>
                    </div>
                  </Col>
                ))
              }
              
            </Row>
        </section>
      </Container>
        <section className="section bg-light">
          <Container>
          <h4 className="text-center mb-4">Shop with us</h4>
            <Row>
              {
                shopNow.map((shop, index) => (
                  <Col lg="4">
                    <div className="categories overflow-hidden rounded-1" key={`shop${index}`}>
                      <img
                        className="w-100 object-fit-cover h-100"
                        src={shop.url}
                        alt={shop.alt}
                      />
                      <div className="content">
                        <div className="d-flex h-100 align-items-center justify-content-center">
                          <div>
                            <Button variant="secondary" className="px-5">
                              Shop Now
                            </Button>{" "}
                          </div>
                        </div>
                        <div className="p-4 bg-primary position-absolute bottom-0 w-100 text-white text-center">
                          <h3 className="text-uppercase mb-0">{shop.header}</h3>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))
              }
              
            </Row>
          </Container>
        </section>
      <Container>
        <section className="section d-none">
            <CarouselBody children={obj}/>
        </section>
        <section className="section text-center d-none">
          <div>
            <Button variant="outline-primary" className="px-5">BROWSE MORE</Button>{" "}
          </div>
        </section>
      </Container>
      <section className="section text-center pb-0">
        <div className="pt-5">
          <Container className="h-100">

            <Row className="justify-content-center">
              <Col lg="5">
                <div className="card border-0 game-card h-100">
                  <div className="card-header text-start border-bottom border-3 border-warning pt-3">
                    <h4 className="mb-0">Next Match</h4>
                  </div>
                  <div className="card-body d-flex flex-column justify-content-center border py-4">
                    <ul class="p-0 list-unstyled d-flex justify-content-between align-items-center">
                        <li>
                          <div className="mt-2">
                            <p className="mb-0"><span className="">Coba</span></p>
                          </div>
                          <img
                              width={70}
                              src="https://cdn.nba.com/logos/nba/1610612748/global/L/logo.svg"
                              alt="teamName"
                            />
                          <div className="mt-2">
                            <p className="mb-0"><span className="">Win</span></p>
                          </div>
                        </li>
                        <li>
                          <div>
                            <p className="small mb-0">Thursday</p>
                            <time class="text-warning fw-bold" datetime="2008-02-14 20:00">28 October</time> 
                            <p className="small mb-0">15:00pm</p>
                          </div>
                        </li>
                        <li>
                          <div className="mt-2">
                            <p className="mb-0"><span className="">Dunks</span></p>
                          </div>
                          <img
                              className=""
                              width={70}
                              src="https://cdn.nba.com/logos/nba/1610612752/global/L/logo.svg"
                              alt="teamName"
                            />
                          <div className="mt-2">
                            <p className="mb-0"><span className="">Lost</span></p>
                          </div>
                        </li>
                    </ul>
                  </div>
                  <div className="card-footer border-top border-3 bg-body-secondary rounded-0 py-2">
                    <h6 className="mb-0">Elwak Sports Stadium</h6>
                  </div>
                </div>
              </Col>
              <Col lg="5">
                <div className="card border-0 game-card h-100">
                  <div className="card-header text-start border-bottom border-3 border-warning pt-3">
                    <h4 className="mb-0">Latest Result</h4>
                  </div>
                  <div className="card-body d-flex flex-column justify-content-center border py-4">
                    <ul class="p-0 list-unstyled d-flex justify-content-between align-items-center">
                        <li>
                          <img
                              width={70}
                              src="https://cdn.nba.com/logos/nba/1610612748/global/L/logo.svg"
                              alt="teamName"
                            />
                          <div className="mt-2">
                            <a href="#" className="text-decoration-none"><span className="small">Dunks</span></a>
                          </div>
                        </li>
                        <li>
                          <div className="">
                            <h2 className="mb-0 fw-bold">129:121</h2>
                            <time class="text-warning fw-bold small" datetime="2008-02-14 20:00">21 August</time> 
                            <p className="small mb-0">15:00pm</p>
                          </div>
                        </li>
                        <li>
                              <img
                              className=""
                              width={70}
                              src="https://cdn.nba.com/logos/nba/1610612752/global/L/logo.svg"
                              alt="teamName"
                            />
                          <div className="mt-2">
                            <a href="#" className="text-decoration-none"><span className="small">Coba</span></a>
                          </div>
                        </li>
                    </ul>
                  </div>
                  <div className="card-footer border-top border-3 bg-body-secondary rounded-0 py-2">
                    <h6 className="mb-0">Elwak Sports Stadium</h6>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section className="section text-center">
        <div>
          <Container fluid className="h-100">
            <Row className="h-100 justify-content-center">
              <Col xs="12" md="6" lg="3">
                <Image src={Calendar} className="w-100 object-fit-cover" />
              </Col>
              <Col xs="12" md="6" lg="4">
                <div className="d-flex flex-column h-100 justify-content-center text-start">
                  <div>
                    <h5>You can schedule a match with us </h5>
                    <h3 className="fw-bolder">Click the button below</h3>
                  </div>
                  <div>
                    <Button variant="primary" className="px-5">Schedule Match</Button>{" "}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section className="section text-center contact-bg">
        <div>
          <Container className="h-100">
            <h5 className="text-center fw-bold text-white">We would love to hear from you</h5>
            <Form>
              <Row className="h-100 justify-content-center mt-5">
                <Col lg="5">
                  <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                    <Form.Control className="border-0" type="text" placeholder="enter your name" />
                  </Form.Group>
                </Col>
                <Col lg="5">
                  <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                    <Form.Control className="border-0" type="number" placeholder="enter your phone number" />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="h-100 justify-content-center">
                <Col lg="5">
                  <Form.Group  className="" controlId="exampleForm.ControlTextarea1">
                    <Form.Control className="border-0" as="textarea" placeholder="type your message" rows={6} />
                  </Form.Group>
                </Col>
                <Col lg="5">
                  <div className="text-start mt-4 mt-xl-5">
                    <Button variant="primary" className="px-5">SEND MESSAGE</Button>{" "}
                  </div>
                </Col>
              </Row>
            </Form>
            
          </Container>
        </div>
      </section>
    </div>
  );
};
