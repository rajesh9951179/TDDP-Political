import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import './NavScrollExample.css';

function NavScrollExample() {
  return (
     
    <div className="search-container">
      <h1 className="subscribe-heading">Subscribe for Updates</h1>
      <div>
      <Form className="d-flex search-form">
        <Form.Control
          type="search"
          placeholder="Enter your Email ID or Mobile Number"
          className="me-2 search-input"
          aria-label="SUBSCRIBE"
        />
        <Button variant="outline-success" className="search-button">
          <i className="fas fa-search" aria-hidden="true"></i>
          SUBSCRIBE
        </Button>
      </Form>
      </div>
    </div>
  );
}

export default NavScrollExample;