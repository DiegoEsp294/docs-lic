import axios from 'axios';
import {
    getPatientByDniURL,
    getAllPatientURL,
    savePatientURL,
    getSessionsByPatientURL,
    getDeleteSessionURL,
    deletePatientURL,
    saveSessionURL
  } from '../utils/urls';

export const getCreatePatient = (dataPatient, handlers) => {

    const { firstname, lastname, dni, record, birthday } = dataPatient;
    const {onStatusSave, onStatusExists} = handlers;
    axios
      .post(savePatientURL(),{firstname: firstname, lastname: lastname, dni: dni, record: record, birthday: birthday })
      .then((resp) => {
          if(resp.data.message === 'solved'){
            onStatusSave(true);
            onStatusExists(false);
          } else {
            onStatusSave(false);
            onStatusExists(true);
            }
        })
      .catch((error) => {console.log(error)});
    };

export const getAllPatients = (handlers) => {
    const { onListPatients } = handlers;
    axios
        .get(getAllPatientURL(),{headers: {'Content-Type': 'application/json'}})
        .then((resp) => {
            onListPatients(resp.data.list)
        })
        .catch((error) => {console.log(error)});
    };

export const getPatientByDni = (dni, handlers) => {
    const { onDataPatient, onSelectedSearch, onValidDni } = handlers;
    axios
      .post(getPatientByDniURL(), {dni: dni})
      .then((resp) => {
        console.log(resp.data);
        if(resp.data.status === "ok"){
                onDataPatient(resp.data.patient)
           } else {
                onDataPatient('')
           }
           onSelectedSearch(resp.data.status) && onValidDni(resp.data.status)
        })
      .catch((error) => {
          console.log(error)
        });
    };

export const getSessionsByPatient = (id, handlers) => {
    const { onDataSessions } = handlers;
    axios
        .post(getSessionsByPatientURL(), {patientId: id})
        .then((resp) => onDataSessions(resp.data.sessions))
        .catch((error) => {console.log(error)});
    };
    
export const getDeleteSession = (patientId, sessionId) => {
    axios
        .post(getDeleteSessionURL(), {patientId: patientId, sessionId: sessionId})
        .then((resp) => console.log(resp.data))
        .catch((error) => {console.log(error)});
    };

export const getDeletePatient = (id) => {
    axios
        .post(deletePatientURL(), {patientId: id})
        .then((resp) => console.log(resp.data))
        .catch((error) => {console.log(error)});
    };

export const getSaveSession = (session) => {
    const { patientId, data } = session;
    axios
        .post(saveSessionURL(), {data: data, patientId: patientId})
        .then((resp) => console.log(resp.data))
        .catch((error) => {console.log(error)});
    };