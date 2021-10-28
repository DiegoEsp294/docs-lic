import React from 'react';

  const Update = ({handleButtonQuit, handleSearchDni, handleButtonSearch, found, empty}) => {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <section className="vertical-center">
          <header className="container">
            <hr className="color-line"></hr>
            <h3 className="text-center color-title">BUSCAR POR DOCUMENTO</h3>
            <hr className="color-line"></hr>
            <br/>
            <div className="d-flex align-items-center justify-content-center h-100">
              <div className="form-group">
                <label htmlFor="exampleInputDni" className="color-title">Nº de documento</label>
                <input
									type="number"
									className="form-control"
									id="InputName"
									ariadescribedby="numberHelp"
									placeholder="Documento"
									onChange={(e) => handleSearchDni(e)}
                />
              </div>
			       </div>
             <br/>
             <div>
              { empty ?
                    <div className="d-flex align-items-center justify-content-center h-100">
                      <div className="text-center">
                        <div className="alert alert-danger" role="alert">
                          Debes ingresar un número de documento
                        </div>
                      </div>
                    </div>
              :
                <div>
                  { found ?
                    " "
                  :
                    <div className="d-flex align-items-center justify-content-center h-100">
                      <div className="text-center">
                        <div className="alert alert-danger" role="alert">
                          El DNI no se encuentra en la base de datos
                        </div>
                      </div>
                    </div>
                  }
                </div>
              }
              </div>
                <div className="d-flex align-items-center justify-content-center h-100">
                  <div className="text-center">
                    <input type="submit" value="Buscar"
                      className="buttons"
                      onClick={() => handleButtonSearch()}
                    />
                    <span> </span>
                    <input type="submit" value="Salir"
                      className="buttons"
                      onClick={() => handleButtonQuit()}
                    />
                  </div>
                </div>
          </header>
        </section>
      </div>
    );
  }

export default Update;