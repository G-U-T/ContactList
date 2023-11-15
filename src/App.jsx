import './App.css'
import ContactList from './components/ContactList'
import SelectedContact from './components/SelectedContact';
import { useState } from 'react';

export default function App() {

	const [selectedContactID, setSelectedContactID] = useState(null);

	return (
	<>
		{
			selectedContactID ? (
				<SelectedContact
				selectedContactID={selectedContactID}
				setSelectedContactID={setSelectedContactID}></SelectedContact>
			) : (
				<ContactList setSelected={setSelectedContactID}></ContactList>
			)
		}
		
	</>
	);
}
