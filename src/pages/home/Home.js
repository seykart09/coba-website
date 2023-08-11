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
      <section className="section text-center">
        <div className="bg-light py-5">
          <Container fluid className="h-100">

            <Row className="">
              <Col lg="4">
                <div className="text-center">
                  <svg width="50" height="73" viewBox="0 0 50 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.0837 48.6028L48.5813 48.6061L13.6128 13.6377L13.69 62.2947L25.4214 50.9058L32.8868 69.3117C33.3686 70.4996 34.5125 71.2202 35.7201 71.2202C36.1026 71.2202 36.4915 71.1478 36.8679 70.9953C38.432 70.3609 39.1858 68.5785 38.5513 67.0144L31.0837 48.6028Z" fill="#50A5DC"/>
                    <path d="M17.8719 30.9737C17.0883 30.9737 16.4531 30.3386 16.4531 29.555V25.8098C16.4531 25.0263 17.0883 24.3911 17.8719 24.3911C18.6554 24.3911 19.2906 25.0263 19.2906 25.8098V29.555C19.2906 30.3386 18.6554 30.9737 17.8719 30.9737Z" fill="black"/>
                    <path d="M6.84024 23.8915C6.05667 23.8915 5.42151 23.2563 5.42151 22.4727V18.7276C5.42151 17.944 6.05667 17.3088 6.84024 17.3088C7.6238 17.3088 8.25897 17.944 8.25897 18.7276V22.4727C8.25897 23.2563 7.6238 23.8915 6.84024 23.8915Z" fill="black"/>
                    <path d="M22.6445 8.51226H18.8993C18.1158 8.51226 17.4806 7.8771 17.4806 7.09353C17.4806 6.30997 18.1158 5.6748 18.8993 5.6748H22.6445C23.428 5.6748 24.0632 6.30997 24.0632 7.09353C24.0632 7.8771 23.428 8.51226 22.6445 8.51226Z" fill="black"/>
                    <path d="M17.8719 52.7427C17.0883 52.7427 16.4531 52.1076 16.4531 51.324V35.407C16.4531 34.6234 17.0883 33.9883 17.8719 33.9883C18.6554 33.9883 19.2906 34.6234 19.2906 35.407V51.324C19.2906 52.1076 18.6554 52.7427 17.8719 52.7427Z" fill="black"/>
                    <path d="M13.6377 1.4187H1.41858V13.6378H13.6377V1.4187Z" fill="#F07C3A"/>
                    <path d="M49.5846 47.603L15.0565 13.075V1.41873C15.0565 0.635165 14.4214 0 13.6378 0H1.41873C0.635165 0 0 0.635165 0 1.41873V13.6378C0 14.4214 0.635165 15.0565 1.41873 15.0565H12.1964L12.2713 62.2971C12.2721 62.8667 12.6136 63.3806 13.1384 63.602C13.6631 63.8235 14.2696 63.7096 14.6782 63.3129L24.8984 53.391L31.5721 69.845C32.2605 71.5422 33.8886 72.6389 35.72 72.6389C36.2973 72.6389 36.8628 72.5282 37.4009 72.31C38.5087 71.8607 39.3751 71.0069 39.8407 69.906C40.3064 68.8051 40.3153 67.5888 39.866 66.4811L33.1903 50.0221L48.581 50.0249C48.5811 50.0249 48.5811 50.0249 48.5811 50.0249C49.1548 50.0249 49.6722 49.6793 49.8919 49.1493C50.1116 48.6191 49.9902 48.0089 49.5846 47.603ZM2.83746 2.83746H12.2191V12.2191H2.83746V2.83746ZM31.0841 47.1844C31.0839 47.1844 31.0839 47.1844 31.0838 47.1844C30.6119 47.1844 30.1708 47.419 29.9072 47.8104C29.6435 48.2019 29.5917 48.6988 29.7692 49.1364L37.2367 67.5475C37.4011 67.9528 37.3978 68.398 37.2274 68.8008C37.057 69.2036 36.74 69.5161 36.3346 69.6806C36.1369 69.7607 35.9302 69.8014 35.7202 69.8014C35.0497 69.8014 34.4537 69.3999 34.2016 68.7785L26.7362 50.3728C26.5589 49.9354 26.1755 49.6149 25.7137 49.5177C25.6166 49.4973 25.5188 49.4874 25.4215 49.4874C25.0563 49.4874 24.7006 49.6285 24.4333 49.8882L15.1035 58.9456L15.0371 17.0687L45.1556 47.1869L31.0841 47.1844Z" fill="black"/>
                  </svg>
                  <h5 className="fw-bold mt-3">Select and Customise</h5>
                  <p className="small">Select the cloth of your choice and customise <br></br> it according to your size </p>
                </div>
              </Col>
              <Col lg="4">
                <div className="text-center">
                  <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M60.125 10.8572V28.9063L4.87939 20.8125C5.0576 20.3381 5.34033 19.9098 5.70663 19.5595C6.07292 19.2093 6.51338 18.9459 6.99533 18.7891L48.8516 2.79817H48.9556C49.9472 2.46852 50.9864 2.30445 52.0313 2.31254C53.0686 2.31114 54.096 2.51471 55.0544 2.91156C56.0128 3.30842 56.8833 3.89073 57.616 4.62504C58.4266 5.44551 59.066 6.41906 59.4967 7.48902C59.9275 8.55897 60.1411 9.70393 60.125 10.8572Z" fill="#231F20"/>
                    <path d="M62.4375 20.8125H28.9062C28.7906 20.8125 28.675 20.8125 28.5594 20.8125H4.87937C4.83008 20.9412 4.78762 21.0724 4.75219 21.2056C4.66889 21.4515 4.62594 21.7092 4.625 21.9688V61.2812C4.625 63.1212 5.35591 64.8858 6.65695 66.1868C7.95798 67.4878 9.72256 68.2188 11.5625 68.2188H62.4375C64.2774 68.2188 66.042 67.4878 67.3431 66.1868C68.6441 64.8858 69.375 63.1212 69.375 61.2812V27.75C69.375 25.9101 68.6441 24.1455 67.3431 22.8444C66.042 21.5434 64.2774 20.8125 62.4375 20.8125Z" fill="#414042"/>
                    <path d="M69.375 34.6875V55.5H50.875C49.6484 55.5 48.472 55.0127 47.6046 54.1454C46.7373 53.278 46.25 52.1016 46.25 50.875V39.3125C46.25 38.0859 46.7373 36.9095 47.6046 36.0421C48.472 35.1748 49.6484 34.6875 50.875 34.6875H69.375Z" fill="#FFF200"/>
                    <path d="M55.5 48.5625C57.4157 48.5625 58.9688 47.0095 58.9688 45.0938C58.9688 43.178 57.4157 41.625 55.5 41.625C53.5843 41.625 52.0312 43.178 52.0312 45.0938C52.0312 47.0095 53.5843 48.5625 55.5 48.5625Z" fill="#231F20"/>
                  </svg>
                  <h5 className="fw-bold mt-3">Checkout and Pay</h5>
                  <p className="small">Select the cloth of your choice and customise <br></br> it according to your size </p>
                </div>
              </Col>
              <Col lg="4">
                <div className="text-center">
                  <svg width="92" height="74" viewBox="0 0 92 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_153_327)">
                    <path d="M88.6588 62.254H56.8779V26.0371H69.3805C72.2554 26.0371 74.8837 27.6614 76.1695 30.233L81.3149 40.5239L87.9156 45.5433C90.1567 46.9257 91.5211 49.3705 91.5211 52.0036V59.3918C91.5211 60.9726 90.2397 62.254 88.6588 62.254Z" fill="#C63C22"/>
                    <path d="M58.7249 62.254H0.777832V17.1106C0.777832 14.0394 3.26736 11.5503 6.33856 11.5503H53.1646C56.2358 11.5503 58.7254 14.0398 58.7254 17.1106V62.254H58.7249Z" fill="#F86E51"/>
                    <path d="M58.7247 17.111C58.7247 14.0398 56.2352 11.5503 53.164 11.5503H44.0913V62.254H58.7247V17.111Z" fill="#E25D47"/>
                    <path d="M72.3762 30.732L77.382 40.7432H62.8953V28.8904H69.3968C70.6584 28.8904 71.8121 29.6033 72.3762 30.732Z" fill="#D0D5D9"/>
                    <path d="M18.2458 72.4785C23.8927 72.4785 28.4704 67.9008 28.4704 62.2539C28.4704 56.607 23.8927 52.0293 18.2458 52.0293C12.5989 52.0293 8.02124 56.607 8.02124 62.2539C8.02124 67.9008 12.5989 72.4785 18.2458 72.4785Z" fill="#32373B"/>
                    <path d="M18.2456 66.2049C20.4277 66.2049 22.1966 64.436 22.1966 62.2539C22.1966 60.0719 20.4277 58.303 18.2456 58.303C16.0636 58.303 14.2947 60.0719 14.2947 62.2539C14.2947 64.436 16.0636 66.2049 18.2456 66.2049Z" fill="#484F54"/>
                    <path d="M76.1929 72.4785C81.8397 72.4785 86.4174 67.9008 86.4174 62.2539C86.4174 56.607 81.8397 52.0293 76.1929 52.0293C70.546 52.0293 65.9683 56.607 65.9683 62.2539C65.9683 67.9008 70.546 72.4785 76.1929 72.4785Z" fill="#32373B"/>
                    <path d="M76.1931 66.2049C78.3752 66.2049 80.1441 64.436 80.1441 62.2539C80.1441 60.0719 78.3752 58.303 76.1931 58.303C74.0111 58.303 72.2422 60.0719 72.2422 62.2539C72.2422 64.436 74.0111 66.2049 76.1931 66.2049Z" fill="#484F54"/>
                    <path d="M30.1903 35.9143C39.6458 35.9143 47.311 28.2491 47.311 18.7936C47.311 9.33806 39.6458 1.67285 30.1903 1.67285C20.7348 1.67285 13.0696 9.33806 13.0696 18.7936C13.0696 28.2491 20.7348 35.9143 30.1903 35.9143Z" fill="#32373B"/>
                    <path d="M30.1903 32.5419C37.7833 32.5419 43.9387 26.3866 43.9387 18.7936C43.9387 11.2005 37.7833 5.04517 30.1903 5.04517C22.5973 5.04517 16.4419 11.2005 16.4419 18.7936C16.4419 26.3866 22.5973 32.5419 30.1903 32.5419Z" fill="#ECF0F1"/>
                    <path d="M35.6369 24.7402C35.2975 24.7402 34.9556 24.6283 34.6711 24.3982L29.2236 19.9881C28.8632 19.6962 28.6538 19.2572 28.6538 18.7936V10.2333C28.6538 9.38468 29.3417 8.69678 30.1903 8.69678C31.0389 8.69678 31.7268 9.38468 31.7268 10.2333V18.0605L36.6044 22.0092C37.2642 22.5435 37.3656 23.511 36.8323 24.1704C36.5285 24.5457 36.0846 24.7402 35.6369 24.7402Z" fill="#32373B"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_153_327">
                    <rect width="91.6191" height="74" fill="white" transform="translate(0.19043)"/>
                    </clipPath>
                    </defs>
                  </svg>
                  <h5 className="fw-bold mt-3">Get it delivered</h5>
                  <p className="small">Select the cloth of your choice and customise <br></br> it according to your size </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section className="section text-center">
        <div>
          <Container className="h-100">
            <h5 className="text-center fw-bold">We would love to hear from you</h5>
            <Form>
              <Row className="h-100 justify-content-center mt-5">
                <Col lg="5">
                  <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                    <Form.Control className="border-0" type="text" placeholder="enter your name" />
                  </Form.Group>
                </Col>
                <Col lg="5">
                  <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                    <Form.Control className="border-0" type="text" placeholder="enter your name" />
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
