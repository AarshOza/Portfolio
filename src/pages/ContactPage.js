import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';
import { Form, Button } from 'react-bootstrap';
import validator from "validator";
import empty from "is-empty";
import emailjs from 'emailjs-com';
const ReactDOM = require('react-dom')

class ContactPage extends React.Component {

  constructor(props) {
    super(props);
    this.nameref = React.createRef();
    this.emailref = React.createRef();
    this.messageref = React.createRef();
    this.state = {
      name: '',
      email: '',
      message: '',
      disabled: false,
      emailSent: null,
      validated: false,
      errors: {}
    };
  }
  componentDidUpdate(){
    if (document.activeElement === ReactDOM.findDOMNode(this.nameref.current)) {
      delete this.state.errors.name; 
    }
    if (document.activeElement === ReactDOM.findDOMNode(this.emailref.current)) {
      delete this.state.errors.email;
    }
    if (document.activeElement === ReactDOM.findDOMNode(this.messageref.current)) {
      delete this.state.errors.message;
    }
  }

  handleChange = (event) => {

    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    this.setState({errors: {},validated: false});
    event.preventDefault();

    const errors = {};
    

    console.log(JSON.stringify(this.state.errors))


    // validation
    if (!isNaN(parseInt(this.state.name)) || empty(this.state.name)) {
      console.log('name',errors)
      errors.name = "Please enter valid full name without numbers";
    }
    if (!validator.isEmail(this.state.email)) {
      errors.email = "Invalid email address";
    }

    if (empty(this.state.message)) {
      console.log('message', errors)
      errors.message = "Message is required";
    }
    if (!empty(errors) ) {
      this.setState({ errors, validated: false});
      console.log('empty err',errors)
    } else if (JSON.stringify(this.state.errors) !== {}) {
      console.log('empty state err', this.state.errors)
      this.setState({validated:false})
    } else {
      this.setState({ validated: true});
    }

    const form = event.currentTarget;
    console.log(event)
    if (form.checkValidity() === false) {
      console.log(this.state.errors)
      event.stopPropagation();
    }
    else {

    let templateParams = {
      from_name: this.state.email,
      to_name: 'aarsh@aarshoza.me',
      message: this.state.message,
      name: this.state.name
    }

    emailjs.send('service_vm0usri', 'template_p04jl94', templateParams, 'user_2VZT14aZocQVYvGkIImPa')
      .then((result) => {
        this.setState({
            disabled: true,
            emailSent:true
          });
        setTimeout(() => {
          this.setState({
            disabled: false,
            emailSent: null,
            name:'',
            email: '',
            message: '',
            errors: {},
            validated: false
          });
        }, 3000);
      }, (error) => {
          this.setState({
          disabled: false,
          emailSent: false
        });
      });
    }
  }

  render() {
    return (
      <div>
        <Hero title={this.props.title} />

        <Content>
          <Form className="form-group required" noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
            <Form.Group controlId="full-name">
              <Form.Label className='control-label'>
                Full Name
              </Form.Label>
              <Form.Control ref={this.nameref} isInvalid={this.state.errors.name} required name="name" type="text" value={this.state.name} onChange={this.handleChange} />
              {this.state.errors.name && (
                <Form.Control.Feedback type="invalid">{this.state.errors.name}</Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label className='control-label'>
                Email
              </Form.Label>
              <Form.Control ref={this.emailref} isInvalid={this.state.errors.email} required name="email" type="email" value={this.state.email} onChange={this.handleChange} />
              {this.state.errors.email && (
                <Form.Control.Feedback type="invalid">{this.state.errors.email}</Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group controlId="message">
              <Form.Label className='control-label'>
                Message
              </Form.Label>
              <Form.Control ref={this.messageref} isInvalid={this.state.errors.message} required name="message" as="textarea" rows="3" value={this.state.message} onChange={this.handleChange} />
              {this.state.errors.message && (
                <Form.Control.Feedback type="invalid">{this.state.errors.message}</Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group controld="submit">
              <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                Send
              </Button>
            </Form.Group>

            {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}

            {this.state.emailSent === false && <p className="d-inline error-msg">Email Not Sent</p>}
          </Form>
        </Content>
      </div>
    );
  }
}

export default ContactPage;
