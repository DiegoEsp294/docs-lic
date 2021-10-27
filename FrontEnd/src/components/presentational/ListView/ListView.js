import React from 'react';
import Table from 'react-bootstrap/Table';

  const ListView = ({handleButtonSelect, handleButtonQuit, listPatients}) => {
    return (
        <div >
          <section className="vertical-center">
            <header className="container">
              <hr className="color-line"></hr>
              <h2 className="text-center color-title">LISTADO</h2>
              <hr className="color-line"></hr>
              <div className="d-flex table-wrapper">
                <Table  striped bordered hover>
                    <thead className="table-background-dark">
                      <tr>
                        <th className="text-center">Nº</th>
                        <th className="text-center">NOMBRE</th>
                        <th className="text-center">APELLIDO</th>
                        <th className="text-center">DNI</th>
                        <th className="text-center"></th>
                      </tr>
                    </thead>
                    {listPatients.map((item,index) => (
                    <thead className="table-background" key={index}>
                        <tr >
                          <th className="text-center">{index+1}</th>
                          <td className="text-center">{item.firstname}</td>
                          <td className="text-center">{item.lastname}</td>
                          <td className="text-center">{item.dni}</td>
                          <td className="text-center">
                          <button
                              type="button"
                              className="buttons"
                              onClick={() => handleButtonSelect(item)}
                            >Historial
                            </button>
                          </td>
                        </tr>
                      </thead>
                    ))}      	           
                </Table>
              </div>
              <br/>
              <div className="text-center">
                <button 
                  type="button" 
                  className="buttons"
                  onClick={() => handleButtonQuit()}
                > Volver </button>
              </div>
            </header>
          </section>
      </div>        
    );
  }

export default ListView;
