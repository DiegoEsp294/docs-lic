
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Create from "../../presentational/Create/Create";
import '../../container/App/App.css'
import {
	getCreatePatient
} from '../../../services/apiServices';

export default function CreateScreen() {

	
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [date, setDate] = useState('');
	const [dni, setDNI] = useState('');
	const [socialWork, setSocialWork] = useState('');
	const [saved, setSaved] = useState(false);
	const [existsValue, setExists] = useState(false);
	const [validateValue, setValidate] = useState(false);

	let history = useHistory();

	const btSalir = () => {
		history.push('/');
	}

	const handleFirstname = (e) => {
		setFirstName(e.target.value);
	}

	const handleLastname = (e) => {
		setLastName(e.target.value);
	}

	const handleDNI = (e) => {
		setDNI(e.target.value);
		setExists(false);
		setSaved(false);
	}

	const handleDate = (e) => {
		setDate(e.target.value);
	}

	const handleSocialWork = (e) => {
		setSocialWork(e.target.value);
	}

	// const refresh = () => {
	// 	setDNI('');
	// 	setDate('');
	// 	setFirstName('');
	// 	setLastName('');
	// 	setSocialWork('');
	// }

	const handleSaveButton = () => {
		const dataPatient = {
			firstname: firstName,
			lastname: lastName,
			dni: dni,
			record: socialWork,
			birthday: date
		}
		const handlers = { 
			onStatusSave: (value) => setSaved(value),
			onStatusExists: (value) => setExists(value)
		};
		getCreatePatient(dataPatient, handlers);
	}

	return(
		< Create
			btSalir={btSalir}
			handleFirstname={handleFirstname}
			handleLastname={handleLastname}
			handleDNI={handleDNI}
			handleDate={handleDate}
			handleSocialWork={handleSocialWork}
			handleSaveButton={handleSaveButton}
			existsValue={existsValue}
		  	validateValue={true}
			saved={saved}
		/>
	)
}
