import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import './App.css';
import img1 from './images/i-1.png';
function App() {
  return (
    <>

      {/* header section start */}

      <section>

        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home"><img src={require(`./images/logo.png`)}></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">LANDING</Nav.Link>
                <Nav.Link href="#home">PAGES</Nav.Link>
                <Nav.Link href="#link">BLOG</Nav.Link><Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">PORTFOLIO</Nav.Link>
                <Nav.Link href="#link">SHOP</Nav.Link>
                <Nav.Link href="#link">FEATURES</Nav.Link>
                <Nav.Link href="#link">ELEMENTS</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section >

      {/* header section end */}

      {/* images section start */}

      <section>
        <div className='bg-img'>
          <Container>
            <Row>
              <Col>
                <div className='bg-txt position-relative'>
                  <h3>GRAVITY TEMPLATE</h3>
                  <p>Gravity is an incredibly beautiful and fully responsive Bootstrap Template for any type of creative professionals, startups and established business.It allows you built any size of high quality web products, thanks to massive 100+ features pages which includes over 1000 reusable UI Components where they can be easily used.</p>
                  <div className='d-flex bg-btn'>
                    <button>Discover more</button>
                    <button>Discover more</button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* images section end */}

      {/* Gravity World start */}

      <section className='my-5'>
        <Container>
          <Row>
            <Col>
              <h3 className='text-center gw-heading'>Gravity World</h3>
              <p className='text-center w-75 m-auto fs-5 c-gray'>Gravity is simply the best choice for your new website. Every demo can be modified and adopted.
                Start Creating Beautiful Websites With Gravity Unique & Creative Layouts.</p>
            </Col>
          </Row>
          <div className='gw-img'>
            <img src={require(`./images/gw-img.png`)} className='w-100'></img>
          </div>
        </Container>
      </section>

      {/* Gravity World end */}
      <hr></hr>
      {/* 350+ section start */}

      <section className='my-5'>
        <Container>
          <Row className='my-3'>
            <Col>
              <h2 className='text-center my-2 pg-txt'>350+ Different Pages</h2>
              <p className='text-center w-75 m-auto c-gray fs-5 mb-2'>These professionally designed demos below are built to give you a boosted start for your project.
                Every demo can easily be modified and adopted for any kind of project.</p>
            </Col>
          </Row>
          <Row className='my-4 justify-content-center align-items-center'>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3">
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3">
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3">
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-4'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3">
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3">
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3">
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 350+ section end */}
      <hr></hr>

      {/* 1000+ Elements start */}

      <section className='my-5'>
        <Container>
          <Row>
            <Col>
              <h3 className='text-center pg-txt'>1000+ Elements</h3>
              <p className='w-75 text-center m-auto c-gray fs-5'>Gravity's 1000+ easy to use and customizable UI elements make it most customizable theme on the market. Build websites like a Lego. Every element can be modified for any kind of project.</p>
            </Col>
          </Row>
          <Row>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 1000+ Elements end */}
      <hr></hr>

      {/* Included in Gravity start */}

      <section className='my-5'>
        <Container>
          <Row>
            <Col>
              <h3 className='text-center pg-txt'>Included in Gravity</h3>
              <p className='w-75 text-center c-gray fs-5 m-auto'>Unique Features are usually collection of Base Features with or without the Global Classes. These Features can be easily used and customized in any pages.</p>
            </Col>
          </Row>
          <Row>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" className='py-3'>
              <div>
                <div className='w-100 m-auto box p-2'>
                  <img src={img1} className='img-center py-1'></img>
                  <p className='text-center fw-bold'>HOME PAGES</p>
                </div>
              </div>
            </Col>

          </Row>
        </Container>
      </section>

      {/* Included in Gravity end */}
      <hr></hr>
      {/* MAKE IT YOURS start */}

      <section>
        <div className='make-bg py-5'>
          <Container>
            <h3 className='text-center make-h3'>MAKE IT YOURS</h3>
            <p className='text-center w-75 m-auto fs-4'>Start Creating Beautiful Websites With Gravity Unique & Creative Layouts.Purchase Gravity for $59 only & Build websites like a Lego.</p>
            <div className='my-3'>
              <button className='make-btn m-auto'>PURCHASE NOW</button>
            </div>
          </Container>
        </div>
      </section>

      {/* MAKE IT YOURS end */}

      {/* footer start */}

      {/* <section className='bg-color py-5'>
        <Container>
          <Row>
            <Col>
              <img src={require(`./images/logo.png`)}></img>
              <p className='fo-color pt-3'>Gravity is an incredibly beautiful and fully responsive Bootstrap Template for any type of professionals.</p>
              <p className='fo-color'>These professionally designed demos below are built to give you a boosted start for your project. Build Your websites like a lego.</p>
            </Col>
            <Col className='mx-2'>
              <h3 className='t-border'>LATEST POSTS</h3>
              <div className='fo-color'>
                <p>1000+ Unique Elements</p>
                <p>Mar 25, 2021</p>
              </div>
              <div className='fo-color'>
                <p>1000+ Unique Elements</p>
                <p>Mar 25, 2021</p>
              </div>
              <div className='fo-color'>
                <p>1000+ Unique Elements</p>
                <p>Mar 25, 2021</p>
              </div>
            </Col>
            <Col>3</Col>
            <Col>4</Col>
          </Row>
        </Container>
      </section> */}

      {/* footer end */}

    </>
  );
}

export default App;
