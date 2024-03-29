import React from 'react';
import { Col, Container, Row } from 'reactstrap';
//import { translate } from 'react-i18next';
import PropTypes from 'prop-types';
import ChatCard from './components/ChatCard';

const Chat = ({ t }) => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">{"Agentz Chat"}</h3>
      </Col>
    </Row>
    <Row>
      <ChatCard />
    </Row>
  </Container>
);
export default Chat;