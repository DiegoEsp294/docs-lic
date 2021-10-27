export const baseURL = 'http://localhost/docs-lic/backEnd';

export const getPatientByDniURL = () => `${baseURL}/patient/get.php`;
export const getAllPatientURL = () => `${baseURL}/patient/getAll.php`;
export const savePatientURL = () => `${baseURL}/patient/save.php`;
export const deletePatientURL = () => `${baseURL}/patient/delete.php`;

export const getSessionsByPatientURL = () => `${baseURL}/session/getByPatient.php`;
export const saveSessionURL = () => `${baseURL}/session/save.php`;
export const getDeleteSessionURL = () => `${baseURL}/session/deleteById.php`;