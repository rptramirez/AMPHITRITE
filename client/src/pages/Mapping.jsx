import React, { useEffect } from 'react';

import { Card, Button, CardTitle, CardText, Form, FormGroup, Label, Input } from 'reactstrap';

import { getMessages } from '../components/API';

import '../assets/css/mapping.css';

const position = [14.584845990381517, 120.93302058452049];

const Mapping = (props) => {  
  useEffect(() => {
    getMessages().then((messages) => {
      this.setState({
        messages,
      });
    });
  }, []);

  return (
    <Card body className="message-form" style={{marginTop: 90, marginRight: 1285}}>
    <CardTitle style={{fontWeight: 'bolder', fontFamily: 'Roboto', fontSize: '30px'}}>Image Uploader</CardTitle>
    <CardText style={{marginTop: 10, fontFamily: 'Roboto', fontSize: '18px'}}>Upload images on marine debris for analysis based on your location</CardText>
    {
      !props.sendingMessage && !props.sentMessage && props.haveUsersLocation ?
        <Form onSubmit={props.formSubmitted}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              onChange={props.valueChanged}
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name" />
          </FormGroup>
          <FormGroup>
            <Label for="message">Message</Label>
            <Input
              onChange={props.valueChanged}
              type="textarea"
              name="message"
              id="message"
              placeholder="Enter a message" />
          </FormGroup>
          <Button type="cancel" color="danger" onClick={props.cancelMessage}>Cancel</Button> {' '}
          <Button type="submit" color="info" disabled={!props.formIsValid()}>Send</Button>
        </Form> :
        props.sendingMessage || !props.haveUsersLocation ? 
          <video
            autoPlay
            loop
            src="https://i.giphy.com/media/BCIRKxED2Y2JO/giphy.mp4"></video> :
          <CardText>Thanks for submitting a message!</CardText>
    }
  </Card>
  );
};

export default Mapping;
