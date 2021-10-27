
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomeScreen from '../HomeScreen/HomeScreen';
import CreateScreen from '../CreateScreen/CreateScreen';
import UpdateScreen from '../UpdateScreen/UpdateScreen';
import ViewScreen from '../ViewScreen/ViewScreen';
import imgBackground from '../../../assets/bg.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function App() {

	return(
    <Container fluid style={{
      backgroundImage: `url(${imgBackground})`,
      opacity: 0.9
      }}>
      <Row className="justify-content-md-center">
      <HashRouter>
        <Switch>
          <Route path="/" component={HomeScreen} exact/>
          <Route path="/create" component={CreateScreen} exact/>
          <Route path="/Update" component={UpdateScreen} exact/>
          <Route path="/Views" component={ViewScreen} exact/>
        </Switch>
      </HashRouter>
      </Row>
    </Container>
  )
}
