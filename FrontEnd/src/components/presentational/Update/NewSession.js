/* import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const NewUpdate = ({
  imgOdontograma, 
  handleChangeSelect, 
  valueSelect, 
  dataButtons,
  handleClickButton}
) => {
return (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    <section className="vertical-center">
      <Container fluid>
        <Row className="justify-content-md-center" style={{marginTop: '30px'}}>
          <Col></Col>
            <Col>
              <select defaultValue={valueSelect} onChange={handleChangeSelect}>
                <option value="amalgama">Amalgama</option>
                <option value="amalgama-desadaptada">Amalgama desadaptada</option>
                <option value="ausente">Ausente</option>
                <option value="caries">Caries</option>
                <option value="corona-adaptada">Corona adaptada</option>
              </select>
            </Col>
          <Col></Col>
        </Row>
        <Row className="justify-content-md-center" style={{marginTop: '20px'}}>
          <Col></Col>
            <Col>
              <ListGroup horizontal >
                {dataButtons.map((data, idx) => (
                    <ListGroup.Item className="my-2"  key={idx}>
                      <Container fluid='md'>
                        <Row className="justify-content-md-center" style={{padding: '3px'}}>
                          <ButtonGroup className="justify-content-md-center" aria-label="First group">
                            <button > {data.num} </button>
                          </ButtonGroup>                        
                        </Row>
                        <Row className="justify-content-md-center">
                          <ButtonGroup className="justify-content-md-center" aria-label="First group">
                            <button value='btn0' onClick={() => handleClickButton(valueSelect,idx, 'btn0')} className={data['btn0']} style={{width: '18px', height: '18px'}}> </button>
                          </ButtonGroup>
                        </Row>
                        <Row className="justify-content-md-center">
                          <ButtonGroup aria-label="First group">
                            <button value='btn1' onClick={() => handleClickButton(valueSelect, idx, 'btn1')} className={data['btn1']} style={{width: '18px', height: '18px'}}> </button>
                            <button value='btn2' onClick={() => handleClickButton(valueSelect, idx, 'btn2')} className={data['btn2']} style={{width: '18px', height: '18px'}}> </button>
                            <button value='btn3' onClick={() => handleClickButton(valueSelect, idx, 'btn3')} className={data['btn3']} style={{width: '18px', height: '18px'}}> </button>
                          </ButtonGroup>
                        </Row>
                        <Row className="justify-content-md-center">
                          <ButtonGroup className="justify-content-md-center" aria-label="First group">
                            <button value='btn4' onClick={() => handleClickButton(valueSelect, idx, 'btn4')} className={data['btn4']} style={{width: '18px', height: '18px'}}> </button>
                          </ButtonGroup>
                        </Row>
                      </Container>
                    </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          <Col></Col>
        </Row>
        <Row className="justify-content-md-center" style={{marginTop: '10px', padding: '30px'}}>
          <Col></Col>
          <Col><Image src={imgOdontograma} style={{height: "350px", width: "500px"}}/></Col>
          <Col></Col>
        </Row>
      </Container>
    </section>
  </div>
);
}

export default NewUpdate;
 */
import React from 'react';
import Image from 'react-bootstrap/Image';
import avatarImg from '../../../assets/avatar.ico';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';


  const NewUpdate = ({handleTextData, data, handleButtonUpdate,
                      handleButtonBack, handleButtonQuit}
      ) => {
    return (
      <div>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
        }}>
           <section className="vertical-center">
            <header className="container">
              <div >
                <hr className="color-line"></hr>
                <h3 className="text-center color-title">DATOS PERSONALES</h3>
                <hr className="color-line"></hr>
                <div className="d-flex align-items-center justify-content-center h-100">
                  <Card border="primary" style={{ width: '26rem', height: '10rem' }}>
                    <Card.Header></Card.Header>
                    <Card.Body>
                      <Row>
                        <Col sm={4} md={5} className>
                          <Image src={avatarImg} roundedCircle style={{width:'90px'}} />
                        </Col>
                        <Col>
                          <tr>
                            <td className="list-group "> {data.firstname} {data.lastname} </td>
                            <td className="list-group "> edad  : {data.birthday} años</td>
                            <td className="list-group "> DNI  : {data.dni}</td>
                            <td className="list-group"> obra social  : IOSEP</td>
                          </tr>
                        </Col>
                      </Row>
                    </Card.Body>
                    <Card.Footer></Card.Footer>
                  </Card>
                </div>
                <hr className="color-line"></hr>
                <h3 className="text-center color-title">AGREGAR DATOS DE LA SESION</h3>
                <hr className="color-line"></hr>
                <div className="justify-content-center h-100">
                  <div className="form-group">
                    <label htmlFor="comment">Anotaciones</label>
                    <textarea className="form-control" rows="4  q" id="comment" onChange={(e) => handleTextData(e)}    
                    placeholder="Sin anotación" required></textarea>
                  </div>
                </div>
                <br></br>
                <div className="justify-content-center h-100">
                  <div className="text-center">
                    <input type="submit" value="Agregar"
                      className="buttons"
                      onClick={() => handleButtonUpdate()}
                    />
                    <span> </span>
                    <input type="submit" value="Volver"
                      className="buttons"
                      onClick={() => handleButtonBack()}
                    />
                    <span> </span>
                    <input type="submit" value="Salir"
                      className="buttons"
                      onClick={() => handleButtonQuit()}
                    />
                  </div>
                </div>
              </div>
            </header>
          </section>
        </div>
      </div>
    );
  }

export default NewUpdate;