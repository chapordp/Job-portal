import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Jobs from './jobs'
import Contact from './Contact'

export default function Hero() {
  return (
    <div className="bg-light py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Content */}
          <Col md={6}>
            <h1 className="fw-bold mb-3">
              Find Your <span className="text-primary">Dream Job</span> Today
            </h1>
            <p className="text-muted mb-4">
              Search thousands of jobs from top companies and start building
              your future today.
            </p>

            {/* Search Form */}
            <Form className="d-flex gap-2 flex-wrap">
              <Form.Control
                type="text"
                placeholder="Job title or keyword"
              />
              <Form.Control
                type="text"
                placeholder="Location"
              />
              <Button variant="primary">
                Search Jobs
              </Button>
            </Form>

            {/* Stats */}
            <div className="d-flex gap-4 mt-4">
              <div>
                <h5 className="fw-bold mb-0">10k+</h5>
                <small className="text-muted">Jobs</small>
              </div>
              <div>
                <h5 className="fw-bold mb-0">5k+</h5>
                <small className="text-muted">Companies</small>
              </div>
              <div>
                <h5 className="fw-bold mb-0">20k+</h5>
                <small className="text-muted">Candidates</small>
              </div>
            </div>
          </Col>

          {/* Right Image */}
          <Col md={6} className="text-center mt-4 mt-md-0">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Job search"
              className="img-fluid"
              style={{ maxHeight: '380px' }}
            />
          </Col>
        </Row>
        <Jobs />
        <Contact />
      </Container>
    </div>
    
  )
}
