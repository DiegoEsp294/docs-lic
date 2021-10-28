import React from 'react';

  const Create = ({ handleFirstname, handleLastname, handleDNI, handleDate,
                    handleSaveButton, btSalir, existsValue, handleSocialWork, saved }) => {
    return (
      <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <section className="vertical-center">
          <header className="container">
            <hr className="color-line"></hr>
            <h3 className="text-center color-title">REGISTRAR PACIENTE</h3>
            <hr className="color-line"></hr>
            <div className="d-flex align-items-center justify-content-center h-100">
              <form>
                <div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="color-title">Nombre</label>
                    <input type="text" className="form-control" id="InputName" ariadescribedby="textHelp"    
                    placeholder="Agregar nombre" onChange={(e) => handleFirstname(e)} required/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastname" className="color-title">Apellido</label>
                    <input type="text" className="form-control" id="lastname" ariadescribedby="nameHelp" placeholder="Agregar apellido" onChange={(e) => handleLastname(e)} required autoFocus/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="dni" className="color-title">Nº documento</label>
                    <input type="number" className="form-control" id="dni" ariadescribedby="numberHelp" placeholder="Nº documento" onChange={(e) => handleDNI(e)} required/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="dni" className="color-title">Fecha De Nacimiento</label>
                    <input type="date" className="form-control" id="date" ariadescribedby="dateHelp" placeholder="Agregar apellido" onChange={(e) => handleDate(e)} required/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="background" className="color-title">Obra social</label>
                    <input type="text" className="form-control" id="bg" ariadescribedby="textHelp" placeholder="Agregar obra social" onChange={(e) => handleSocialWork(e)} required/>
                  </div>
                </div>
                <br/>
                <div className="container h-100">
                { !saved ?
                  null
                :
                  <div className="alert alert-success" role="alert">
                      Guardado correctamente
                  </div>
                }
                <div>
                    { existsValue ?
                      <div className="alert alert-danger" role="alert">
                        El documento ya se encuentra registrado
                      </div>
                    :
                    null
                    }
                  </div>
                  <div>
                    <div className="text-center">
                      <input type="submit" value="REGISTRAR"
                        className="buttons"
                        onClick={() => handleSaveButton()}
                      />
                      <span> </span>
                      <input type="submit" value="SALIR"
                        className="buttons"
                        onClick={() => btSalir()}
                      />
                    </div>
                  </div>
                </div>
            </form>
          </div>
        </header>
      </section>
    </div>
    );
  }

export default Create

