
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ListView from "../../presentational/ListView/ListView";
import SingleView from "../../presentational/ListView/SingleView";
import "../ViewScreen/ViewScreen.css";

import {
	getAllPatients,
	getSessionsByPatient,
	getDeleteSession,
	getDeletePatient
} from '../../../services/apiServices';

export default function ViewScreen() {

	const [listPatients, setListPatients] = useState([]);
	const [dataPatient, setDataPatient] = useState('');
	const [dataSessions, setDataSessions] = useState([]);
	const [selectedSearch, setSelectedSearch] = useState(false);
	const [show, setShow] = useState(false);
	const [annotation, setAnnotation] = useState(false);
	const [isEmpty, setIsEmpty] = useState(false);

	let history = useHistory();

	const handleButtonQuit = () => {
		history.push('/');
	}

	const handleButtonSelect = (item) => {
		setSelectedSearch(true);
		console.log(item);
		setDataPatient(item);
		const handlers = { onDataSessions: (data) => setDataSessions(data) };
		getSessionsByPatient(item.id, handlers);
	}

	const handleButtonBack = () => {
		setSelectedSearch(false);
	}

	const handleButtonDelete = (patientId) => {
		getDeletePatient(patientId);
		window.location.reload();
	}

	const handleRemoveItem	= (patientId, sessionId) => {
		getDeleteSession(patientId, sessionId);
		window.location.reload();
	}

	const handleButtonDialog = (index, annotation) => {
		setShow(true)
		setAnnotation(annotation)
	}

	const handleButtonClose = () => {
		setShow(false)
	}

	useEffect(() => {
		const handlers = { 
			onListPatients: (data) => setListPatients(data)
		 };
		getAllPatients(handlers);
	}, []);


	return(
		<>
		{ !selectedSearch ?
			<ListView
				listPatients={listPatients}
				handleButtonQuit={handleButtonQuit}
				handleButtonSelect={handleButtonSelect}
				empty={listPatients === []}
			/>
		:
			<SingleView
				handleButtonQuit={handleButtonQuit}
				data={dataPatient}
				handleButtonBack={handleButtonBack}
				handleButtonDelete={handleButtonDelete}
				handleRemoveItem={handleRemoveItem}
				handleButtonDialog={handleButtonDialog}
				handleButtonClose={handleButtonClose}
				show={show}
				textExtend={annotation}
				age={10}
				sessions={dataSessions}
			/>
		}
		</>
	)
}
