import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import { Link } from 'react-router-dom'


export default function Jobs() {
  const jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Tech Solutions Ltd',
      location: 'Remote',
      type: 'Full Time',
      salary: '$3,000 – $5,000',
    },
    {
      id: 2,
      title: 'Backend Developer',
      company: 'CloudWare Inc',
      location: 'New York, USA',
      type: 'Contract',
      salary: '$4,000 – $6,000',
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      company: 'Creative Studio',
      location: 'London, UK',
      type: 'Part Time',
      salary: '$2,000 – $3,500',
    },
    {
      id: 4,
      title: 'Digital Marketer',
      company: 'Growth Hub',
      location: 'Remote',
      type: 'Full Time',
      salary: '$2,500 – $4,000',
    },
     {
      id: 3,
      title: 'UI/UX Designer',
      company: 'Creative Studio',
      location: 'London, UK',
      type: 'Part Time',
      salary: '$2,000 – $3,500',
    },
     {
      id: 3,
      title: 'UI/UX Designer',
      company: 'Creative Studio',
      location: 'London, UK',
      type: 'Part Time',
      salary: '$2,000 – $3,500',
    },
  ]

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Available Jobs</h2>

      <Row>
        {jobs.map((job) => (
          <Col md={6} lg={4} className="mb-4" key={job.id}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{job.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {job.company}
                </Card.Subtitle>

                <p className="mb-1">
                  📍 <strong>Location:</strong> {job.location}
                </p>

                <p className="mb-1">
                  💰 <strong>Salary:</strong> {job.salary}
                </p>

                <Badge bg="secondary" className="mb-3">
                  {job.type}
                </Badge>

               <div className="d-grid">
                <Button as={Link} to="/apply" variant="primary">
                    Apply Now
                </Button>
                </div>

              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}
