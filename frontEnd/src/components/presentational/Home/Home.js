import React from 'react';
import Card from 'react-bootstrap/Card';

  const Home = ({handleCreate, handleViews, handleUpdate}) => {
    return (
       <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <section className="vertical-center">
          <header className="container">
            <hr className="color-line"></hr>
            <h2 className="text-center color-title">REGISTRO DE DATOS</h2>
            <hr className="color-line"></hr>
            <br/>
            <Card className="color-card" border="primary" style={{ width: '30rem', height: '20rem'}}>
                <Card.Header></Card.Header>
                <Card.Body>
                  <div className="d-flex align-items-center justify-content-center h-100">
                    <div className="center-text">
                      <div className="d-flex flex-column">
                        <button className="button" onClick={() => handleCreate()}>REGISTRAR PACIENTE</button>
                        <br/>
                        <button className="button" onClick={() => handleViews()}>LISTA DE PACIENTES </button>
                        <br/>
                        <button className="button" onClick={() => handleUpdate()}>AÑADIR DATOS</button>
                      </div>
                    </div>
                  </div>
                </Card.Body>
                <Card.Footer></Card.Footer>
              </Card>
          </header>
        </section>
      </div>
    );
  }

export default Home