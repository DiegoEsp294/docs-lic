import React from 'react';
import { Modal } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import avatarImg from '../../../assets/avatar.ico';
import Table from 'react-bootstrap/Table';


  const SingleView = ({ handleButtonQuit, data, handleButtonBack, 
                        handleButtonDelete, handleRemoveItem, handleButtonDialog, 
                        handleButtonClose, show, textExtend, age, sessions}) => {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
        }}>
        <section className="vertical-center">
        <header className="container">
          <div className="container h-100">
            <hr className="color-line"></hr>
            <h4 className="text-center color-title">DATOS PERSONALES</h4>
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
              <h4 className="text-center color-title">REGISTRO DE ANOTACIONES</h4>
              <hr className="color-line"></hr>
              <div className="d-flex table-wrapper-single">
              <Table  striped bordered hover>
                    <thead className="table-background-dark">
                      <tr>
                        <th className="text-center">Nº</th>
                        <th className="text-center" > Fecha </th>
                        <th className="text-center">Anotaciones</th>
                        <th className="text-center"></th>
                      </tr>
                    </thead>
                    {sessions.map((item, index) => (
                    <thead key={index} className="table-background">
                      <tr>
                        <td className="text-center"> {item.num}</td>
                        <td className="center-text"> {item.datetime}</td>
                        <td className="center-text">
                          <button 
                            type="button"
                            className="bttext center-text"
                            onClick={() => handleButtonDialog(index, item.data)}
                            > ...
                          </button>                            
                        </td>
                        <td className="center-text">
                          <button 
                            type="button"
                            className="btn btn-danger"
                            onClick={() => handleRemoveItem(data.id, item.id)}
                            >X
                          </button>
                        </td>
                      </tr>
                    </thead>
                    ))}      	           
                </Table>
              </div>
              <Modal
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show} 
                onHide={handleButtonClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Anotacion</Modal.Title>
                </Modal.Header>
                <Modal.Body>{textExtend}</Modal.Body>
              </Modal>
            </div>
            <div 
              className="d-flex align-items-center justify-content-center h-100"
              style={{padding: '10px'}}
            >
              <div className="center-text">
                <button 
                  type="button"
                  className="buttons" 
                  onClick={() => handleButtonBack()} 
                >Volver</button>
                <span> </span>
                <button 
                  type="button"
                  className="buttons" 
                  onClick={() => handleButtonQuit()} 
                >Menú</button>
                <span> </span>
                <button 
                  type="button"
                  className="buttons"
                  onClick={() => handleButtonDelete(data.id)} 
                >Eliminar</button>
              </div>
            </div>
          </header>
        </section>
      
      </div>

    );
  }

export default SingleView;

