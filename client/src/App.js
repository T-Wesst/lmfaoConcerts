import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  Carousel,
  Container,
  Col,
  Row,
  Button,
  Card,
  Media
} from 'react-bootstrap';
import concert1 from './images/concert1.jpg';
import concert2 from './images/concert2.jpg';
import concert3 from './images/concert3.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { events: [] };
  }
  getComedyEvents = () => {
    const url = `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=comedy&apikey=${
      process.env.REACT_APP_API_KEY
    }`;
    axios
      .get(url)
      .then(response =>
        this.setState({ events: response.data._embedded.events })
      );
  };

  handleClick = eventURL => {
    alert(eventURL);
  };

  componentDidMount() {
    this.getComedyEvents();
  }
  render() {
    console.log('Render State: ', this.state);
    return (
      <div>
        <Navbar sticky="top" bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home"> Icon Concerts</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav justify variant="tabs" className="mr-auto">
                <Nav.Link href="#home">About Us</Nav.Link>
                <Nav.Link href="#events">Events</Nav.Link>
                <Nav.Link href="#search">Search</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={concert1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={concert2} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={concert3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
        <Container>
          {this.state.events.map(event => (
            <div key={event.id}>
              <Row>
                <Col>
                  <Card>
                    <Media>
                      <img
                        width={200}
                        height={200}
                        className="mr-3"
                        src={event.images[0].url}
                        alt="Generic placeholder"
                      />
                      <Media.Body>
                        <h5>{event.name}</h5>
                        <p>
                          {event.dates.status.code}
                          {event.classifications[0].genre.name}
                          {event.dates.start.dateTime}
                          {/* {event._embedded} */}
                          {event.info}
                        </p>
                        <Button
                          onClick={() => this.handleClick(event.url)}
                          variant="primary"
                        >
                          Purchase
                        </Button>
                      </Media.Body>
                    </Media>
                  </Card>
                </Col>
              </Row>
            </div>
          ))}
        </Container>
      </div>
    );
  }
}
