
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Update from "../../presentational/Update/Update";
import NewSession from "../../presentational/Update/NewSession";
import imgOdontograma from "../../../assets/odontograma.png"
import {
	getPatientByDni,
	getSaveSession
} from '../../../services/apiServices';

import './UpdateScreen.css';

export default function UpdateScreen() {

	const [searchDni, setSearchDni] = useState('');
	const [selectedSearch, setSelectedSearch] = useState(false);
	const [dataPatient, setDataPatient] = useState('');
	const [annotation, setAnnotation] = useState('');
	const [diagnosis, setDiagnosis] = useState('');

	const [found, setFound] = useState(true);
	const [isEmpty, setIsEmpty] = useState(false);

	const [valueSelect, setValueSelect] = useState('amalgama');
	const [dataButtons, setDataButtons] = useState([
		{id: 0, num:'18', btn0: 'ausente', btn1: 'vacio', btn2: 'amalgama' , btn3: 'caries', btn4: 'caries'},
		{id: 1, num:'17', btn0: 'ausente', btn1: 'vacio', btn2: 'amalgama' , btn3: 'caries', btn4: 'caries'},
		{id: 2, num:'16', btn0: 'ausente', btn1: 'vacio', btn2: 'amalgama' , btn3: 'caries', btn4: 'caries'}
	]);

	let history = useHistory();

	const handleChangeSelect = (event) => {
		setValueSelect({value: event.target.value});
		console.log(event.target.value);
	}

	const handleClickButton = (valueSelect, idx, btn) => {
		console.log('idx = ' + idx);
		console.log('valueSelect = ' + valueSelect.value);
		console.log('btn = ' + btn);
		console.log(dataButtons[idx][btn]);
		dataButtons.map(function(obj){
			if((obj['id'] === idx)){
				obj[btn] = valueSelect.value;
				console.log(obj[btn]);
			}
			console.log(obj);
			return obj;
		 });
		 setDataButtons(dataButtons);
	}

	const handleButtonQuit = () => {
		history.push('/');
	}

	const handleButtonBack = () => {
		setSelectedSearch(false);
		setDataPatient('');
		setSearchDni('');
		setAnnotation('');
		setDiagnosis('');
		setIsEmpty(false);
		setFound(true);
	}

	const handleButtonSearch = () => {
		console.log(searchDni);
		if(searchDni !== ''){
			setIsEmpty(false);
			const handlers = { 
				onDataPatient: (data) => setDataPatient(data),
				onSelectedSearch: (value1) => setSelectedSearch(value1 === 'ok')
			 };
			 getPatientByDni(searchDni, handlers);
		}
		else{
			setIsEmpty(true);
		}
		setFound(selectedSearch);
 	}

	const handleSearchDni = (e) => {
		setSearchDni(e.target.value);
	}

	const handleDiagnosisData = (e) => {
		setDiagnosis(e.target.value);
	}

	const handleTextData = (e) => {
		setAnnotation(e.target.value);
	}

	const handleButtonUpdate = () => {
		const session = {
			patientId: dataPatient.id,
			data: annotation 
		}
		getSaveSession(session);
		handleButtonBack();
		console.log('updated')
	}
	
	return(
		<>
		{ !selectedSearch ?
			<Update
				handleSearchDni={handleSearchDni}
				found={found}
				empty={isEmpty}
				handleButtonSearch={handleButtonSearch}
				handleButtonQuit={handleButtonQuit}
		/>
		:
			<NewSession
				handleTextData={handleTextData}
				data={dataPatient}
				handleButtonUpdate={handleButtonUpdate}
				handleDiagnosisData={handleDiagnosisData}
				handleButtonBack={handleButtonBack}
				handleButtonQuit={handleButtonQuit}
				imgOdontograma={imgOdontograma}
				handleChangeSelect={handleChangeSelect}
				valueSelect={valueSelect}
				dataButtons={dataButtons}
				handleClickButton={handleClickButton}
		/>
		}
	</>

	)
}
