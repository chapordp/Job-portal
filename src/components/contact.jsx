import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export default function Contact() {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <Card className="shadow-sm">
            <Card.Body>
              <h2 className="text-center mb-4">Contact Us</h2>
              <p className="text-center text-muted mb-4">
                Have questions about jobs, applications, or partnerships?
                Send us a message and we’ll get back to you shortly.
              </p>

              <Form>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="name">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your full name"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6} className="mb-3">
                    <Form.Group controlId="email">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3" controlId="subject">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Subject of your message"
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Write your message here..."
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button variant="primary" size="lg">
                    Send Message
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Contact Info */}
      <Row className="mt-5 text-center">
        <Col md={4}>
          <h5>📍 Address</h5>
          <p>123 Job Street, Career City</p>
        </Col>

        <Col md={4}>
          <h5>📧 Email</h5>
          <p>support@jobportal.com</p>
        </Col>

        <Col md={4}>
          <h5>📞 Phone</h5>
          <p>+1 (234) 567-8900</p>
        </Col>
      </Row>
    </Container>
  )
}
