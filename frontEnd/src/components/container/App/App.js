
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomeScreen from '../HomeScreen/HomeScreen';
import CreateScreen from '../CreateScreen/CreateScreen';
import UpdateScreen from '../UpdateScreen/UpdateScreen';
import ViewScreen from '../ViewScreen/ViewScreen';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Footer from '../../presentational/Footer/footer';

import imgBackground from '../../../assets/bg.jpg';
import imgGithub from '../../../assets/github.png';
import imgLinkedin from '../../../assets/linkedin.png';

export default function App() {

  const divStyle = {
    margin:'0px', 
    width: '100%',
    height: '100%',
    overflow: 'auto',
    backgroundImage: `url(${imgBackground})`,
    opacity: 0.9 }

	return(
    <Container fluid style={divStyle}>
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
      <Row>
        <div style={{position:'fixed', bottom:'0', height:'auto', marginTop:'40px', width:'100%', textAlign:'center'}}>
          <Footer imgGithub={imgGithub} imgLinkedin={imgLinkedin} />
        </div>
      </Row>
    </Container>
  )
}
